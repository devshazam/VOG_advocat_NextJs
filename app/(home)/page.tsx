"use client";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { layfair_display_sc, el_messiri } from '../fonts'

import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

import { motion, Variants } from "framer-motion";
import FormComponent from './ui/form';

import { Image } from 'antd';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};



export default function Home() {

  const cardVariants: Variants = {
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };



  return (
    <>
    <div className='bg-wrapper'>
        <Container>
          <div className="main-text-wrapper">
            <h1 className={el_messiri.className}>Лисицкая и Удовенко</h1>
            <p>Разнообразные подходы, непохожий бэкграунд обуславливают вариативность защиты доверителя и как следствие - выбор оптимального пути. Обращайтесь в нашу компанию, если вы хотите получить качественные юридические услуги!</p>
          </div>
          <div className="steps__benefits-item">
              TOP-100 лучших <br/> юристов России
          </div>
        </Container>
    </div>
    <div className='section-grey '>
        <Container>
          <div className="wrap-top-content">
            <div className="top-contene">
              <h2>Высокие гарантии</h2>
              <p>Наш опыт не находится в статике, ведь каждая жизненная ситуация, не смотря на аналогичные правовые нормы, индивилуальна!</p>
            </div>
          </div>
          <Row className='first-top-padding'>

            <Col xs={12} md={4}>
              <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
                > 
                  <motion.img src='/icons8-shield-100.png'  variants={cardVariants}></motion.img>
                  <h4>Гарантия защиты</h4>
                  <p> Включенность в процесс с момента обращения, непосредственное участие адвоката, оперативность!</p>
              </motion.div>
            </Col>
            <Col xs={12} md={4}>
            <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
                > 
                 <motion.img src='/icons8-shield-100.png'  variants={cardVariants}></motion.img>
                  <h4>Гарантия защиты</h4>
                  <p>Системный подход, концепция защиты как итог анализа судебной практики и  НПА!</p>
                  </motion.div>
            </Col>
            <Col xs={12} md={4}>
            <motion.div
              className="garanty-wrapper"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
                > 
                  <motion.img src='/icons8-shield-100.png'  variants={cardVariants}></motion.img>
                  <h4>Гарантия защиты</h4>
                  <p>Креативные решения, непрямолинейность наших подходов всегда обеспечивает успех наших клиентов!</p>
                  </motion.div>
            </Col>
          </Row>
        </Container>
    </div>

    <div >
        <Container>
          <div className="wrap-practics">
            <h2 className='h2-practics'>Практики:</h2>

            <Row className=''>

              <Col xs={12} md={4}>
                <a href='/practice/arbitraj'>

                  <motion.div className="practics-block box"   
                  //  className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <h5>Арбитражные споры</h5>
                      <p>Досудебное урегулирование споров в арбитражном суде.</p>
                      <img src='/icons8-arrow-80.png'></img>
                  </motion.div>
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href='/practice/ugolovnaya_dela'>
                <motion.div className="practics-block box"   
                  //  className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h5>Защита по уголовным делам</h5>
                    <p>Залог успеха по уголовным делам - своевременное обращение.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </motion.div>
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href='/practice/grajdanskye_spori'>
                <motion.div className="practics-block box"   
                  //  className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h5>Гражданские споры</h5>
                    <p>Упор на выбор оптимального способа защиты ваших прав.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </motion.div>
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href='/practice/semeinoe_pravo '>
                <motion.div className="practics-block box"   
                  //  className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h5>Семейное право</h5>
                    <p>Персонально по имущественным и неимущественным спорам.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </motion.div>
              </a>
              </Col>
              <Col xs={12} md={4}>
                <a href='/practice/bancrotstvo'>
                <motion.div className="practics-block box"   
                  //  className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h5>Банкротство</h5>
                    <p>Взаимодействие с арбитражным управляющим как условие соблюдения интересов доверителя.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </motion.div>
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href='/practice/administrativnoe_proizvodstvo'>
                <motion.div className="practics-block box"   
                  //  className="box"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h5>Административное производство</h5>
                    <p>Наш подход отличается от многих других по административным делам.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </motion.div>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
    </div>

    <div  className='section-grey '>
        <Container>
          <div className="wrap-practics padding-wrap-practics">
            <h2 className='h2-practics'>Достижения:</h2>

            <Row className=''>

              <Col xs={12} md={3} >

                <Image
    src='/sert.jpg' className='sert-wrapper'/>
              </Col>
              <Col xs={12} md={3}>
                <img src='/sert.jpg' className='sert-wrapper'></img>
              </Col>
              <Col xs={12} md={3}>
                <img src='/sert.jpg' className='sert-wrapper'></img>
              </Col>
              <Col xs={12} md={3}>
                <img src='/sert.jpg' className='sert-wrapper'></img>
              </Col>
            </Row>
          </div>
        </Container>
    </div>



    <div >
        <Container>
          <div className="wrap-practics">
          <h2 className='h2-practics'>Обратная связь:</h2>
            <FormComponent></FormComponent>
          </div>
        </Container>
    </div>

    </>
  );
}
