import { combineReducers } from "redux";
import { uiModalReducers } from "./uiModalReducers";

export const rootReducers = combineReducers({
    ui: uiModalReducers,
})