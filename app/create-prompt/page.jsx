"use client";
import React from "react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Form from "@components/Form";
const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setpost] = useState({
    prompt: "",
    tag: "",
  });
  const createprompt = async (e) => {};
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
