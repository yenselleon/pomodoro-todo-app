import React from 'react'
import { Modal } from 'antd';
import { useSelector } from 'react-redux';

const ModalAddTaskEvent = () => {
    const {modalOpen} = useSelector(state => state.ui)

    return (
        <Modal
          title="Add Task"
          centered
          visible={modalOpen}
          // onOk={() => this.setModal2Visible(false)}
          // onCancel={() => this.setModal2Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
    )
}

export default ModalAddTaskEvent;
