module.exports = class DefinedError extends Error {
  constructor({ name, status, message, expose = true }) {
    super()
    this.name = name || 'unknown'
    this.status = status
    this.message = message
    this.expose = expose

    Error.captureStackTrace(this, this.constructor)
  }
}
