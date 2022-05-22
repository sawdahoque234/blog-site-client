import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

//createblog
export const createBlog = createAsyncThunk(
    "blog/createBlog",
    async ({ updatedBlogData, navigate, toast }, { rejectWithValue }) => {
      try {
        const response = await api.createBlog(updatedBlogData);
        toast.success("Blog Added Successfully");
        navigate("/");
        return response.data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

//getallBlog
export const getBlogs = createAsyncThunk(
  "blog/getBlogs",
  async (page, { rejectWithValue }) => {
    try {
      const response = await api.getBlogs(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
// get single blog

export const getBlog = createAsyncThunk(
  "blog/getBlog",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getBlog(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

//get user blog

export const getBlogsByUser = createAsyncThunk(
  "blog/getBlogsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getBlogsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
//delete blog
export const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteBlog(id);
      toast.success("Blg Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// createblog slice 
  const blogSlice = createSlice({
    name: "blog",
    initialState: {
      blog: {},
      blogs: [],
      userBlogs: [],
      error: "",
      loading:false,
      currentPage: 1,
      numberOfPages: null,
    },
    reducers: {
      setCurrentPage: (state, action) => {
        state.currentPage = action.payload;
      },
    },
    extraReducers: {
      [createBlog.pending]: (state, action) => {
        state.loading = true;
      },
      [createBlog.fulfilled]: (state, action) => {
        state.loading = false;
        state.blogs = [action.payload];
      },
      [createBlog.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getBlogs.pending]: (state, action) => {
        state.loading = true;
      },
      [getBlogs.fulfilled]: (state, action) => {
        state.loading = false;
        state.blogs = action.payload.blogs;
        state.numberOfPages = action.payload.numberOfPages;
        state.currentPage = action.payload.currentPage;
      },
      [getBlogs.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getBlog.pending]: (state, action) => {
        state.loading = true;
     },
      [getBlog.fulfilled]: (state, action) => {
        state.loading = false;
        state.blog = action.payload;
        
      },
      [getBlog.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [getBlogsByUser.pending]: (state, action) => {
        state.loading = true;
      },
      [getBlogsByUser.fulfilled]: (state, action) => {
        state.loading = false;
        state.userBlogs = action.payload;
      },
      [getBlogsByUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
      [deleteBlog.pending]: (state, action) => {
        state.loading = true;
      },
      
      [deleteBlog.fulfilled]: (state, action) => {
        state.loading = false;
        console.log("action", action);
        const {
          arg: { id },
        } = action.meta;
        if (id) {
          state.userBlogs = state.userBlogs.filter((item) => item._id !== id);
          state.blogs = state.blogs.filter((item) => item._id !== id);
        }
      },
      [deleteBlog.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      },
     
    },
  });
  export const { setCurrentPage } = blogSlice.actions;
  
  export default blogSlice.reducer;