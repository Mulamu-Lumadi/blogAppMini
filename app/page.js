'use client'
import { useState, useEffect } from "react";
import Posts from "./components/posts";
import Form from "./components/form";

export default function Home() {

  // store the posts state after fetching from send api
  const [posts, setPosts] = useState([]);

  // create new posts and store in database
  async function submit(formData) {
    const title = formData.get("title");
    const body = formData.get("body");
    const id = formData.get("user_id");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, body, id }),
      });
      if (!response.ok) throw new Error("Failed to create post");
      const newPost = await response.json();
      console.log(`NEWPOST: ${JSON.stringify(newPost)}`);
      setPosts([...posts, newPost]);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // handle press of delete button, remove selected post
  async function remove(id) {
    try {
      const response = await fetch("/api/remove", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) throw new Error("Failed to delete post");
      const oldPost = await response.json();
      console.log(`REMOVED POST: ${JSON.stringify(oldPost)}`);
      setPosts(posts.filter(post => post.id != id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  // fetch posts from database on initial render  
  useEffect(() => {
    async function getPosts() {
      const response = await fetch("api/posts");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setPosts(data);
    }
    getPosts()
  }, []);

  return (
    <div>
      <Form sub={submit} />
      <Posts messages={posts} delFunc={remove} />
    </div>

  )
}

