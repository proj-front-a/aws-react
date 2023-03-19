import axios from "axios";

export const getApi = async (url) => {
    const { data } = await axios.get(url);
      return data;
};

export const putApi = async (url, newData) => {
  await axios.put( url,newData);
};

export const addUser = async (url, id, newUser) => {
  await axios.post(url, {
        id,
        email: newUser.email,
        password: newUser.password,
      });
};