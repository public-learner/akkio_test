import React, {useState, useEffect, useCallback, useMemo} from "react";
import "./index.scss";

import RightPane from "./RightPane";
import LeftPane from "./LeftPane";

import { QuizData, getGoals } from "../../data/QuizData";


const Home = ({}) => {
  const [skinGoals, setSkinGoals] = useState(getGoals());
  
  localStorage.setItem("username", "Anita");

  let updateSkinGoals = useCallback((updated_index, option_index) => {
    let newgoals = skinGoals;
    newgoals[updated_index] = {
      value:
        option_index === -1
          ? QuizData[updated_index].question
          : QuizData[updated_index].answers[option_index],
      selected: option_index,
      plus: newgoals[updated_index].plus,
    };
    setSkinGoals([...newgoals]);
  }, []);

  let getSkinGoals = useCallback(() => {
    return skinGoals;
  }, []);

  return (
    <div style={{height: "100%"}}>
      <RightPane skinGoals={skinGoals} />
      <LeftPane updateSkinGoals={updateSkinGoals} getSkinGoals={getSkinGoals} />
    </div>
  );
};

Home.propTypes = {

};

export default Home;
