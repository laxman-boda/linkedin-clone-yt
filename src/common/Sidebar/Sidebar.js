import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='' />
            <Avatar className='sidebar__avatar' />
            <h2>Laxman Boda</h2>
            <h4>laxman.boda@gmail.com</h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viwed you</p>
                <p className='sidebar__statNumber'>2,563</p>
            </div>
            <div className='sidebar__stat'>
                <p>Views on post</p>
                <p className='sidebar__statNumber'>4,121</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactJs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}
        </div>
    </div>
  )
}

export default Sidebar
