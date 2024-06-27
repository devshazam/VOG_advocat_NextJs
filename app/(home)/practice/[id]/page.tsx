"use client";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mainConfig from '../../../../config/mainAppParameterObject'

// Config: 

// export function generateStaticParams() {
//   return [{ id: 'arbitraj' }, { id: 'ugolovnye_deli' }, { id: 'nedvigemost' }, { id: 'kommercheskij_arbitraz' }, { id: 'bankrotstvo' }, { id: 'zashita' },]
// }


export default function Practice({ params }: { params: { id: string } }) {
  const id = params.id || '';

  

  return (
    <>

    <div >
      <div className='practice-bg-wrapper'>
          <Container>
            <div className="main-text-wrapper">
              <h1 >{mainConfig[id][0]}</h1>
            </div>
          </Container>
      </div>
        <Container>
          <div className="wrap-practics">

            <Row className=''>
              <p  dangerouslySetInnerHTML={{__html: mainConfig[id][1]}}>
                </p>
            </Row>
          </div >
        </Container>
    </div>


    </>
  );
}
