import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import ToDoList from './components/TodoList/TodoList';
import ImageCarousel from './components/ImageCarousel/ImageCarousel';
import Counter from './components/Counter/Counter';
import LightDarkMode from './components/LightDarkMode/LightDarkMode';
import TrafficLight from './components/TrafficLight/TrafficLight';
import AmPmRealtime from "./components/AmPmClock/AmPmClock";
import Pagination from './components/Pagination/Pagination';
import MatchPair from './components/MatchPair/MatchPair';
import FilterProducts from './components/FilterProducts/FilterProducts';

const HomePage = () => {
  return (
    <div style={styles.homePage}>
      <h1>Welcome to My React App</h1>
      <div style={styles.buttonContainer}>
        <Link to="/todolist" style={styles.button}>To-Do List</Link>
        <Link to="/imagecarousel" style={styles.button}>Image Carousel</Link>
        <Link to="/counter" style={styles.button}>Counter</Link>
        <Link to="/lightdarkmode" style={styles.button}>Light/Dark Mode</Link>
        <Link to="/trafficlight" style={styles.button}>Traffic Light</Link>
        <Link to="/ampmrealtime" style={styles.button}>Am/Pm Realtime</Link>
        <Link to="/pagination" style={styles.button}>Pagination</Link>
        <Link to="/matchpair" style={styles.button}>Match Pair</Link>
        <Link to="/filterproducts" style={styles.button}>Filter Products</Link>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/imagecarousel" element={<ImageCarousel />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/lightdarkmode" element={<LightDarkMode />} />
        <Route path="/trafficlight" element={<TrafficLight />} />
        <Route path="/ampmrealtime" element={<AmPmRealtime />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/matchpair" element={<MatchPair />} />
        <Route path="/filterproducts" element={<FilterProducts />} />
      </Routes>
    </Router>
  );
};

// Basic inline CSS styles for simplicity
const styles = {
  homePage: {
    textAlign: 'center',
    margin: '20px',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
  }
};

export default App;
