import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BottomBarNavigation from './Component/BottomBar.js';
import Nav from './Component/BottomBarNavigation.js';
import NavBar from './Component/BottomBarNavigation.js';
const Home = () => <h2>Home Page</h2>;
const Likes = () => <h2>Likes Page</h2>;
const Search = () => <h2>Search Page</h2>;
const Profile = () => <h2>Profile Page</h2>;

const App = () => {
  return (
    <Router>
      {/* <BottomBarNavigation /> */}
      {/* <Nav /> */}
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/likes' element={<Likes />} />
        <Route path='/search' element={<Search />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
