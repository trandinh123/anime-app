import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGenre = () => {
	return async (dispatch, getState) => {
		try {
			let response = await axios.get('https://api.jikan.moe/v4/genres/anime')
			dispatch(setValue(response.data.data));
			dispatch(setStatus('success'))
		} catch(e) {
			dispatch(setValue(''))
			dispatch(setStatus('fail'));
		}
	}
}
export const genreSlice = createSlice({
	name: 'genre',
	initialState: {
		value: '',
		status: 'loading'
	}, 
	reducers: {
		setStatus: (state, action) => {
			state.status = action.payload;
		},
		setValue: (state, action) => {
			state.value = action.payload
		}
	}
})

export const selectGenre = (state) => state.genre;
export const {setStatus, setValue} = genreSlice.actions;
export default genreSlice.reducer;