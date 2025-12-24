import { createSlice } from "@reduxjs/toolkit";
import animalsData from '../../data'

export const animalsSlice = createSlice({
    name: 'animals',
    initialState: {
        items: animalsData,
        search: ''
    },
    reducers: {
        setSearch(state, action) {
            state.search = action.payload
        }
    }
})

export const {setSearch} = animalsSlice.actions
export default animalsSlice.reducer