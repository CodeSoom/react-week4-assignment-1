import { configureStore } from '@reduxjs/toolkit';

import reducer from './reduce';

const store = configureStore(({ reducer }));

export default store;
