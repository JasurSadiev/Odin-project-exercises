import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Menu = (props) => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${props.cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [props.cat]);
 
  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => {
        if (post.img !== props.postId) {
          return (
            <div className="post" key={post.id}>
              <div className="menu-img">
                <img src={`../upload/${post?.img}`} alt="" />
              </div>
              <h2>{post.title}</h2>
              <Link className="link" to={`/post/${post.id}`}><button>Read More</button></Link>
            </div>
        )}
      })}
    </div>
  );
};

export default Menu;
