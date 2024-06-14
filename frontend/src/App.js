import React, { useState } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import Resume from './components/Resume';

// useState to empty 
function App() {
  const [words, setWords] = useState([]);
  const [input, setInput] = useState('');
  const [showResume, setShowResume] = useState(false); // unfalse when pressed

  // event form listening for user to enter something
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // event form handling the user input
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setWords([...words, input.trim()]);
      setInput('');
    }
  };
// logic for showing resume
  const handleResumeClick = () => {
    setShowResume(true);
  };
// logic to unshow resume
  const handleBackToCarouselClick = () => {
    setShowResume(false);
  };

  const slides = [
    'gains.png',
    'headshot.jpg',
    'talk.png',
    'talk1.JPG',
    'moves.MOV',
    'swag.MOV',
  ];

  return (
    <div className="w-full pt-10">
      <div className="w-1/5 m-auto pt-10">
        <Carousel slides={slides} />
        <form onSubmit={handleFormSubmit} className="mt-5 flex">
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Enter something"
            className="border p-2 flex-grow mr-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2">
            Add
          </button>
        </form>
        {/* showing the client what they inputted */}
        <div className="mt-5">
          {words.map((word, index) => (
            <div key={index} className="p-2 border-b">
              {word}
            </div>
          ))}
        </div>
        <button
          onClick={handleResumeClick}
          className="bg-purple-600 text-white p-2 mt-5"
        >
          Go to Resume
        </button>
      </div>
      {showResume && (
        <div className="w-3/5 m-auto">
          <Resume onBackClick={handleBackToCarouselClick} />
        </div>
      )}
    </div>
  );
}

export default App;
