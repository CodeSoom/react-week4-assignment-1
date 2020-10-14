import React from 'react';

export default function Item({ task: { id, title }, onClickComplete }) {
  return (
    <li>
      {title}
      <button type="button" onClick={() => onClickComplete(id)}>
        완료
      </button>
    </li>
  );
}
