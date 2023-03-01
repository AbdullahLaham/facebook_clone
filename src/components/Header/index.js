import React, { Profiler } from 'react'
import {FaStore} from 'react-icons/fa'
import profile from '../../images/profile.jpg'
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai';
import {RiGroupLine} from 'react-icons/ri';
import {MdOndemandVideo, MdNotificationsActive} from 'react-icons/md';
import {GrGroup} from 'react-icons/gr';
import {BsMessenger, BsFillGrid3X3GapFill, } from 'react-icons/bs'


import { FlexBox,  } from '../../Global.Style';
import { InputContainer, SearchIcon ,Input, LogoCont, IconCont, RightIcon, IconsCont, HeaderCont} from './Header.Style';

import facebook from '../../images/facebook.png'
const Header = () => {
  

  return (
    <HeaderCont>
        <IconsCont>
          <LogoCont src={facebook} />
          <InputContainer>
            <Input placeholder='Search Facebook' />
            <SearchIcon>
              <AiOutlineSearch className='icon' />
            </SearchIcon>
          </InputContainer>
        </IconsCont>

        <IconsCont>
          <IconCont className='selected-icon'>
            <AiFillHome className='icon'  />
          </IconCont>
          <IconCont>
            <RiGroupLine className='icon'  />
          </IconCont>
          <IconCont>
            <MdOndemandVideo className='icon'  />
          </IconCont>
          <IconCont>
            <GrGroup />
          </IconCont>
        </IconsCont>

        <IconsCont>
          <RightIcon>
            <BsFillGrid3X3GapFill className='header-icon'  />
          </RightIcon>
          <RightIcon>
            <BsMessenger className='header-icon'  />
          </RightIcon>
          <RightIcon>
            <MdNotificationsActive className='header-icon'  />
          </RightIcon>
          <img className='header-user-image' src={profile} />
        </IconsCont>

        
    </HeaderCont>
  )
}

export default Header;