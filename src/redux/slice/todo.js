import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchTodo = createAsyncThunk('fetchTodp', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return res.json()
})


const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodo.pending, (state) => {
            state.isLoading = true
        });
        builder.addCase(fetchTodo.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        });
        builder.addCase(fetchTodo.rejected, (state, action) => {
            console.log('Error', action.payload)
            state.isError = true
        })

    }

})

export default todoSlice.reducer