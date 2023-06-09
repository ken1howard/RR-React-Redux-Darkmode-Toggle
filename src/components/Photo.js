import React from 'react'
import { useSelector } from 'react-redux'

function Photo() {
const style = useSelector(state => state.style)

    return (
        <div className="Photo">
            <img src={style.photo}alt="author" />
        </div>
    )
}

export default Photo
