import React from "react";
import useSurvey from "../../providers/SurveyProvider";
/* ------------- || External Components Library || ------------- */
import QuestionComponent from "./components/QuestionComponent";

const Dashboard = () => {
  const { questions } = useSurvey();

  return (
    <div style={{ width: "100%0", height: "100%", padding: "1rem" }}>
      <p style={{ color: "#FFFFFF" }}>Dashboard</p>
      {questions.map((question) => (
        <QuestionComponent key={question.id} question={question} />
      ))}
    </div>
  );
};

export default Dashboard;
