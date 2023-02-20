import React, {useState, useEffect, useMemo, memo} from "react";

import {Scrollbars} from "react-custom-scrollbars-2";
import Quiz from "../../../components/Quiz";

import logo from "../../../assets/logo.png";
import logo_bar from "../../../assets/logo-bar.png";
import logo_icon from "../../../assets/logo-icon.png";

import { getGoals, QuizData } from "../../../data/QuizData";
import { Recommendation } from "../Recommendation";
import FadeIn from "react-fade-in/lib/FadeIn";

import "react-appear-on-scroll/dist/index.css";

import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import ScrollAnimation from "react-animate-on-scroll";


// import ScrollAnimate from "react-scroll-fade-animation";


const LeftPane = memo(({updateSkinGoals, getSkinGoals}) => {
  const [page, setPage] = useState(0);

  let showRecommendedProducts = () => {
    window.scrollTo(0, 0);
    setPage(1);
  };

  let QuizPane = () => {
    return (
      <FadeIn transitionDuration={500} delay={600}>
        {QuizData.map((quizData, index) => (
            <Quiz
              key={index}
              quizIndex={index}
              className="quiz"
              data={quizData}
              updateSkinGoals={updateSkinGoals}
            />
        ))}
        <div className="left-pane-footer">
          <img className="logo-icon" src={logo_icon} alt="Logo" />
          <span>Nicely done! We are almost finished.</span>
        </div>
        <div className="btn" onClick={() => showRecommendedProducts()}>
          See my matches
        </div>
      </FadeIn>
    );
  };

  let ProductPane = () => {
    return (
      <div className="product-view">
        <div className="btn btn-no-margin" onClick={() => setPage(0)}>
          &lt; Go back to selection
        </div>
        <Recommendation skinGoals={getSkinGoals()} />
      </div>
    );
  };

  return (
    <div className="left-pane">
      <Scrollbars
        className="left-pane-content"
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <div className="left-pane-heading-wrapper">
          <div className="left-pane-heading">
            <div>
              <img className="logo" src={logo} alt="Logo" />
            </div>
            <img src={logo_bar} alt="Logo" />
          </div>
          {page === 0 ? <QuizPane /> : <ProductPane />}
        </div>
      </Scrollbars>
    </div>
  );
});

LeftPane.propTypes = {};

export default LeftPane;
