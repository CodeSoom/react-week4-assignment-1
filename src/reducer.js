const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  return { tasks: [{ id: 1, title: '첫번째 할일' }] };
}
