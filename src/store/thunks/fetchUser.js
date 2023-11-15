import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GET_ALL_USER = "http://localhost:8000/api/auth/users"; // Define the endpoint URL

export const fetchUser = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get(GET_ALL_USER);
  return response.data;
});

fetchUser.pending === "user/fetch/pending";
fetchUser.fullfilled === "user/fetch/fullfilled";
fetchUser.rejected === "user/fetch/rejected";
