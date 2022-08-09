import React from 'react';
import '../index.scss';
import { Nav, Navbar, Container } from 'react-bootstrap';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img className="logo_header" src={logo} alt="description" />
          </Link>

          <Link to="/body" className="header_h1">
            Кинотеатр
          </Link>

          <Nav className="me-auto">
            <Link to="/news" className="header_h2">
              Новости
            </Link>
            <Link to="/fanlab" className="header_h2">
              Фанлаб
            </Link>
            <Link to="/fanshop" className="header_h2">
              Фаншоп
            </Link>
            <Link to="/project" className="header_project">
              Предложить проект
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
