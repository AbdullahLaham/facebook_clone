import React from 'react'
import {HiUsers, HiOutlineUserGroup} from 'react-icons/hi';
import {RxVideo} from 'react-icons/rx';
import {BsStopwatch, BsFillBookmarkFill, BsCalendarEvent} from 'react-icons/bs';
import {AiOutlineFlag} from 'react-icons/ai';
import {FaBusinessTime, FaStore} from 'react-icons/fa';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {SidebarItem, SidebarImage, SidebarTitle, SidebarCont} from './Sidebar.Style'
const index = () => {
  const sidebarItems = [
    {
      title: 'Friends',
      icon: <HiOutlineUserGroup className='icon' />,

    },
    {
      title: 'Pages',
      icon: <AiOutlineFlag className='icon' />,

    },
    {
      title: 'Watch',
      icon: <RxVideo className='icon' />,

    },
    {
      title: 'Memories',
      icon: <BsStopwatch className='icon' />,

    },
    {
      title: 'Most Recent',
      icon: <FaBusinessTime className='icon' />,

    },
    {
      title: 'Groups',
      icon: <HiUsers className='icon' />,

    },
    {
      title: 'Marketplace',
      icon: <FaStore className='icon' />,

    },
    {
      title: 'Saved',
      icon: <BsFillBookmarkFill className='icon' />,

    },
    {
      title: 'Events',
      icon: <BsCalendarEvent className='icon' />,

    },
  
  ]
  return (
    <SidebarCont>
        {sidebarItems.map((item) => (
          <SidebarItem>
            <SidebarImage >
              {item?.icon}
            </SidebarImage>
            <SidebarTitle>
              {item?.title}
            </SidebarTitle>
          </SidebarItem>
        ))}
    </SidebarCont>
  )
}

export default index