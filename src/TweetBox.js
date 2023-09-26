import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import "./TweetBox.css";
import { useDispatch } from "react-redux";
import { updateTweetArray } from "./Redux/appSlice";
//import db from './firebase';

function TweetBox() {
  const dispatch = useDispatch();
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    let items = {
      text: tweetMessage,
      image: tweetImage,
    };
    dispatch(updateTweetArray(items));
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <FcBusinessman />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="optional: Enter image URL"
          type="text"
        />
        <button onClick={sendTweet} className="tweetBox__tweetButton">
          Tweet
        </button>
      </form>
    </div>
  );
}

export default TweetBox;
