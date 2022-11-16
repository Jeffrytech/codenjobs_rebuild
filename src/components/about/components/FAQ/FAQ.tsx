import {useState} from 'react';

import styles from './FAQ.module.scss';
import { AiOutlineDown } from "react-icons/ai";

const FAQ = ({question, answer}) => {

  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div 
      className={styles.faq}
    >
      <div 
        className={styles.faq_question} 
        onClick={
          () => setShowAnswer((prevValue => !prevValue))
        } 
      >
        <h3>{question}</h3>
        <AiOutlineDown style={showAnswer ? {transform: "rotateZ(-90deg)"}: null} className={styles.icon} />
      </div>
      {/* <div style={showAnswer ? {minHeight: "6rem", overflowY:"scroll"}: null} className={styles.faq_answer}> */}
      {showAnswer && <div className={styles.faq_answer}>
        <p>{answer}</p>
      </div>}
    </div>
  );
};

export default FAQ;