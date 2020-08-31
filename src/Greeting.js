import React, { useState, useRef } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('world');
  const inputEl = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    setGreeting(inputEl.current.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={inputEl} id='inputName' name='name' type='text' />
        <button>Submit</button>
      </form>
      <h1>Hello, {greeting}!</h1>
    </div>
  );
};

export default Greeting;
