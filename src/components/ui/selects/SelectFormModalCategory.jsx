import React, { useState } from 'react'
import { Button, Divider, Input, Select} from 'antd';
import { CloseOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;


const SelectFormModalCategory = () => {
    const [categoryItems, setCategoryItems] = useState({
        selected: null,
        items: ['jack', 'lucy'],
        category: '',
        isOpen: false,
    })

    const { category, items, isOpen, selected } = categoryItems;

    

    const onNameChange = (event) => {
    
        setCategoryItems(prevState => ({
            ...prevState,
            items: [...items],
            category: event.target.value,
            isOpen: true,

        }));
    };
    
    const addItem = () => {
    
        if (category && items.indexOf(category) === -1 ) { 
            setCategoryItems(prevState=>({
                ...prevState,
                items: [...items, category],
                category: '',
                isOpen: true,

            }));
        
        }else{
            setCategoryItems(prevState=>({
                ...prevState,
                items: [...items],
                category: '',
                isOpen: true,
            }));
        
        }

    };
    

    const handleRemoveCategory = (e, item) => {
        e.preventDefault();
        e.stopPropagation();

        let removeCategory = items.filter(cat => cat !== item)
        
        if(item === selected){
            setCategoryItems(prevState=> ({
                selected: null,
                items: removeCategory,
                category: '',
                isOpen: true,
            }))
        }else{

            setCategoryItems(prevState=> ({
                ...prevState,
                items: removeCategory,
                category: '',
                isOpen: true,
            }))
        }

    }

    const handleSelectIsOpen = (open) => {
        (open) ?
            
            setCategoryItems(prevState =>({
                ...prevState,
                isOpen: true,
            }))
        :
            setCategoryItems(prevState => ({
                ...prevState,
                isOpen: false,
            }));
    }

    const handleChangevalue = (v) => {

        setCategoryItems(prevState => ({
            ...prevState,
            selected: v,
            
        }));
    }

    /* const handleRef = (e) => {
        console.log(e) 
    } */

    return (

        <Select
            style={{ width: 240 }}
            placeholder="Select Category"
            /* ref={valueSelectedRef} */
            onChange={(v) => handleChangevalue(v)}
            value={selected}
            allowClear={true}
            onDropdownVisibleChange={handleSelectIsOpen}
            dropdownRender={menuCategorys => (
            <div>
                {menuCategorys}
                <Divider style={{ margin: '4px 0' }} />
                <div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
                    <Input style={{ flex: 'auto' }} value={category} onChange={(e) => onNameChange(e)} />
                    <span
                        style={{ flex: 'none', padding: '8px', display: 'block', cursor: 'pointer' }}
                        onClick={addItem}
                    >
                        <PlusOutlined /> Add item
                    </span>
                </div>
            </div>
            )}
        >
            {categoryItems.items.map(item => (
                <Option key={item}>
                    <div className="main_wrapper_option_select">
                        <span className="item_option_span">
                            {item}
                        </span>
                        <div className="buttonOptionSelect btn_wrapper_option_select">
                            {
                                (isOpen) &&
                                <Button size="small" onClick={(e)=> handleRemoveCategory(e, item)}>
                                    <CloseOutlined />
                                </Button>
                            }
                        </div>

                    </div>
                    
                </Option>
                
            ))}
        </Select>
    )
}

export default SelectFormModalCategory;
