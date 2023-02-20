import React, { useState, useEffect } from "react";
import {QuizData} from "../data/QuizData";

const PreferenceContext = React.createContext({});

export function PreferenceContextProvider(props) {
    const [preferences, setPreferences] = useState([]);

    const getPreferences = React.useCallback(() => {
        return preferences;
    }, [preferences])

    useEffect(() => {
        setPreferences(
            QuizData.map((quizData, index) => {
                return {
                    value:
                        quizData.selected >= 0
                            ? quizData.answers[quizData.selected]
                            : quizData.question,
                    selected: quizData.selected,
                    plus: quizData.plus,
                };
            })
        );
    }, []);

  return (
    <PreferenceContext.Provider
      value={{preferences, setPreferences, getPreferences}}
    >
      {props.children}
    </PreferenceContext.Provider>
  );
}

export const usePreferenceContext = () => React.useContext(PreferenceContext);
