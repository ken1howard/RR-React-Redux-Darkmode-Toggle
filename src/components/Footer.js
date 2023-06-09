import React from 'react'
import { useSelector } from 'react-redux'

function Footer() {
    const style = useSelector(state => state.style)

    return (
        <div className="Footer" style={{'backgroundColor': style.color3}}>
            <p>Footer Content</p>
        </div>
    )
}

export default Footer
