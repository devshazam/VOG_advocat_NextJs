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


              <p>Юридическая компания &quot;Лисицкая и Удовенко&quot; — надежный партнер в мире правовых услуг. Мы предоставляем широкий спектр юридических услуг как для физических, так и для юридических лиц. Наши специалисты обладают глубокими знаниями и опытом в различных областях права, включая гражданское, коммерческое, налоговое и уголовное право.
                </p>
                <p>С момента основания нашей компании, мы помогли сотням клиентов решить сложные правовые вопросы и защитить их интересы. Наш подход основан на индивидуальном подходе к каждому клиенту, тщательном анализе дела и разработке стратегий, направленных на достижение наилучшего результата.</p>
                <p>Мы гордимся нашей репутацией и высоким уровнем профессионализма. Наши адвокаты регулярно проходят курсы повышения квалификации, чтобы быть в курсе последних изменений в законодательстве и предлагать клиентам современные и эффективные решения.</p>
                <p>Обращаясь в &quot;Лисицкая и Удовенко&quot;, вы можете быть уверены, что ваши юридические вопросы находятся в надежных руках. Мы готовы предоставить вам компетентную юридическую помощь и сопровождение в любое время.</p>

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
              <a href='https://iz.ru/1671840/2024-03-26/advokat-rasskazala-o-deistviiakh-v-sluchae-obnaruzheniia-lichnykh-fotografii-v-seti?utm_source=yxnews&utm_medium=mobile&utm_referrer=https%3A%2F%2Fdzen.ru%2Fnews%2Fsearch%3Ftext%3D'>
                    <div className='aif-block mb-3'>
                      <img src='/avatar.jpg'></img>
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

                <Image src='/CSPsnuILZUc.jpg' className='sert-wrapper'/>
              </Col>
              <Col xs={12} md={3} className='mb-3'>
                <Image src='/WhatsApp Image 2024-06-26 at 14.44.37 (1).jpeg' className='sert-wrapper'/>  
              </Col>
              <Col xs={12} md={3} className='mb-3'>
                <Image src='/WhatsApp Image 2024-06-27 at 12.32.47.jpeg' className='sert-wrapper'/>
              </Col>
              <Col xs={12} md={3} className='mb-3'>
                <Image src='/IMG_0338.JPG' className='sert-wrapper'/>
              </Col>
              <Col xs={12} md={3} className='mb-3'>
                <Image src='/WhatsApp Image 2024-06-27 at 13.06.58.jpeg' className='sert-wrapper'/>
              </Col>
              <Col xs={12} md={3} className='mb-3'>
                <Image src='/WhatsApp Image 2024-06-27 at 13.07.21.jpeg' className='sert-wrapper'/>
              </Col>
            </Row>
          </div>
        </Container>
    </div>

    </div>


    </>
  );
}
