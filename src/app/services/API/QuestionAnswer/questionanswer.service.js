import Api from "../use-axios";

const index = () => {
  return Api().get("questionanswers");
};

const getQuestionAnswers = (questionId) => {
  return Api().get(`questionanswers/${questionId}`);
};

const getAnswerQuestions = (answerId) => {
  return Api().get(`answerquestions/${answerId}`);
};

export default {
  index,
  getQuestionAnswers,
  getAnswerQuestions,
};
