import { Button } from 'antd'
import React, { useState } from 'react'
import { colorListBtn } from '../../../helpers/colorListbtn'

const ChangeColorBtn = () => {

    const [newColorSelect, setNewColorSelect] = useState({
        count: 0,
    })

    const {count} = newColorSelect;

    const handleChangeColor = () => {

        if(count <= 9){
            setNewColorSelect({
                count: count + 1,
            })
        }else{
            
            setNewColorSelect({
                count: 0,
            })
        }
    }
    console.log(colorListBtn[count])
    return (
        <Button
            size="small"
            type="primary"
            className={`btnChanceColor ${colorListBtn[count]}`}
            onClick={handleChangeColor}
        >
            Change Color
        </Button>
    )
}

export default ChangeColorBtn
