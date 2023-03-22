import { configureStore } from "@reduxjs/toolkit";
import reducerBlog from "../slice/slice"

const store = configureStore({
    reducer: {
        data: reducerBlog
    }
})

export default store;