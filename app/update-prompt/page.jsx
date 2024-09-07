"use client";
import React from "react";
import { useState, useEffect } from "react";
import Form from "@components/Form";
import { useRouter, useSearchParams } from "next/navigation";

const EditPrompt = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [Post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/prompt/${searchParams.get("id")}`);
      const data = await response.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
      console.log(Post);
    };
    if (searchParams.get("id")) fetchData();
  }, [searchParams.get("id")]);

  const UpdatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch(`/api/prompt/${searchParams.get('id')}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: Post.prompt,
          tag: Post.tag,
        }),
      });
      if(response.ok){
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally{
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="EDIT"
      post={Post}
      setpost={setPost}
      submitting={submitting}
      handlersubmit={UpdatePrompt}
    />
  );
};

export default EditPrompt;
