import React, { useState } from 'react'
import { Divider, Modal, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/ui';
import { Input, Form, Select } from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Option } = Select;

const dataSource = [
  {
    key: '1',
    tag: 'holaMundo',
    color: 'gray',
  },
  {
    key: '2',
    tag: 'holaMundo',
    color: 'gray',
  },
];

const columns = [
  {
    title: 'tag',
    dataIndex: 'tag',
    key: 'tag',
  },
  {
    title: 'color',
    dataIndex: 'color',
    key: 'color',
  },
];



const ModalAddTaskEvent = () => {
  const {modalOpen} = useSelector(state => state.ui)
  const [categoryItems, setCategoryItems] = useState({
    items: ['jack', 'lucy'],
    name: '',
  })
  const { name, items } = categoryItems;
  console.log("component ModalAddTaskEvent")
  const dispatch = useDispatch();
  // const children = [];

  const handleCloseModal = () => {
    dispatch( uiCloseModal() )
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onNameChange = (event) => {

    setCategoryItems({
      items: [...items],
      name: event.target.value,
    });
  };

  const addItem = () => {
    

    setCategoryItems({
      items: [...items, name],
      name: '',
    });
  };

const handleChangevalue = (value) => {
  console.log(`selected ${value}`);
}

  return (
      <Modal
        title="Add Task"
        centered
        visible={modalOpen}
        // onOk={() => this.setModal2Visible(false)}
        onCancel={() => handleCloseModal() }
      >
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

          {/* Input tags */}
          <Form.Item>
          <Select
            style={{ width: 240 }}
            placeholder="Select Category"
            onChange={(e) => handleChangevalue(e)}
            dropdownRender={menu => (
              <div>
                {menu}
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                  <Input style={{ flex: 'auto' }} value={categoryItems.name} onChange={(e) => onNameChange(e)} />
                  <span
                    style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                    onClick={addItem}
                  >
                    <PlusOutlined /> Add item
                  </span>
                </div>
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                  <Select defaultValue="Category" style={{ width: 120 }} >
                    {items.map(item => (
                      <Option key={item}>{item}</Option>
                    ))}
                  </Select>
                </div>
              </div>
            )}
          >
            {categoryItems.items.map(item => (
              <Option key={item}>{item} <CloseOutlined /></Option>
            ))}
          </Select>
          </Form.Item>

          <Form.Item>
            <Select 
              mode="tags" 
              style={{ width: '100%' }} 
              placeholder="Tags" 
              onChange={handleChange}
            >
            </Select>
          </Form.Item>
          
          <Form.Item>
            <Table dataSource={dataSource} columns={columns} />;
          </Form.Item>

          
        </Form>
      </Modal>
  )
}

export default ModalAddTaskEvent;
