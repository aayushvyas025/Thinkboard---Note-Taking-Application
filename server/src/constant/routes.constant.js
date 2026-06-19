const apiRoutes = Object.freeze({
  BASE: "/think-board/api/v1",
  FETCH_NOTES: "/notes/fetch",
  FETCH_NOTE_BY_ID:"/notes/fetch/:id",
  CREATE_NOTE:"/notes/create",
  UPDATE_NOTE:"/notes/update/:id",
  DELETE_NOTE:"/notes/delete/:id",
});

export default apiRoutes; 

