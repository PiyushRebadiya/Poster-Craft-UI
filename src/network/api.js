// src/api/api.js
import { data } from "autoprefixer";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add interceptors if needed
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

const api = {
  getCategory: (params) => axiosInstance.get("/user_category/list", { params }),

  addCategory: (data) => axiosInstance.post("/user_category/add", data),
  updateCategory: (data) => axiosInstance.put("/user_category/update", data),
  deleteCategory: (params) =>
    axiosInstance.delete("/user_category/delete", { params }),

  //   getUsers: () => axiosInstance.get("/users"),

  //   // GET: /users/:id
  //   getUserById: (id) => axiosInstance.get(`/users/${id}`),

  //   // POST: /posts
  //   createPost: (data) => axiosInstance.post("/posts", data),

  //   // PUT: /posts/:id
  //   updatePost: (id, data) => axiosInstance.put(`/posts/${id}`, data),

  //   // DELETE: /posts/:id
  //   deletePost: (id) => axiosInstance.delete(`/posts/${id}`),
};

export default api;
