/* istanbul ignore file */ 
import { applyMiddleware, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import { userReducer } from "./reducer";
import { persistReducer, persistStore } from "redux-persist";

const config = {
	key: "root",
	storage,
};

const persistorReducer = persistReducer(config, userReducer);

export const store = createStore(persistorReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);
