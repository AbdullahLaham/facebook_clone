import React from 'react'
import { AddPostCont, Input, InputForm, PostTools,ToolItem } from './AddPost.Style'
import profile from '../../images/profile.jpg'

import {BsCameraVideoFill, BsImages} from 'react-icons/bs';
import {MdInsertEmoticon} from 'react-icons/md';

const index = () => {
  return (
    <AddPostCont>
        <InputForm>
            <img src={profile} className='input-user-image' />
            <Input placeholder='Whats in your Mind Abdullah' />
        </InputForm>
        <PostTools>
            <ToolItem>
                <BsCameraVideoFill className='icon camera' />
                <p>Live Video</p>
            </ToolItem>
            <ToolItem>
                <BsImages className='icon photo' />
                <p>photo/video</p>
            </ToolItem>
            <ToolItem>
                <MdInsertEmoticon className='icon emogi' />
                <p>Feeling/activity</p>
            </ToolItem>
        </PostTools>
    </AddPostCont>
  )
}

export default index;