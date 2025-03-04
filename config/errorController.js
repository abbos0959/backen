const ErrorGlobalHandler = (err, req, res, next) => {
  const stack = err.stack;
  const message = err.message;
  const status = err.status ? err.status : "failed";
  const statusCode = err.statusCode ? err.statusCode : 500;

  res.status(statusCode).json({
    status,
    message,
    stack,
  });
  next();
};

const NotFoundError = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  error.status = 404;
  next(error);
};

module.exports = { ErrorGlobalHandler, NotFoundError };
