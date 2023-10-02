import { FcBusinessman } from "react-icons/fc";
import { MdVerified } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { CiRepeat } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { MdPublish } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import React, { useState } from "react";
import "./Post.css";

function Post({
  text,
  image = "https://awbi.org/wp-content/uploads/2023/04/1-1.jpg",
}) {
  //const [favClick, setFavClick] = useState(false);
  const [like, setLike] = useState(false);
  const [showInput, setShowInput] = useState(false);
  //const [commentChat, setCommentChat] = useState("");
  const handleLikes = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

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
          <div onClick={() => setShowInput(true)}>
            <MdChatBubbleOutline fontSize="small" />
          </div>
          <CiRepeat />
          <div>
            {like ? (
              <AiFillHeart
                className="text-danger"
                onClick={handleLikes}
                style={{ color: "red" }}
              />
            ) : (
              <AiOutlineHeart
                onClick={handleLikes}
                style={{ color: "black" }}
              />
            )}
          </div>
          <MdPublish />
        </div>
        <div style={{ display: "flex" }}>
          {showInput && <input type="text"></input>}
          {showInput && (
            <button onClick={() => setShowInput(false)}>Post</button>
          )}
        </div>
      </div>
    </div>
  );
}
export default Post;
