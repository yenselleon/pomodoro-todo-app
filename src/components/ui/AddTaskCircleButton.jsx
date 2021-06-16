import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { uiOpenModal } from '../../actions/uiModal'

const AddTaskCircleButton = () => {
    const dispatch = useDispatch()

    const handleOpenModal = () => {
        dispatch( uiOpenModal() )
    }

    return (
        <button 
            className="AddTaskCircleButton-main"
            onClick={handleOpenModal}
        >
            <PlusOutlined />
        </button>
    )
}

export default AddTaskCircleButton
