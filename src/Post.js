import { FcBusinessman } from "react-icons/fc";
import { MdVerified } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { CiRepeat } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { MdPublish } from "react-icons/md";

import React, { useState } from "react";
import "./Post.css";

function Post({
  text,
  image = "https://awbi.org/wp-content/uploads/2023/04/1-1.jpg",
}) {
  const [favClick, setFavClick] = useState(false);
  return (
    <div className="post">
      <div className="post__fcBusinessman">
        <FcBusinessman />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Display
              <span className="post__headerSpecial">
                <MdVerified className="post__badge" />
                @username
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="No-image" />
        <div className="post__footer">
          <MdChatBubbleOutline fontSize="small" />
          <CiRepeat />
          <div
            onClick={() => setFavClick(true)}
            style={{ background: favClick ? "red" : "white" }}
          >
            {" "}
            <MdFavoriteBorder />
          </div>
          <MdPublish />
        </div>
      </div>
    </div>
  );
}
export default Post;
