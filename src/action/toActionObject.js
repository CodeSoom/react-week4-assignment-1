/**
 * @param type {ActionType}
 * @param payload {object}
 */
export default function toActionObject(type, payload = undefined) {
  return {
    type,
    payload,
  };
}
