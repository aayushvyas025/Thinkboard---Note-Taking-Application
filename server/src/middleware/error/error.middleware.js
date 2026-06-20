import serverResponses from "#constant/responses.constant";

const { serverError } = serverResponses.statusCodes;
const { failure } = serverResponses.apiStateFlags;
const { internalServerError } = serverResponses.commonResponses;

function setupErrorMiddleware(app) {
  app.use((error, request, response, next) => {
    response.status(serverError).json({
      success: failure,
      message: internalServerError,
    });
  });
}

export default setupErrorMiddleware;
