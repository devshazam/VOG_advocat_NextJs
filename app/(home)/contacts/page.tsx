"use client";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';


export default function Contacts({ params }: { params: { id: string } }) {
  const id = params.id || '';

  

  return (
    <>

    <div >
      <div className='practice-bg-wrapper'>
          <Container>
            <div className="main-text-wrapper">
              <h1  className='big-title'>Контакты</h1>
            </div>
          </Container>
      </div>
      <div >
        <Container>
          <div className="wrap-practics">

            <Row className=''>

            <Col xs={12} md={4}>
                <div className="contacts-block">
                    <h4>Контакты:</h4>
                    <div className='contacts-info'>
                      <ul>
                        <li><a href='tel:+79034780554' style={{color: 'black', textDecoration: 'none'}}>+7 (903) 478-05-54</a></li>
                        <li><a href='tel:+79297873000' style={{color: 'black', textDecoration: 'none'}}>+7 (929) 787-30-00</a></li>
                        <li>Бульвар Энгельса 29а</li>
                      </ul>
                    </div>
                    <img src='/icons8-contacts-100.png'></img>
                </div>
              </Col>
            <Col xs={12} md={4}>
                <div className="contacts-block">
                    <h4>Мессенджеры:</h4>
                    <div className='contacts-info'>
                    <a href='https://wa.me/+79034780554'><Image  className='whatsapp' src='/icons8-whatsapp-100.png' alt='whatsapp' width={40} height={40}/></a>
                    <a href='https://t.me/+79034780554'><Image className='whatsapp'  src='/icons8-telegram-100.png' alt='telegram' width={40} height={40}/></a>
                    </div>
                    <img src='/icons8-contacts-100.png'></img>
                </div>
              </Col>
            <Col xs={12} md={4}>
                <div className="contacts-block">
                    <h4>Ссылки:</h4>
                    <div className='contacts-info'>
                    <ul>
                      <li><a href='https://vk.com/anna_lisitskaya' style={{textDecoration: 'none'}}>Вконтакте</a></li>
                      <li> </li>
                    </ul></div>
                    <Image src='/icons8-contacts-100.png' alt='contacts' width={40} height={40}></Image>
                </div>
              </Col>
            </Row>
          </div >
        </Container>
    </div>

      <div>
          <Container>
            <div className="wrap-map">
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abef6c4bcfab1c93584604def10227a22c6837bce38c269fac349bfff7b3cc952&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
            </div>
        </Container>
      </div>

    </div>


    </>
  );
}
