import React from 'react';
import Button from './Button';
import Author from './Author.js'
import './Story.css';

const Story = (props) => {
  return (
    <div className='Story'>
      <img src={props.img} />
      <div className='story-info'>
        <div>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <Author {...props}/>
      </div>
    </div>
  )
}

export default Story;

// {story.title}
// {story.desc}
// {story.authImg}
// {story.authName}
// {story.estTime}
// {story.img}