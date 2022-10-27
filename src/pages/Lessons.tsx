import React, { FC } from 'react';
import '../App.css';
const Lessons: FC = () => {
  return (
    <>
      <div className="container">
        <h1>Lessons</h1>
      </div>
      <iframe src="iframe/editor.html" title="editor" className="editor" />
    </>
  );
};

export default Lessons;
