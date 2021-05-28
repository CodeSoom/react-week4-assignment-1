import Item from './Item';

export default function List({ tasks, onClickDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <p>할 일이 없어요!</p>
    );
  }

  return (
    <ol>
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          onClickDeleteTask={onClickDeleteTask}
        />
      ))}
    </ol>
  );
}
