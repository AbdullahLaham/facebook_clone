import React from 'react'
import {FaStore} from 'react-icons/fa'
import {AiFillHome, AiOutlineSearch} from 'react-icons/ai';
import {RiGroupLine} from 'react-icons/ri';
import {MdOndemandVideo, MdNotificationsActive} from 'react-icons/md';
import {GrGroup} from 'react-icons/gr';
import {BsMessenger, BsFillGrid3X3GapFill, } from 'react-icons/bs'

 
import { FlexBox,  } from '../../Global.Style';
import { InputContainer, SearchIcon ,Input, LogoCont, IconCont, RightIcon, IconsCont} from './Header.Style';

import facebook from '../../images/facebook.png'
const Header = () => {
  












  return (
    <FlexBox>
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
          <IconCont>
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
            <BsFillGrid3X3GapFill className='icon'  />
          </RightIcon>
          <RightIcon>
            <BsMessenger className='icon'  />
          </RightIcon>
          <RightIcon>
            <MdNotificationsActive className='icon'  />
          </RightIcon>
          <RightIcon>
            {/* <img src={} /> */}
          </RightIcon>
        </IconsCont>

        
    </FlexBox>
  )
}

export default Header;