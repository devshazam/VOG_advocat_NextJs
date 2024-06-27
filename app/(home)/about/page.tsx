"use client";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Image } from 'antd';
export default function Practice({ params }: { params: { id: string } }) {
  const id = params.id || '';

  

  return (
    <>

    <div >
      <div className='practice-bg-wrapper'>
          <Container>
            <div className="main-text-wrapper">
              <h1 >О компании</h1>
            </div>
          </Container>
      </div>
        <Container>
          <div className="wrap-practics">

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

            </Row>
          </div >
        </Container>



    <div className='section-grey '>
        <Container>
          <div className="wrap-practics">
            <h2 className='h2-practics'>Мы в СМИ:</h2>

            <Row className=''>

              <Col xs={12} md={6} className='mb-3'>
                  <div style={{maxWidth: '100%', position: 'relative', width: '100%', paddingBottom: '56%'}}><iframe  frameBorder="0" style={{width: "100%", height: "100%", position: "absolute"}} name="smotrim_player_2755813" src="https://player.smotrim.ru/iframe/video/id/2755813/sid/smotrim/isPlay/true/mute/true/?acc_video_id=2948312"></iframe></div>
              </Col>
              <Col xs={12} md={6}  className='mb-3'>
                  <div style={{maxWidth: '100%', position: 'relative', width: '100%', paddingBottom: '56%'}}><iframe  frameBorder="0" style={{width: "100%", height: "100%", position: "absolute"}} name="smotrim_player_2694746" src="https://player.smotrim.ru/iframe/video/id/2694746/sid/smotrim/isPlay/true/mute/true/?acc_video_id=2884837"></iframe></div>
              </Col>
              <Col xs={12} md={4} className='mb-3'>

                <a href='https://aif.ru/society/law/kak_poluchit_kompensaciyu_za_travmu_v_gololed'>
                    <div className='aif-block mb-3'>
                      <img src='/aif.jpg'></img>
                    </div>
                </a>
              </Col>
              <Col xs={12} md={4}  className=' mb-3'>
              <a href='https://aif.ru/opinion/author/24672'>
                    <div className='aif-block mb-3'>
                      <img src='/aif.jpg'></img>
                    </div>
                </a>
              </Col>
              <Col xs={12} md={4}  className='mb-3'>
              <a href='https://aif.ru/money/mymoney/zima_zaplatit_po_schetam_ushcherb_ot_naledi_ili_sosulek_mozhno_kompensirovat'>
                    <div className='aif-block mb-3'>
                      <img src='/aif.jpg'></img>
                    </div>
                </a>
              </Col>


            </Row>
          </div>
        </Container>
    </div>

    
    <div  >
        <Container>
          <div className="wrap-practics padding-wrap-practics">
            <h2 className='h2-practics'>Фотографии:</h2>

            <Row className=''>

              <Col xs={12} md={3} className='mb-3'>

                <Image
    src='/CSPsnuILZUc.jpg' className='sert-wrapper'/>
              </Col>
              <Col xs={12} md={3} className='mb-3'>
                <img src='/sert.jpg' className='sert-wrapper'></img>
              </Col>
              <Col xs={12} md={3} className='mb-3'>
                <img src='/sert.jpg' className='sert-wrapper'></img>
              </Col>
              <Col xs={12} md={3} className='mb-3'>
                <img src='/sert.jpg' className='sert-wrapper'></img>
              </Col>
            </Row>
          </div>
        </Container>
    </div>

    </div>


    </>
  );
}
