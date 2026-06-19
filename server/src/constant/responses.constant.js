const serverResponses = Object.freeze({
  statusCodes: {
    serverError: 500,
  },
  apiStateFlags: {
    success: true,
    failure: false,
  },
  commonResponses: {
    internalServerError: "Internal Server Error",
  },
});

export default serverResponses;
