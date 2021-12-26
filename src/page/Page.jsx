import ListContainer from '../list/ListContainer';
import InputContainer from '../input/InputContainer';

export default function Page() {
  return (
    <div>
      <h1>To-do</h1>
      <InputContainer />
      <ListContainer />
    </div>
  );
}
