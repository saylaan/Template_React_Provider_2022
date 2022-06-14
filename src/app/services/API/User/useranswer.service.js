import Api from "../use-axios";

const post = (useranswer) => {
  return Api().post("useranswers", useranswer);
};
const getUserQuestionAnswers = (userId) => {
  return Api().get(`useranswers/${userId}`);
};

export default {
  post,
  getUserQuestionAnswers,
};
