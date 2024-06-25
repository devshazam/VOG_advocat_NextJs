"use client";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { layfair_display_sc, el_messiri } from '../fonts'

import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

import { motion } from "framer-motion";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};



export default function Home() {


  
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

  
      initial={{
        y: 300
      }}
      whileInView={{
        y: 0,
        transition: {
          type: "spring",
          bounce: 0.8,
          duration: 0.8
        }
      }}
      viewport={{ once: true, amount: 0.8 }}
  > 
                  <img src='/icons8-shield-100.png'></img>
                  <h4>Гарантия защиты</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, delectus. Vel, fugit doloribus accusamus possimus accusantium nam! Doloribus, ducimus doloremque!</p>
              </motion.div>
            </Col>
            <Col xs={12} md={4}>
            <div className="garanty-wrapper">
                  <img src='/icons8-shield-100.png'></img>
                  <h4>Гарантия защиты</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, delectus. Vel, fugit doloribus accusamus possimus accusantium nam! Doloribus, ducimus doloremque!</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
            <div className="garanty-wrapper">
                  <img src='/icons8-shield-100.png'></img>
                  <h4>Гарантия защиты</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, delectus. Vel, fugit doloribus accusamus possimus accusantium nam! Doloribus, ducimus doloremque!</p>
              </div>
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
          <div className="wrap-practics">
            <h2 className='h2-practics'>Достижения:</h2>

            <Row className=''>

              <Col xs={12} md={4}>
              </Col>
            </Row>
          </div>
        </Container>
    </div>



    <div >
        <Container>
          <div className="wrap-practics">
          <h2 className='h2-practics'>Обратная связь:</h2>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                // style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item<FieldType>
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input />
                </Form.Item>

                <Form.Item<FieldType>
                  label="Password"
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item<FieldType>
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{ offset: 8, span: 4 }}
                >
                  <Checkbox>Подтверждаю согласие</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 2 }} labelAlign="left">
                  <Button type="primary" htmlType="submit">
                   Отправить
                  </Button>
                </Form.Item>
              </Form>
          </div>
        </Container>
    </div>

    </>
  );
}
