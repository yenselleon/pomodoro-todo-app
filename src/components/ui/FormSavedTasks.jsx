import React from 'react';
import { Form, Space, Table } from 'antd';


const columns = [
    {
      title: 'Task Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      render: (text, record) => (
        <Space size="middle">
          <a href="/home">Open</a>
          <a href="/salir">Delete</a>

        </Space>
      ),
    }
];

const data = [
    {
      key: '1',
      title: 'comer',
      note: 32,
      category: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      totalMinTask: 25,
      intervalMinToWork: 25,
      BreakTime: 5,
    },
    {
      key: '2',
      title: 'bañarme',
      note: 32,
      category: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      totalMinTask: 25,
      intervalMinToWork: 25,
      BreakTime: 5,
    },
    {
      key: '3',
      title: 'cenar',
      note: 32,
      category: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
      totalMinTask: 25,
      intervalMinToWork: 25,
      BreakTime: 5,
    },
    
];

const FormSavedTasks = () => {
    return (
        <Form
                /* {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed} */
        >
          <Form.Item
            name="table"
            
          >
            <Table 
              pagination={{ 
                pageSize: 3,
                position: ["bottomCenter", "bottomCenter"] 
              }}
              columns={columns} 
              dataSource={data}
            />

          </Form.Item>

          
        </Form>
    )
}

export default FormSavedTasks
