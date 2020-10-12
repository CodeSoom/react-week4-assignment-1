export const CHANGE_TITLE = 'CHANGE_TITLE';

function changeTitle(value) {
  return {
    type: CHANGE_TITLE,
    payload: value,
  };
}

export default {
  changeTitle,
};
