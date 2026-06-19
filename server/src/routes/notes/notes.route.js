import express from "express";
import apiRoutes from "#constant/routes.constant";
import {
  fetchNotes,
  fetchNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "#controllers/notes/notes.controller";
const { FETCH_NOTES, FETCH_NOTE_BY_ID, CREATE_NOTE, UPDATE_NOTE, DELETE_NOTE } =
  apiRoutes;

const router = express.Router();

router.get(FETCH_NOTES, fetchNotes);
router.get(FETCH_NOTE_BY_ID, fetchNoteById);
router.post(CREATE_NOTE, createNote);
router.put(UPDATE_NOTE, updateNote);
router.delete(DELETE_NOTE, deleteNote);

export default router;
