import React from 'react'
import { Modal, Tabs, Button  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/uiModal';
import FormModalAddEvent from './FormModalAddEvent';
import FormSavedTasks from './FormSavedTasks';


const { TabPane } = Tabs;


const ModalAddTaskEvent = () => {
  const {modalOpen} = useSelector(state => state.ui)
  
  console.log("component ModalAddTaskEvent")
  const dispatch = useDispatch();
  // const children = [];

  const handleCloseModal = () => {
    dispatch( uiCloseModal() )
  }

  const callback = (key) => {
    console.log(key);
  }

  return (
      <Modal
        title="Add Task"
        centered
        visible={modalOpen}
        // onOk={() => this.setModal2Visible(false)}
        onCancel={() => handleCloseModal() }
        footer={[
          <Button key="back" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Button key="submit" type="primary">
            Saved and Add
          </Button>,
          <Button
            key="link"
            type="primary"
          >
            Add New
          </Button>,
        ]}
      >
      
        <Tabs defaultActiveKey="1" onChange={callback}>

          <TabPane tab="Add Task" key="1">
            <FormModalAddEvent />
          </TabPane>

          <TabPane tab="Saved" key="2">
            <FormSavedTasks />
          </TabPane>

        </Tabs>
      </Modal>
  )
}

export default ModalAddTaskEvent;
