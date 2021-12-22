import List from './List';
import InputContainer from './InputContainer';

export default function Page({
  tasks, onClickDeleteTask,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <InputContainer />
      <List
        tasks={tasks}
        onClickDelete={onClickDeleteTask}
      />
    </div>
  );
}
