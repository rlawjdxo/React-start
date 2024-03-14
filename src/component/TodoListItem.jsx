import React, { todo } from 'react'

import {
    MdCheckBoxOutlineBlank, 
    MdRemoveCircleOutline, 
    MdCheckBox } from "react-icons/md"

    
    const TodoListItem = ({ todo, onRemove, onToggle }) => {
        const { id, text, checked } = todo;

      return (
        <div className="TodoListItem">
            <div className={ checked ? "checkbox_checked": "checkbox"} onClick={()=>onToggle(id)}>
                <div className="text">{ text }</div>
            </div>
            <div className="remove" onClick={ () => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
      )
    }
    
export default TodoListItem



