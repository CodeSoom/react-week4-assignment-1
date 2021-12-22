import Input from './Input';
import List from './List';
import ListContainer from './ListContainer';

export default function Page({
  taskTitle, onChangeTitle, onClickAddTask,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Input
        value={taskTitle}
        onChange={onChangeTitle}
        onClick={onClickAddTask}
      />
      <ListContainer />
    </div>
  );
}
