import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import "./index.scss";
import FadeIn from "react-fade-in";

import {getGoals, QuizData} from "../../data/QuizData";

const Quiz = (props) => {
  let sel = localStorage.getItem(`quiz_answer_${props.quizIndex}`);
  const [selected, setSelected] = useState(sel != null ? Number(sel) : props.data.selected);
  
  function selectAnswer(index) {
    setSelected(index);
    localStorage.setItem(`quiz_answer_${props.quizIndex}`, index);
  }
  useEffect(() => {
    props.updateSkinGoals(props.quizIndex, selected);
  }, [selected]);

  useEffect(() => {
    let storage_index = `quiz_answer_${props.quizIndex}`;
    if (!localStorage.getItem(storage_index))
      localStorage.setItem(storage_index, props.data.selected);
  }, []);
  
    return (
        <div className="quiz">
          <div className="quiz-question">{props.data.question}</div>
          {props.data.answers.map((answer, index) => (
            <li
              className={
                selected == index ? "quiz-ans-selected" : "quiz-ans"
              }
              key={index}
              onClick={() => selectAnswer(index)}
            >
              {answer}
            </li>
          ))}
          <div className="quiz-clear-btn" onClick={() => selectAnswer(-1)}>
            Clear Answer
          </div>
        </div>
    );
};

Quiz.propTypes = {
  data: PropTypes.exact({
    question: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.string),
      selected: PropTypes.number,
    plus: PropTypes.string
  }),
};

export default Quiz;
