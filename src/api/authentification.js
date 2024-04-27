import { api } from "./workUIQ";

export const registerUser = async ({ email, password }) => {
  try {
    const response = await api.post("/users/register", { email, password, confirmpassword: password });
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return error.response.data;
  }
};

export const login = async ({ email, password }) => {
  try {
    const response = await api.post("/users/login", { email, password });
    console.log("response", response);
    return response.data;
  } catch (err) {
    console.log("err", err);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get("/users/current");
    return response.data;
  } catch (error) {
    console.log("error", error);
    return error.response.data;
  }
};

export const getProfile = async () => {
  try {
    const token = localStorage.getItem("token");
    console.log("token", token);
    const response = await api.get("/users/getprofile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return error.response.data;
  }
};
