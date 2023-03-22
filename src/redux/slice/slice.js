import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
    "getAllUsers",
    async () => {
        const url = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${url}/users`);
        const data = await response.json()
        return data;
    }
);

const blogSlice = createSlice({
    name: "blog",
    initialState: { users: [], status: "idle" },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.usersData = action.payload;
            })
    }
})

export const { setBlogs } = blogSlice.actions;

export default blogSlice.reducer