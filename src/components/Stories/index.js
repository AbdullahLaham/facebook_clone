import React from 'react'
import { FlexBox } from '../../Global.Style'
import { StoriesCont, StoryHeader, SidebarHeaderItem, StoriesContainer, StoryItem, UserImage } from './Stories.Style'
import nature from '../../images/WOPA160517_D056-resized.jpg'
import profile from '../../images/profile.jpg'
import {GiOpenBook} from 'react-icons/gi';
import {MdOutlineVideoLibrary} from 'react-icons/md';

const index = () => {
  return (
    <StoriesCont>
        <StoryHeader>
          <SidebarHeaderItem>
              <GiOpenBook />
              <p>Stories</p>
          </SidebarHeaderItem>
          <SidebarHeaderItem>
            <MdOutlineVideoLibrary />
            <p>Reals</p>
          </SidebarHeaderItem>
        </StoryHeader>
        <StoriesContainer>
          <StoryItem>
            <img className='story-image' src={nature} />
            <UserImage>
            <img src={profile} className='user-image' />

            </UserImage>
          </StoryItem>
          <StoryItem>
            <img className='story-image' src={nature} />
            <UserImage>
            <img src={profile} className='user-image' />

            </UserImage>
          </StoryItem>
          <StoryItem>
            <img className='story-image' src={nature} />
            <UserImage>
            <img src={profile} className='user-image' />

            </UserImage>
          </StoryItem>
          <StoryItem>
            <img className='story-image' src={nature} />
            <UserImage>
            <img src={profile} className='user-image' />

            </UserImage>
          </StoryItem>




        </StoriesContainer>
    </StoriesCont>
  )
}

export default index;