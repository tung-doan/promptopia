"use client";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Form from "@components/Form";
import { useRouter } from 'next/navigation';


const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });
 
  const createprompt = async (e) => {
    e.preventDefault();
    if (!session) {
      console.log("User is not authenticated");
      return;
    }
    console.log(session);
    setSubmitting(true);
    try {
      const reponse = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.user?.id,
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if(reponse.ok){
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
      type="CREATE"
      post={post}
      setpost={setpost}
      submitting={submitting}
      handlersubmit={createprompt}
    />
  );
};

export default CreatePrompt;
