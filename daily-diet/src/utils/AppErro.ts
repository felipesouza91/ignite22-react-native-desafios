/* eslint-disable no-useless-constructor */
export class AppError extends Error {
  constructor(message: string) {
    super(message)
  }
}
