import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';

import { MdSearch } from "react-icons/md";

function Widgets(){
    return (
<div className='widgets'>
<div className='widgets__input'>
< MdSearch className='widgets__SearchIcon'/>
<input placeholder='Search Twitter' type='text'/>
</div>
<div className='widgets__widgetContainer'>
<h2>What's happening</h2>
<TwitterTweetEmbed tweetId={"1677281005453955073"} />
 <TwitterTimelineEmbed
 sourceType='profile'
 screenName='SANJAYG25119867'
 options={{height:400}}
 />
 <TwitterShareButton
 url={'https://www.facebook.com/nirajProjects'}
 options={{text:"This is my React project"}}
 />
</div>
</div> 
    );
};
export default Widgets;