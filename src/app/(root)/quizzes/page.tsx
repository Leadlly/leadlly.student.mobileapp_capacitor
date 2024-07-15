import dynamic from "next/dynamic";

const QuizzesPage = dynamic(() => import("./_components/QuizzesPage"), {
  ssr: false,
});

const Quizzes = () => {
  return <QuizzesPage />;
};

export default Quizzes;
