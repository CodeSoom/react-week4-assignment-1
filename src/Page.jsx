import InputContainer from './containers/InputContainer';
import List from './List';

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
