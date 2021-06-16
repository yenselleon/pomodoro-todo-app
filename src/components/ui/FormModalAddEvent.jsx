import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
import { Input, Form, InputNumber  } from 'antd';
import InputTags from './inputs/InputTags';
import SelectFormModalCategory from './selects/SelectFormModalCategory';

const { TextArea } = Input;


const FormModalAddEvent = () => {

    return (
        <Form>
          {/* titulo */}
          <Form.Item
            name="title"
            rules={[
              {
                required: true,
                message: 'Please input the title of task!',
              },
            ]}
          >
            <Input 
              placeholder="Title"
              
            />

          </Form.Item>

          {/* textArea */}
          <Form.Item>
            <TextArea  
              showCount maxLength={100}
              placeholder="Note" 
              /* onChange={onChange} */ 
            />
          </Form.Item>

          {/* Salect Category */}
          <Form.Item>
            <SelectFormModalCategory />
          </Form.Item>

          {/* Salect Tags */}
          <Form.Item>
            <InputTags />
          </Form.Item>
          
          {/* Input Total Min Task */}
          <Form.Item
            label="Total Min Task Time"
            name="totalMinTask"
            layout="vertical"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <InputNumber
              min={1} 
              max={480} 
              defaultValue={25} 
              /* onChange={onChange} */ 
            />
          </Form.Item>

          {/* Input Min Work */}
          <Form.Item
            label="Interval Minutes for work"
            name="minInterval"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <InputNumber
              min={1} 
              max={480} 
              defaultValue={25} 
              /* onChange={onChange} */ 
            />
          </Form.Item>

          {/* Break Time */}
          <Form.Item
            label="Break Time"
            name="breakTime"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <InputNumber
              min={1} 
              max={480} 
              defaultValue={5}
              /* onChange={onChange} */ 
            />
          </Form.Item>
          
          

          
        </Form>
    )
}

export default FormModalAddEvent;
