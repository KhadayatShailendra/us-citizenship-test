import React, { useState } from "react";

const questions = [
  { question: "What is the supreme law of the land?", answer: ["The Constitution"] },
  { question: "What does the Constitution do?", answer: ["Sets up the government", "Defines the government", "Protects basic rights of Americans"] },
  { question: "The idea of self-government is in the first three words of the Constitution. What are these words?", answer: ["We the People"] },
  // Add all 100 questions here
];

export default function USCISPractice() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextQuestion = () => {
    setIndex((prev) => (prev + 1) % questions.length);
    setShowAnswer(false);
  };

  const prevQuestion = () => {
    setIndex((prev) => (prev - 1 + questions.length) % questions.length);
    setShowAnswer(false);
  };

  return (
    <div className="flex justify-center items-center h-screen p-4 relative bg-gray-100 font-sans">
      <button onClick={prevQuestion} className="absolute left-4 p-4 bg-blue-600 text-white rounded-full shadow-md text-lg font-bold">
        &#8592;
      </button>
      <div className="w-full max-w-2xl p-12 bg-white shadow-2xl cursor-pointer text-left rounded-lg border border-gray-300" onClick={() => setShowAnswer(!showAnswer)}>
        <p className="text-3xl font-extrabold text-gray-900 leading-snug">{questions[index].question}</p>
        {showAnswer && (
          <ul className="mt-6 text-gray-700 list-disc pl-6 text-xl font-medium">
            {questions[index].answer.map((ans, i) => (
              <li key={i}>{ans}</li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={nextQuestion} className="absolute right-4 p-4 bg-blue-600 text-white rounded-full shadow-md text-lg font-bold">
        &#8594;
      </button>
    </div>
  );
}
