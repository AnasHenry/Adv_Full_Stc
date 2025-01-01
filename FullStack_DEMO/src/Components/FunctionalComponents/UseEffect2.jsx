import React from "react";
import { useState, useEffect } from "react";
import "../../assets/NavBar.css";
import axios from "axios";

const Useffect2 = () => {
  var [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
      })
      .catch((err) => console.log(err));
  }, [post]);
  return (
    <div className='mt-box'>
      <h1>Getting the data from Json Placeholder API</h1>
      <h2>Posts are</h2>
      {/* <ol>
        {post.map((ele)=>{
            return <li key = {ele.id}>{ele.title}</li>
        })}
      </ol> */}
      {post.map((element) => (
        <h6 key={element.id}>{element.title}</h6>
      ))}
    </div>
  );
};
export default Useffect2;
