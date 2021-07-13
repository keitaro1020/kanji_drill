import React from 'react';
import './App.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { GetRandomQuestion } from './Data';

export type Question = {
    id: number;
    questionType: string;
    question: string;
    answerForm: string;
    answer: string;
}
  
type QuestionViewProp = {
  question: Question;
}

const QuestionView = (prop: QuestionViewProp) => {
  const [questionType, setQuestionType] = React.useState(prop.question.questionType);
  const [question, setQuestion] = React.useState(prop.question.question);
  const [answerForm, setAnswerForm] = React.useState(prop.question.answerForm);
  const [answer, setAnswer] = React.useState(prop.question.answer);
  const [open, setOpen] = React.useState(false);
  const answerOpen = () => {
    setOpen(true);
  };

  const answerClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <Card className="Card">
    <CardContent>
        <Typography variant="h6" component="h2">
            回答
        </Typography>
        <Typography variant="h3" component="h2">
            {answer}
        </Typography>
    </CardContent>
    </Card>
  );

  const nextQuestion = () => {
    const question = GetRandomQuestion();
    setQuestionType(question.questionType);
    setQuestion(question.question);
    setAnswerForm(question.answerForm);
    setAnswer(question.answer);
  };

  return (
    <Card className="Card">
    <CardContent>
        <Typography className="CardTitle" color="textSecondary" gutterBottom>
            漢字ドリル
        </Typography>
        <Typography variant="h6" component="h2">
            {questionType}
        </Typography>
        <Typography variant="h3" component="h2">
            {question}
        </Typography>
        <Typography variant="h3" component="h2" color="primary">
            {answerForm}
        </Typography>
        <Modal
            open={open}
            onClose={answerClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {modalBody}
        </Modal>


    </CardContent>
    <CardActions>
        <Button size="large" onClick={answerOpen}>答えを見る</Button>
        <Button size="large" onClick={nextQuestion}>次の問題</Button>
    </CardActions>
    </Card>
  );
}

export default QuestionView;
