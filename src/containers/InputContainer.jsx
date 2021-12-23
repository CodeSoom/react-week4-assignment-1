import Input from '../Input';

export default function InputContainer({
  taskTitle, onChangeTitle, onClickAddTask,
}) {
  return (
    <Input
      value={taskTitle}
      onChange={onChangeTitle}
      onClick={onClickAddTask}
    />
  );
}
