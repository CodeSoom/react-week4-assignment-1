import Input from './components/InputContainer/Input';
import List from './components/ListContainer/List';

export default function Page({
  taskTitle, onChangeTitle, onClickAddTask,
  tasks, onClickDeleteTask,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <Input
        value={taskTitle}
        onChange={onChangeTitle}
        onClick={onClickAddTask}
      />
      <List
        tasks={tasks}
        onClickDelete={onClickDeleteTask}
      />
    </div>
  );
}
