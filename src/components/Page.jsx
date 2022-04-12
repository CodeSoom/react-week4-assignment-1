import ListContainer from '../containers/ListContainer';
import Input from './Input';

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
