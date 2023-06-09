import React from 'react'
import { useSelector } from 'react-redux'

function NavLink(props) {
    const style = useSelector(state => state.style)

    return (
        <div className="NavLink" style={{'backgroundColor': style.color4}}>
            <p>{props.content}</p>
        </div>
    )
}

export default NavLink

