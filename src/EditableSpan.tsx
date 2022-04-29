import React, { ChangeEvent, useState } from 'react'

type EditableSpanType = {
    title: string
    onChange:(newValue:string)=>void
}


export const EditableSpan = (props: EditableSpanType) => {
    const [editMode, setEditMode] = useState(false)
    const [title, setTitle] = useState('')

    const activateEditeMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const activateViewMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return editMode
        ? <input
            value={title}
            onChange={onChangeTitleHandler}
            onBlur={activateViewMode}
            autoFocus />
        : <span onDoubleClick={activateEditeMode}>{props.title}</span>
}