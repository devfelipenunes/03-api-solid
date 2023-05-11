export class ResouceNotFoundError extends Error {
  constructor() {
    super("Invalid credentials");
  }
}
