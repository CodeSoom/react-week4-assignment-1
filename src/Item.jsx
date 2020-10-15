import React from 'react';

export default function Item({ task: { id, title }, onClickDelete }) {
  return (
    <li>
      {`${id} : ${title}`}
      <button type="button" onClick={() => onClickDelete(id)}>
        완료
      </button>
    </li>
  );
}
