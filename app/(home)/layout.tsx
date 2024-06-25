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


import { WhatsAppOutlined, ContactsOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

import { layfair_display_sc, el_messiri } from '../fonts'

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
              <img src='/лОГОТИП.jpg' style={{width: '50px', display: 'inline-block'}}></img>{" "}
               <h1 className={el_messiri.className} style={{display: 'inline-block', fontSize: '24px'}}>Лисицкая и Удовенко</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  
                  <NavDropdown
                    title="Практики"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/practice">Уголовная защита</NavDropdown.Item>
                    <NavDropdown.Item href="/practice">
                    Арбитражные споры
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/practice">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">О коллегии адвокатов</Nav.Link>
                  <Nav.Link href="/price">Прайс-Лист</Nav.Link>
                  <Nav.Link href="#action2">Контакты</Nav.Link>
                </Nav>

                  <Button variant="primary">Telegramm</Button>
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
                          <li>+7 (999) 999-99-99</li>
                          <li>+7 (999) 999-99-99</li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                      <div className="wrapper-footer-content">
                        <h6><b>Контакты</b></h6>
                        <ul>
                          <li><a href='/politica'>Политика конфиденциальности</a></li>
                          <li>+7 (999) 999-99-99</li>
                        </ul>
                      </div>
                    </Col>
                    <Col xs={12} md={4}>
                    <div className="wrapper-footer-content">
                        <h6><b>Контакты</b></h6>
                        <ul>
                          <li>+7 (999) 999-99-99</li>
                          <li>+7 (999) 999-99-99</li>
                        </ul>
                      </div>
                    </Col>
                  </Row>
                </div>
                <p className='m-0 pb-2'>© 2022 - 2023. Лисицкая и Удовенко. Все права защищены.</p>
              </Container>
          </div>
      </footer>

      <FloatButton.Group
      trigger="click"
      type="primary"
      style={{ right: 24, fontSize: 60}}
      icon={<ContactsOutlined />}
      
    >
      {/* <FloatButton /> */}
      <FloatButton icon={<WhatsAppOutlined />} />
    </FloatButton.Group>
    </>

  );
}
