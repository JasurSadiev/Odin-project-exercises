import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        let shuffled = res.data
          .map(value => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
        setPosts(shuffled);
        console.log(shuffled);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  


  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p className="p"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(post.desc),
                }}
                
            ></p>
               <Link className="link" to={`/post/${post.id}`}><button>Read More</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;