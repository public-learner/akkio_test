import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const QuizData = [
  {
    question: "What type of product are you looking for?",
    answers: [
      "Foundation that is light in coverage and buildable",
      "Foundation that is medium in coverage and buildable",
      "Tinted serums and tinted moisturizers with light coverage",
      "Concealers",
      "Skincare serums to achieve my skin goals",
    ],
    plus: "I'm looking for ",
    selected: 2,
  },
  {
    question: "What’s your skin Color?",
    answers: [
      "Very Light",
      "Light",
      "Light Medium",
      "Medium",
      "Medium tan",
      "Deep",
      "Very Deep",
    ],
    plus: "My skin color is ",
    selected: 1,
  },
  {
    question: "How do you prefer wearing your foundation-related products?",
    answers: [
      "Lighter than my natural skin tone",
      "Same shade as my natural skin tone",
      "Darker than my natural skin tone",
      "I don’t wear these types of products",
    ],
    plus: "I'm looking for products that are ",
    selected: -1,
  },
];


export const getGoals = () => {
  return QuizData.map((quizData, index) => {
    return {
      value:
        quizData.selected >= 0
          ? quizData.answers[quizData.selected]
          : quizData.question,
      selected: quizData.selected,
      plus: quizData.plus
    };
  });
};