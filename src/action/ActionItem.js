export default class ActionItem {
  /**
   * @param type {ActionType}
   * @param payload {object}
   */
  constructor(type, payload = undefined) {
    this.type = type;
    this.payload = payload;
  }
}
