class ErrorObject extends Error {
    constructor(message, statusCode) {
      super(message), (this.statusCode = statusCode);
      this.status = `${this.statusCode}.startsWith(4)` ? "fail" : "error";
      this.operational = true;
  
      Error.captureStackTrace(this, this.constructor);
    }
  }
  
  module.exports = ErrorObject;