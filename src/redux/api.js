import axios from "axios";

const API = axios.create({ baseURL: "https://pacific-tor-16383.herokuapp.com" });

API.interceptors.request.use((req) => {
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).token
      }`;
    }
    return req;
  });
export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const createBlog = (blogData) => API.post("/blog", blogData);
export const getBlogs = (page) => API.get(`/blog?page=${page}`);
export const getBlog = (id) => API.get(`/blog/${id}`);
export const deleteBlog = (id) => API.delete(`/blog/${id}`);
export const getBlogsByUser = (id) => API.get(`/blog/userBlogs/${id}`);//user id
