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
            <p>Юридическая компания высшей пробы. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis placeat obcaecati praesentium perferendis adipisci ab, culpa debitis beatae iure ex cumque consequuntur accusantium sed earum quos hic fugit repudiandae? Quis.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, delectus. Vel, fugit doloribus accusamus possimus accusantium nam! Doloribus, ducimus doloremque!</p>
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, delectus. Vel, fugit doloribus accusamus possimus accusantium nam! Doloribus, ducimus doloremque!</p>
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, delectus. Vel, fugit doloribus accusamus possimus accusantium nam! Doloribus, ducimus doloremque!</p>
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
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, delectus. Vel, fugit doloribus accusamus possimus accusantium nam! Doloribus, ducimus doloremque!</p>
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
                <a href=''>

                  <motion.div className="practics-block box"   
                  //  className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                      <h5>Арбитражные споры</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis.</p>
                      <img src='/icons8-arrow-80.png'></img>
                  </motion.div>
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href=''>
                <div className="practics-block">
                    <h5>Защита по уголовным делам</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </div>
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href=''>
                <div className="practics-block">
                    <h5>Недвижемость и земля</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </div>
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href=''>
                <div className="practics-block">
                    <h5>Коммерческий арбитраж</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </div>
              </a>
              </Col>
              <Col xs={12} md={4}>
                <a href=''>
                <div className="practics-block">
                    <h5>Банкротство</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </div>
                </a>
              </Col>
              <Col xs={12} md={4}>
                <a href=''>
                <div className="practics-block">
                    <h5>Административное производство</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, perspiciatis.</p>
                    <img src='/icons8-arrow-80.png'></img>
                </div>
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
