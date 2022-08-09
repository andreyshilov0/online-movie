import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import News from './components/pages/News';
import FanLab from './components/pages/FanLab';
import FanShop from './components/pages/FanShop';
import Project from './components/pages/Project';
import Home from './components/pages/Home';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="body" element={<Body />}></Route>
        <Route path="news" element={<News />}></Route>
        <Route path="fanlab" element={<FanLab />}></Route>
        <Route path="fanshop" element={<FanShop />}></Route>
        <Route path="project" element={<Project />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
