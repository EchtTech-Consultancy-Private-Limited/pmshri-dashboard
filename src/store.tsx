import { configureStore } from '@reduxjs/toolkit';
// import logger from "redux-logger";
import promise from "redux-promise-middleware";

import Reducers from 'src/reducers';

// const store = createStore(Reducers, applyMiddleware(promise));
const store = configureStore({
    reducer: Reducers,
    middleware: [promise]
});
export default store;
