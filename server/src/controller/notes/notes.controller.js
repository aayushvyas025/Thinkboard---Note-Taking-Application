import Note from "#model/notes/notes.model";
import mongoose from "mongoose";
import serverResponses from "#constant/responses.constant";

const { badRequest, notFound, created, ok } = serverResponses.statusCodes;
const { success, failure } = serverResponses.apiStateFlags;
const { invalidNoteId, noteNotFound } = serverResponses.commonResponses;
const { notesFetched, noNotesFound, noteByIdFetched } =
  serverResponses.successResponses;
const { noteTitleRequired, noteDescriptionRequired } =
  serverResponses.errorResponses;

export const fetchNotes = async (request, response, next) => {
  try {
    const notes = await Note.find({});

    return response.status(ok).json({
      success: success,
      message:
        notes.length > 0 ? "Notes fetched successfully" : "No notes found",
      notes,
    });
  } catch (error) {
    console.error(`Error, while fetching all notes:${error.message}`);
    next(error);
  }
};

export const fetchNoteById = async (request, response, next) => {
  const { id } = request.params;

  const isValidId = mongoose.Types.ObjectId.isValid(id);

  if (!isValidId) {
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
  const isTitleEmpty = typeof title === "string" || !title.trim();
  const isDescriptionEmpty =
    typeof description === "string" || !description.trim();

  if (isTitleEmpty || isDescriptionEmpty) {
    return response
      .status(badRequest)
      .json({
        success: failure,
        message: isTitleEmpty ? noteTitleRequired : noteDescriptionRequired,
      });
  } 

  
  try {
  } catch (error) {
    console.error(`Error, while create note:${error.message}`);
    next(error);
  }
};

export const updateNote = async (request, response, next) => {
  try {
  } catch (error) {
    console.error(`Error, while update note:${error.message}`);
    next(error);
  }
};

export const deleteNote = async (request, response, next) => {
  try {
  } catch (error) {
    console.error(`Error, while delete note:${error.message}`);
    next(error);
  }
};
