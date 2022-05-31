import { configureStore } from "@reduxjs/toolkit";
import genreReducer from "./feature/Genre/genreSlice";
export default configureStore({
	reducer: {
		genre: genreReducer
	}
})