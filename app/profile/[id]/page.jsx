"use client";
import { useState, useEffect } from "react";

import { useSearchParams } from "next/navigation";
import MyProfile from "@components/Profile";

const Page = ({ params }) => {
  const searchparams = useSearchParams();
  const username = searchparams.get("name");
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/users/${params.id}/posts`);
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <MyProfile
      name={username}
      description={`Welcome to ${username}'s personalized profile page. Explore ${username}'s exceptional prompts and be inspired by the power of their imagination`}
      data={Data}
    />
  );
};

export default Page;
