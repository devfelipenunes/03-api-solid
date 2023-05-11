export class MaxNumbOfCheckInsError extends Error {
  constructor() {
    super("Max number of check-ins reached");
  }
}
