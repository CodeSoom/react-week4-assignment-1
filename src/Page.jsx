import InputContainer from './containers/InputContainer';
import ListContainer from './containers/ListContainer';

export default function Page() {
  return (
    <div>
      <h1>To-do</h1>
      <InputContainer />
      <ListContainer />
    </div>
  );
}
