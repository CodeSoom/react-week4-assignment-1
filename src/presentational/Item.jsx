export default function Item({ task: { id, title }, onClickDeleteTask }) {
  return (
    <li>
      {title}
      <button type="button" onClick={() => onClickDeleteTask(id)}>
        완료
      </button>
    </li>
  );
}
