import number from "./number";
import color from "./color"

import { combineReducers } from "@reduxjs/toolkit";

const reducers = combineReducers({
  numberData:number,
  colorData:color
})

export default reducers