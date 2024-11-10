import { Routes, Route} from 'react-router-dom'

import HomePage from "./pages/HomePage";
import WaitingPage from "./pages/WaitingPage";
import KeywordPage from './pages/KeywordPage';
import QuizPage from './pages/QuizPage';
import AnswerKeyPage from './pages/AnswerKeyPage';
import FinalScorePage from './pages/FinalScorePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="wait" element={<WaitingPage />} />
        <Route path="keywords" element={<KeywordPage />} />
        <Route path="questions" element={<QuizPage />} />
        <Route path="answerkey" element={<AnswerKeyPage />} />
        <Route path="final" element={<FinalScorePage />} />
      </Routes>
    </>
  );
}

export default App;
