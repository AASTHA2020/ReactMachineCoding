import React, { useState } from 'react';
import styles from './lightDarkMode.module.css';

const LightDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
      <button onClick={toggleMode}>
        Switch to {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
};

export default LightDarkMode;
