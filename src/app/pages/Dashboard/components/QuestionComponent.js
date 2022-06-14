import React, { useState, useEffect } from "react";
/* ------------- || API Client Imports || ------------- */
import QuestionAnswerService from "../../../services/API/QuestionAnswer/questionanswer.service";
import { getCurrentUser } from "../../../services/API/Auth/auth.service";
/* ------------- || External Components Library || ------------- */
import { Button, Card, CardContent, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
/* ------------- || PROVIDER || ------------- */
import useSurvey from "../../../providers/SurveyProvider";

const QuestionComponent = (props) => {
  const [answers, setAnswer] = useState([]);
  const [value, setValue] = useState("");
  const user = getCurrentUser();
  const { addAnswer } = useSurvey();

  useEffect(() => {
    QuestionAnswerService.getQuestionAnswers(props.question.id)
      .then((res) => {
        const answers = res.data;
        setAnswer(answers);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleClick = () => {
    addAnswer(user, value);
  };

  return (
    <div style={{ width: "100%", height: "100%", padding: "1rem" }}>
      <Card
        className={"flex content-center mt-6"}
        style={{ maxWidth: "90%", margin: "0 20px 20px 0" }}
        key={props.question.id}
      >
        <CardContent>
          <Typography variant={"h4"}>{props.question.sentence}</Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              {answers.map((answer) => (
                <FormControlLabel
                  value={answer.Answer.id}
                  control={<Radio />}
                  label={answer.Answer.sentence}
                  key={answer.Answer.id}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <Button variant="contained" onClick={handleClick}>
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionComponent;
