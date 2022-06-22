import { createStore } from "redux";
import rootReducer from "./service/reducer/rootReducer"; 

const store = createStore(rootReducer);

export default store;