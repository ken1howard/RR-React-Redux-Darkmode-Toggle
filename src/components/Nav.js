import React from 'react'
import NavLink from './NavLink'
import { useSelector } from 'react-redux'

function Nav() {
    const style = useSelector(state => state.style)

    return (
        <div className="Nav" style={{'backgroundColor': style.color3}}>
            <NavLink content="Blog" />
            <NavLink content="About Me" />
            <NavLink content="Projects" />
            <NavLink content="Other" />
        </div>
    )
}

export default Nav
