import React from 'react'
import {HiUsers, HiOutlineUserGroup} from 'react-icons/hi';
import {RxVideo} from 'react-icons/rx';
import profile from '../../images/profile.jpg'
import {BsStopwatch, BsFillBookmarkFill, BsCalendarEvent, BsFillCameraVideoFill, BsSearch, } from 'react-icons/bs';
import {AiOutlineFlag} from 'react-icons/ai';
import {FaBusinessTime, FaStore} from 'react-icons/fa';
import {FiMoreHorizontal} from 'react-icons/fi';
import {MdKeyboardArrowDown} from 'react-icons/md';
import {SidebarItem, SidebarImage, SidebarTitle, SidebarCont} from '../Sidebar/Sidebar.Style'
import { FlexBox } from '../../Global.Style';
import {SponsoredCont, SponsoredItem, SponseredImage, SponseredTitle, SponseredDesc, ContactsCont, ContactsHeader, IconsCont, UserItem, UserName} from './RightSidebar.Style';
import nature from '../../images/WOPA160517_D056-resized.jpg'

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
      {/* <FlexBox>
        <p>Contacts</p>
        <FlexBox>
          
        </FlexBox>
      </FlexBox> */}

      <SponsoredCont>
        <h4 className='section-title'>
          Sponsored
        </h4>
        <SponsoredItem>
          <SponseredImage src={nature} />
          <div>
            <SponseredTitle>
              your feutre start here!
            </SponseredTitle>
            <SponseredDesc>
              talabat.io/teck-sales
            </SponseredDesc>
          </div>
        </SponsoredItem>
        <SponsoredItem>
          <SponseredImage src={nature} />
          <div>
            <SponseredTitle>
              your feutre start here!
            </SponseredTitle>
            <SponseredDesc>
              talabat.io/teck-sales
            </SponseredDesc>
          </div>
        </SponsoredItem>
      </SponsoredCont>
      <ContactsCont>
        <ContactsHeader>
          <p className='section-title'>Contacts</p>
          <IconsCont>
            <BsFillCameraVideoFill className='contact-icon' />
            <BsSearch className='contact-icon' />
            <MdKeyboardArrowDown className='contact-icon' />
          </IconsCont>
        </ContactsHeader>
          <UserItem>
            <img className='contacts-user-image' src={profile} />
            <UserName>
              {'Abdulah AL-Lahham'}
            </UserName>
          </UserItem>
          <UserItem>
            <img className='contacts-user-image' src={profile} />
            <UserName>
              {'Abdulah AL-Lahham'}
            </UserName>
          </UserItem>
          <UserItem>
            <img className='contacts-user-image' src={profile} />
            <UserName>
              {'Abdulah AL-Lahham'}
            </UserName>
          </UserItem>
          <UserItem>
            <img className='contacts-user-image' src={profile} />
            <UserName>
              {'Abdulah AL-Lahham'}
            </UserName>
          </UserItem>
          <UserItem>
            <img className='contacts-user-image' src={profile} />
            <UserName>
              {'Abdulah AL-Lahham'}
            </UserName>
          </UserItem>
          

        
      </ContactsCont>
        {/* {sidebarItems.map((item) => (
          <SidebarItem>
            <SidebarImage >
              {item?.icon}
            </SidebarImage>
            <SidebarTitle>
              {item?.title}
            </SidebarTitle>
          </SidebarItem>
        ))}

        <SidebarItem>
            <SidebarImage>
              <MdKeyboardArrowDown className='arrow-icon' />
            </SidebarImage>
            <SidebarTitle>
              See More
            </SidebarTitle>
          </SidebarItem> */}
    </SidebarCont>
  )
}

export default index