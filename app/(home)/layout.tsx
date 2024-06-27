"use client";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { el_messiri } from '../fonts'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const expand = 'lg';
  return (
    
    <>
     <Navbar expand={expand} className="bg-body-tertiary "  sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <img src='/logo.png' style={{width: '50px', display: 'inline-block'}} className='logo'></img>{" "}
               <h1 className={el_messiri.className + " hidden-title"} style={{display: 'inline-block', fontSize: '24px'}} >Лисицкая и Удовенко</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Меню
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  
                  <NavDropdown
                    title="Практики"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/practice/arbitraj">
                    Арбитражные споры
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/practice/ugolovnaya_dela">Защита по уголовным делам</NavDropdown.Item>
                    <NavDropdown.Item href="/practice/grajdanskye_spori">Гражданские споры</NavDropdown.Item>
                    <NavDropdown.Item href="/practice/semeinoe_pravo">Семейное право</NavDropdown.Item>
                    <NavDropdown.Item href="/practice/bancrotstvo">Банкротство</NavDropdown.Item>
                    <NavDropdown.Item href="/practice/administrativnoe_proizvodstvo">Административное производство</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/about">Об адвокатах</Nav.Link>
                  <Nav.Link href="/price">Прайс-Лист</Nav.Link>
                  <Nav.Link href="/contacts">Контакты</Nav.Link>
                </Nav>

                  <Button variant="primary"><a href='https://t.me/+79034780554' style={{color: 'white', textDecoration: 'none'}}>Telegram</a></Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    {children}

      <footer className='footer '>
          <div >
              <Container>
                <div className="footer__wrapper">
                  <Row className=''>
                    <Col xs={12} md={4}>
                      <div className="wrapper-footer-content">
                        <h6><b>Контакты</b></h6>
                        <ul>
                          <li><a href='tel:+79034780554' style={{color: 'black', textDecoration: 'none'}}>+7 (903) 478-05-54</a></li>
                          <li><a href='tel:+79297873000' style={{color: 'black', textDecoration: 'none'}}>+7 (929) 787-30-00</a></li>
                          <li>Бульвар Энгельса 29а</li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div className="wrapper-footer-content">
                        <h6><b>Документы</b></h6>
                        <ul>
                          <li><a href='/politica'>Политика конфиденциальности</a></li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                    <div className="wrapper-footer-content">
                        <h6><b>Ссылки</b></h6>
                        <ul>
                        <li><a href='https://vk.com/anna_lisitskaya' style={{textDecoration: 'none'}}>Вконтакте</a></li>

                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
                <Row>
                  <Col xs={12} md={6}>
                    <div className="footer__wrapper">
                    <p className='m-0 pb-2'>© 2022 - 2023. Лисицкая и Удовенко. Все права защищены.</p>
                    </div>
                  </Col>
                  <Col xs={12} md={6}>
                    <div className="footer__wrapper">
                    <p className='m-0 pb-2'>Разработка сайта: <a href='https://kopi34.ru' style={{textDecoration: 'none'}} target='_blank'>kopi34.ru</a></p>
                    </div>
                  </Col>
                </Row>
              </Container>
          </div>
      </footer>


    </>

  );
}
