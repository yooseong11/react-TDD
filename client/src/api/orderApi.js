import apiClient from "./apiClient";

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const getOption = async () => {
  try {
    const response = await apiClient.get("/options");
    return response;
  } catch (e) {
    console.log(e);
  }
};

export const postOrder = async (OrderDatas) => {
  try {
    const response = await apiClient.post("/order", OrderDatas);
    return response;
  } catch (e) {
    console.log(e);
  }
};
