import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import { useSelector } from "react-redux";

function Feed() {
  const tweet = useSelector((state) => state.app.tweetArray);
  const reverseTweet = tweet.slice().reverse() || [];
  console.log("tweet", reverseTweet);
  return (
    <div className="feed">
      {/*Home*/}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      {/*TweetBox*/}
      <TweetBox />
      {tweet.length > 0 &&
        reverseTweet.map((data) => {
          return <Post text={data.text} image={data.image} />;
        })}
      {/*Post*/}
      {/* <Post/>
<Post/>
<Post/>
<Post/> */}
    </div>
  );
}
export default Feed;
