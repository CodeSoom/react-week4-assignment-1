import List from '../List';

export default function ListContainer({
  tasks, onClickDeleteTask,
}) {
  return (
    <List
      tasks={tasks}
      onClickDelete={onClickDeleteTask}
    />
  );
}
