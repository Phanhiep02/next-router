"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsDetail({ id }) {
  const [post, setPost] = useState({});
  const getPost = async (id) => {
    const response = await axios.get(`https://dummyjson.com/post/${id}`);
    const data = await response.data;
    setPost(data);
  };
  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <div>
      <h1>ProductsDetail {id}</h1>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <h3>likes:{post?.reactions?.likes}</h3>
      <Link href="/products">back</Link>
    </div>
  );
}
