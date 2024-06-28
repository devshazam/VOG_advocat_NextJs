"use client";
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Table} from 'antd';



export default function Home() {


  const dataSource = [
    {
      key: '1',
      name: 'Консультация',
      age: 'от 1000',
    },
    {
      key: '2',
      name: 'Защита прав в гражданском процессе',
      age: 'от 10 000',
    },
    {
      key: '3',
      name: 'Защита прав в уголовном процессе',
      age: 'от 25 000',
    },
    {
      key: '4',
      name: 'Защита прав в арбитражном процессе',
      age: 'от 25 000',
    },
    {
      key: '5',
      name: 'Защита прав в административном процессе',
      age: 'от 20 000',
    },
    {
      key: '6',
      name: 'Семейные споры',
      age: 'от 15 000',
    },
    {
      key: '7',
      name: 'Представительство интересов в гос. и муниципальных учреждениях',
      age: 'от 10 000',
    },
    {
      key: '8',
      name: 'Сопровождение сделок',
      age: 'от 20 000',
    },
  ];
  
  const columns = [
    {
      title: 'Название услуги',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Стоимость (руб.)',
      dataIndex: 'age',
      key: 'age',
    }
  ];


  return (
    <>

    <div >
        <Container>
          <div className="wrap-practics">
            <h2 className='h2-practics'>Прайс-Лист:</h2>

            <Table columns={columns} dataSource={dataSource} bordered pagination={false} />
          </div >
        </Container>
    </div>


    </>
  );
}
