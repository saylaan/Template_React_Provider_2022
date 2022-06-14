import React from "react";
/* ------------- || API Client Imports || ------------- */
import QuestionService from "../services/API/Question/question.service";
import UserService from "../services/API/User/user.service";
import UserAnswerService from "../services/API/User/useranswer.service";
import QuestionAnswerService from "../services/API/QuestionAnswer/questionanswer.service";

export const surveyContext = React.createContext();

const useSurvey = () => {
  const [questions, setQuestions] = React.useState([]);

  const init = async () => {
    const questions = await QuestionService.index();
    setQuestions([...questions.data]);
  };

  const addAnswer = async (user, value) => {
    const questionanswer = await QuestionAnswerService.getAnswerQuestions(
      value
    );
    if (questionanswer.data[0].valid) {
      await UserService.getUser(user.user.id).then(async (res) => {
        const user = res.data;
        user.score += 3;
        await UserService.put(user);
      });
    } else {
      await UserService.getUser(user.user.id).then(async (res) => {
        const user = res.data;
        user.score -= 1;
        await UserService.put(user);
      });
    }
    await UserAnswerService.post({
      QuestionAnswerId: questionanswer.data[0].id,
      UserId: user.user.id,
    });
  };

  return { questions, init, addAnswer };
};

export const SurveyProvider = ({ children }) => {
  const survey = useSurvey();

  return (
    <surveyContext.Provider value={survey}>{children}</surveyContext.Provider>
  );
};

const SurveyConsumer = () => {
  return React.useContext(surveyContext);
};

export default SurveyConsumer;
