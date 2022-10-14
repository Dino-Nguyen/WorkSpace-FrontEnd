import React from 'react'
import "./menu.css"
import { NavLink} from 'react-router-dom'

const activeClass = (params) => {  return params.isActive ? "active-item" : ""}

export const Menu = () => {
 return (
    <div className='menu'>
        Menu
          <div className='nav'>
              <NavLink to='/' className={activeClass}>DashBoard</NavLink>
          </div>
          <div className='nav'>
              <NavLink to='/timeline' className={activeClass}>TimeLine</NavLink>
          </div>
          <div className='nav'>
              <NavLink to='/task' className={activeClass}>Task</NavLink>
          </div>
          <div className='nav'>
              <NavLink to='/settings' className={activeClass}>Settings</NavLink>
          </div>
          <div className='nav'>
              <NavLink to='/message' className={activeClass}>Mess</NavLink>
          </div>
          <div className='nav'>
              <NavLink to='/files' className={activeClass}>Files</NavLink>
          </div>
    </div>
 )
}



