'use client';

import React, { useState } from 'react';

interface FilterBarProps {
  topics: string[];
  levels: string[];
  selectedTopic: string;
  selectedLevel: string;
  onFilterChange: (topic: string, level: string) => void;
}

export default function Filterbar({
  topics,
  levels,
  selectedTopic,
  selectedLevel,
  onFilterChange,
}: FilterBarProps) {
  return (
    <div className='my-4'>
      <div className='text-sm'>
        <button
          className={`px-4 py-2 my-2 mr-2 rounded-full border ${
            selectedTopic === 'All'
              ? 'dark:bg-white dark:border-white dark:text-gray-900 bg-gray-900 border-gray-900 text-white'
              : 'dark:bg-gray-900 dark:text-white dark:border-white border-gray-900 text-gray-900'
          } hover:bg-gray-900 hover:text-white`}
          onClick={() => onFilterChange(selectedTopic, 'All')}>
          All
        </button>
        {topics.map((topic) => (
          <button
            key={topic}
            className={`px-4 py-2 my-2 mr-2 rounded-full border ${
              selectedTopic === topic
                ? 'dark:bg-white dark:border-white dark:text-gray-900 bg-gray-900 border-gray-900 text-white'
                : 'dark:bg-gray-900 dark:text-white dark:border-white border-gray-900 text-gray-900'
            } hover:bg-gray-900 hover:text-white`}
            onClick={() => onFilterChange(topic, selectedLevel)}>
            {topic}
          </button>
        ))}
      </div>
      <div className='text-sm'>
        <button
          className={`px-4 py-2 my-2 mr-2 rounded-full border ${
            selectedLevel === 'All'
              ? 'dark:bg-white dark:border-white dark:text-gray-900 bg-gray-900 border-gray-900 text-white'
              : 'dark:bg-gray-900 dark:text-white dark:border-white border-gray-900 text-gray-900'
          } hover:bg-gray-900 hover:text-white`}
          onClick={() => onFilterChange('All', selectedLevel)}>
          All
        </button>
        {levels.map((level) => (
          <button
            key={level}
            className={`px-4 py-2 m-2 rounded-full border ${
              selectedLevel === level
                ? 'dark:bg-white dark:border-white dark:text-gray-900 bg-gray-900 border-gray-900 text-white'
                : 'dark:bg-gray-900 dark:text-white dark:border-white border-gray-900 text-gray-900'
            } hover:bg-gray-900 hover:text-white`}
            onClick={() => onFilterChange(selectedTopic, level)}>
            {level}
          </button>
        ))}
      </div>
    </div>
  );
}
