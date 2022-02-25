export const API = () => {
  const baseUrl =
    process.env.BASE_URL || "https://be-b29-dumbmerch.herokuapp.com/api/v1";

  const executeAPI = async (endpoint, config) => {
    const response = await fetch(baseUrl + endpoint, config);
    const data = await response.json();
    return data;
  };

  return {
    get: executeAPI,
    post: executeAPI,
    patch: executeAPI,
    delete: executeAPI,
  };
};
