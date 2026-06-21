const serverResponses = Object.freeze({
  statusCodes: {
    serverError: 500,
    ok: 200,
    created: 201,
    badRequest: 400,
    notFound: 404,
    manyRequest: 429,
  },
  apiStateFlags: {
    success: true,
    failure: false,
  },
  commonResponses: {
    internalServerError: "Internal Server Error",
    invalidNoteId: "Error, invalid note id",
    noteNotFound: "Error, note not found",
  },
  successResponses: {
    noNotesFound: "No notes found",
    notesFetched: "Notes fetched successfully",
    notesCreated: "Note created successfully",
    notesUpdated: "Note updated successfully",
    noteDeleted: "Note deleted successfully",
    noteByIdFetched: "Note fetched successfully by id",
  },
  errorResponses: {
    noteTitleRequired: "Error, note title is required",
    noteDescriptionRequired: "Error, note description is required",
  },
});

export default serverResponses;
