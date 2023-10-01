import React from 'react'
import { AnswerObject } from '../App';
import { ButtonWrapper, CardWrapper } from './QuestionCard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNr, totalQuestions}) => {
  return (
    <CardWrapper>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question}}/>
      <div>
        {
            answers.map(answer => (
                <ButtonWrapper correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} key={answer}>
                    <button disabled={userAnswer ? true : false} onClick={callback} value={answer}>
                        <span dangerouslySetInnerHTML={{__html: answer}}/>
                    </button>
                </ButtonWrapper>
            ))
        }
      </div>
    </CardWrapper>
  )
}

export default QuestionCard
