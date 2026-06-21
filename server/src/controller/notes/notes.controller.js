import Note from "#model/notes/notes.model";
import mongoose from "mongoose";
import serverResponses from "#constant/responses.constant";
import { validateId, validateParams } from "#validation/params.validation";

const { badRequest, notFound, created, ok } = serverResponses.statusCodes;
const { success, failure } = serverResponses.apiStateFlags;
const { invalidNoteId, noteNotFound } = serverResponses.commonResponses;
const {
  notesFetched,
  noNotesFound,
  noteByIdFetched,
  notesCreated,
  notesUpdated,
  noteDeleted,
} = serverResponses.successResponses;
const { noteTitleRequired, noteDescriptionRequired } =
  serverResponses.errorResponses;

export const fetchNotes = async (_, response, next) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });

    return response.status(ok).json({
      success: success,
      message: notes.length > 0 ? notesFetched : noNotesFound,
      notes,
    });
  } catch (error) {
    console.error(`Error, while fetching all notes:${error.message}`);
    next(error);
  }
};

export const fetchNoteById = async (request, response, next) => {
  const { id } = request.params;

  const isValidId = validateId(id);

  if (!isValidId.success) {
    return response
      .status(badRequest)
      .json({ success: failure, message: invalidNoteId });
  }

  try {
    const note = await Note.findById(id);
    if (!note) {
      return response
        .status(notFound)
        .json({ success: failure, message: noteNotFound });
    }

    return response
      .status(ok)
      .json({ success: success, message: noteByIdFetched, note });
  } catch (error) {
    console.error(`Error, while fetching note by id:${error.message}`);
    next(error);
  }
};

export const createNote = async (request, response, next) => {
  const { title, description } = request.body;
  const isValidParams = validateParams({ title, description });

  if (!isValidParams.success) {
    return response.status(badRequest).json({
      success: failure,
      message:
        isValidParams.field === "title"
          ? noteTitleRequired
          : noteDescriptionRequired,
    });
  }

  try {
    const newNote = new Note({ title, description });
    await newNote.save();

    return response
      .status(created)
      .json({ success: success, message: notesCreated });
  } catch (error) {
    console.error(`Error, while create note:${error.message}`);
    next(error);
  }
};

export const updateNote = async (request, response, next) => {
  const { id } = request.params;
  const { title, description } = request.body;
  const isValidId = validateId(id);
  const isValidParams = validateParams({ title, description });

  if (!isValidId.success) {
    return response
      .status(badRequest)
      .json({ success: failure, message: invalidNoteId });
  }

  if (!isValidParams.success) {
    return response.status(badRequest).json({
      success: failure,
      message:
        isValidParams.field === "title"
          ? noteTitleRequired
          : noteDescriptionRequired,
    });
  }
  try {
    const updatedNote = await Note.findByIdAndUpdate(id, {
      title,
      description,
    });

    if (!updateNote) {
      return response
        .status(notFound)
        .json({ success: failure, message: noteNotFound });
    }
    return response
      .status(ok)
      .json({ success: success, message: notesUpdated, updateNote });
  } catch (error) {
    console.error(`Error, while update note:${error.message}`);
    next(error);
  }
};

export const deleteNote = async (request, response, next) => {
  const { id } = request.params;
  const isValidId = validateId(id);

  if (!isValidId.success) {
    return response
      .status(badRequest)
      .json({ success: failure, message: invalidNoteId });
  }
  try {
    await Note.findByIdAndDelete(id);

    return response.status(ok).json({ success: success, message: noteDeleted });
  } catch (error) {
    console.error(`Error, while delete note:${error.message}`);
    next(error);
  }
};
