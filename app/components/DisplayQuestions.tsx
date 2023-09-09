'use client';

import { useState } from 'react';
import { Question } from '../lib/interface';
import { PortableText } from '@portabletext/react';
import { sortDataBySpecificOrder } from '../lib/utils';
import Filterbar from './Filterbar';

export default function DisplayQuestions({ data }: { data: Question[] }) {
  const topics = data
    .map((item) => item.topic)
    .filter((value, index, self) => self.indexOf(value) === index);

  const sortedTopics = sortDataBySpecificOrder(topics, [
    'HTML',
    'CSS',
    'Javascript',
    'Reactjs',
    'Typescript',
  ]);

  const levels = data
    .map((item) => item.level)
    .filter((value, index, self) => self.indexOf(value) === index);

  const sortedLevels = sortDataBySpecificOrder(levels, ['Easy', 'Difficult']);

  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [filteredQuestions, setFilteredQuestions] = useState(data);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const filterQuestions = (topic: string, level: string) => {
    const filtered = data.filter((question) => {
      return (
        (topic === 'All' || question.topic === topic) &&
        (level === 'All' || question.level === level)
      );
    });
    setFilteredQuestions(filtered);
    setCurrentQuestionIndex(0);
    setSelectedTopic(topic);
    setSelectedLevel(level);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < filteredQuestions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const restartSession = () => {
    setCurrentQuestionIndex(0);
  };

  const question = filteredQuestions[currentQuestionIndex];

  return (
    <main className='flex flex-col h-[90vh] justify-between'>
      <div>
        <h3>Technical Interview Reviewer App</h3>
        <Filterbar
          topics={sortedTopics}
          levels={sortedLevels}
          selectedTopic={selectedTopic}
          selectedLevel={selectedLevel}
          onFilterChange={filterQuestions}
        />

        <div className='my-4 w-full flex justify-between items-center'>
          {currentQuestionIndex + 1 == filteredQuestions.length ? (
            <button
              className='dark:bg-gray-900 dark:text-white dark:border-white border-gray-900 text-gray-900 underline'
              onClick={() => restartSession()}>
              Restart
            </button>
          ) : (
            <button
              className='dark:bg-gray-900 dark:text-white dark:border-white border-gray-900 text-gray-900 underline'
              onClick={() => nextQuestion()}>
              Show Next Question
            </button>
          )}

          <h2>
            Questions: {currentQuestionIndex + 1} / {filteredQuestions.length}
          </h2>
        </div>

        <div className='bg-[#d9d9d9] rounded p-6 text-gray-900'>
          <div className='text-2xl'>{question.question}</div>
          <div className='mt-4 w-full flex justify-between items-center'>
            <div>
              <button className='px-4 py-2 mr-2 rounded-full border bg-[#f5f5f5] border-gray-900 text-xs text-gray-900'>
                {question.topic}
              </button>
              <button className='px-4 py-2 mr-2 rounded-full border bg-[#f5f5f5] border-gray-900 text-xs text-gray-900'>
                {question.level}
              </button>
            </div>
            <div>
              <button
                className='border-gray-900 text-gray-900 underline'
                onClick={() => setIsAnswerVisible(!isAnswerVisible)}>
                {isAnswerVisible ? 'Hide Answer' : 'Show Answer'}
              </button>
            </div>
          </div>
        </div>
        {isAnswerVisible && (
          <div className='w-full my-4 bg-slate-100/50 rounded p-6 text-gray-900'>
            <PortableText value={question.answer} />
          </div>
        )}
      </div>

      <footer className='flex justify-center items-center w-full p-6'>
        <p className='text-xs'>Made with ♡ by stargirl.codes</p>
      </footer>
    </main>
  );
}
