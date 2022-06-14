import Api from "../use-axios";

const put = (user) => {
  return Api().put(`users/${user.id}`, user);
};

const getUser = (userId) => {
  return Api().get(`users/${userId}`);
};

export default {
  put,
  getUser,
};
