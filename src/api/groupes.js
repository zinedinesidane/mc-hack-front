import { api } from "./workUIQ";

export const createGroupe = async ({ name, company, manager, color }) => {
  try {
    const response = await api.post("/groups/create", { name, company, manager, color });
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return error.response.data;
  }
};

export const getCompanyGroupes = async (id) => {
  const response = await api.get(`/groups/company/${id}`);
  console.log("response", response);
  return response.data;
};
