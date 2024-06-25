"use client";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

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

    <div >
        <Container>
          <div className="wrap-practics">
            <h2 className='h2-practics'>Политика конфиденциальности:</h2>

            <Row className=''>
              <p>Политика конфиденциальности — это заявление, в котором раскрываются некоторые или все способы, с помощью которых сайт собирает, использует и раскрывает персональные данные (личную информацию) посетителей сайта, а также управляет ими. Политика отвечает требованиям законодательства по защите конфиденциальности посетителей сайта и клиентов.
                  В разных странах действуют свои законы с различными требованиями к политике конфиденциальности. Убедитесь, что вы соблюдаете законы, применимые к вашей сфере деятельности и местоположению.
                  Важно:
                  Представленные здесь пояснения и информация являются лишь общими пояснениями, информацией и примерами. Данная статья не является юридической консультацией и не дает рекомендации относительно того, что вам нужно делать. Мы рекомендуем вам обратиться к юристам, чтобы они помогли вам разобраться в применимых к вам законах и создать политику конфиденциальности.
                  Создание политики конфиденциальности
                  Есть несколько аспектов законов о конфиденциальности, которые должны соблюдать все владельцы сайтов при обращении с персональными данными. Ниже приведен список тем, которые следует учитывать при реализации политики конфиденциальности для сайта:
                  Какую информацию вы собираете?
                  Уточните типы персональных данных, которые вы собираете от посетителей сайта, такие как электронная почта, имя, IP-адреса, платежные данные, номер социального страхования и т. д. Собираемая информация может предоставляться посетителями и пользователями сайта или собираться автоматически с помощью инструментов
                </p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius molestias, dolorum optio eligendi placeat expedita dolore libero laboriosam id iure esse velit illo cumque accusamus, architecto voluptas exercitationem voluptates adipisci! </p>
                <p>Политика конфиденциальности — это заявление, в котором раскрываются некоторые или все способы, с помощью которых сайт собирает, использует и раскрывает персональные данные (личную информацию) посетителей сайта, а также управляет ими. Политика отвечает требованиям законодательства по защите конфиденциальности посетителей сайта и клиентов.
                  В разных странах действуют свои законы с различными требованиями к политике конфиденциальности. Убедитесь, что вы соблюдаете законы, применимые к вашей сфере деятельности и местоположению.
                  Важно:
                  Представленные здесь пояснения и информация являются лишь общими пояснениями, информацией и примерами. Данная статья не является юридической консультацией и не дает рекомендации относительно того, что вам нужно делать. Мы рекомендуем вам обратиться к юристам, чтобы они помогли вам разобраться в применимых к вам законах и создать политику конфиденциальности.
                  Создание политики конфиденциальности
                  Есть несколько аспектов законов о конфиденциальности, которые должны соблюдать все владельцы сайтов при обращении с персональными данными. Ниже приведен список тем, которые следует учитывать при реализации политики конфиденциальности для сайта:
                  Какую информацию вы собираете?
                  Уточните типы персональных данных, которые вы собираете от посетителей сайта, такие как электронная почта, имя, IP-адреса, платежные данные, номер социального страхования и т. д. Собираемая информация может предоставляться посетителями и пользователями сайта или собираться автоматически с помощью инструментов
                </p>
                <p>Политика конфиденциальности — это заявление, в котором раскрываются некоторые или все способы, с помощью которых сайт собирает, использует и раскрывает персональные данные (личную информацию) посетителей сайта, а также управляет ими. Политика отвечает требованиям законодательства по защите конфиденциальности посетителей сайта и клиентов.
                  В разных странах действуют свои законы с различными требованиями к политике конфиденциальности. Убедитесь, что вы соблюдаете законы, применимые к вашей сфере деятельности и местоположению.
                  Важно:
                  Представленные здесь пояснения и информация являются лишь общими пояснениями, информацией и примерами. Данная статья не является юридической консультацией и не дает рекомендации относительно того, что вам нужно делать. Мы рекомендуем вам обратиться к юристам, чтобы они помогли вам разобраться в применимых к вам законах и создать политику конфиденциальности.
                  Создание политики конфиденциальности
                  Есть несколько аспектов законов о конфиденциальности, которые должны соблюдать все владельцы сайтов при обращении с персональными данными. Ниже приведен список тем, которые следует учитывать при реализации политики конфиденциальности для сайта:
                  Какую информацию вы собираете?
                  Уточните типы персональных данных, которые вы собираете от посетителей сайта, такие как электронная почта, имя, IP-адреса, платежные данные, номер социального страхования и т. д. Собираемая информация может предоставляться посетителями и пользователями сайта или собираться автоматически с помощью инструментов
                </p>
                <p>Политика конфиденциальности — это заявление, в котором раскрываются некоторые или все способы, с помощью которых сайт собирает, использует и раскрывает персональные данные (личную информацию) посетителей сайта, а также управляет ими. Политика отвечает требованиям законодательства по защите конфиденциальности посетителей сайта и клиентов.
                  В разных странах действуют свои законы с различными требованиями к политике конфиденциальности. Убедитесь, что вы соблюдаете законы, применимые к вашей сфере деятельности и местоположению.
                  Важно:
                  Представленные здесь пояснения и информация являются лишь общими пояснениями, информацией и примерами. Данная статья не является юридической консультацией и не дает рекомендации относительно того, что вам нужно делать. Мы рекомендуем вам обратиться к юристам, чтобы они помогли вам разобраться в применимых к вам законах и создать политику конфиденциальности.
                  Создание политики конфиденциальности
                  Есть несколько аспектов законов о конфиденциальности, которые должны соблюдать все владельцы сайтов при обращении с персональными данными. Ниже приведен список тем, которые следует учитывать при реализации политики конфиденциальности для сайта:
                  Какую информацию вы собираете?
                  Уточните типы персональных данных, которые вы собираете от посетителей сайта, такие как электронная почта, имя, IP-адреса, платежные данные, номер социального страхования и т. д. Собираемая информация может предоставляться посетителями и пользователями сайта или собираться автоматически с помощью инструментов
                </p>
            </Row>
          </div >
        </Container>
    </div>


    </>
  );
}