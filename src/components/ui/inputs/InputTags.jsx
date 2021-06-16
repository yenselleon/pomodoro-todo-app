import React, { useState } from 'react'
import { TweenOneGroup } from 'rc-tween-one';
import { Tag, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import ChangeColorBtn from '../buttons/ChangeColorBtn';




const InputTags = () => {

    const [tagsItems, setTagsItems] = useState({
        tagsArrItems: [],
        inputVisible: false,
        inputValue: '',
      })
    const { tagsArrItems, inputVisible, inputValue } = tagsItems;

    console.log(tagsArrItems);

    const showTagsInput = (e) => {

      setTagsItems({ ...tagsItems, inputVisible: true });

    };

    const handleInputTagChange = (e) => {
      setTagsItems({
        ...tagsItems,
        inputValue: e.target.value,
      })
    }

    const handleInputTagsConfirm = () => {
      
      console.log({inputValue, tagsArrItems})
      if (inputValue && tagsArrItems.indexOf(inputValue) === -1 ) { 
        setTagsItems({
          tagsArrItems: [...tagsArrItems, inputValue],
          inputVisible: false,
          [inputValue]: '',
        })
        
      }else{
        setTagsItems({
          tagsArrItems: [...tagsArrItems],
          inputVisible: false,
          [inputValue]: '',
        })
        
      }
      
    };

    const saveInputRef = (e) => e?.focus();

    const handleCloseTag = (tag) => {
      let removeTag = tagsArrItems.filter(e => e !== tag)

      setTagsItems({
        tagsArrItems: removeTag,
        inputVisible: false,
        [inputValue]: '',
      })
      
    }

    const forMap = (tag) => {
      const tagElem = (
        <Tag
          closable
          onClose={e => {
            e.preventDefault();
            handleCloseTag(tag);
          }}
        >
          {tag}
        </Tag>
      );
      return (
        <span key={tag} style={{ display: 'inline-block' }}>
          {tagElem}
        </span>
      );
    };

    const tagChild = tagsArrItems.map(forMap);

    return (
        <>
            <div style={{ marginBottom: 16 }}>
              <TweenOneGroup
                enter={{
                  scale: 0.8,
                  opacity: 0,
                  type: 'from',
                  duration: 100,
                  onComplete: e => {
                    e.target.style = '';
                  },
                }}
                leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                appear={false}
              >
                {tagChild}
              </TweenOneGroup>
            </div>
            {inputVisible && (
              <>
                <Input
                  ref={saveInputRef}
                  type="text"
                  size="small"
                  style={{ width: 78 }}
                  value={inputValue}
                  onChange={handleInputTagChange}
                  /* onBlur={handleInputTagsConfirm} */
                  onPressEnter={handleInputTagsConfirm}
                />
                <ChangeColorBtn />
              </>
            )}
            {!inputVisible && (
              <Tag onClick={showTagsInput} className="site-tag-plus">
                <PlusOutlined /> New Tag
              </Tag>
            )}
        </>
    )
}

export default InputTags
