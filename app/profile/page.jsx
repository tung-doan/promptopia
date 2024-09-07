"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import MyProfile from "@components/Profile";

const Page = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data: session, status } = useSession();
  const [Data, setData] = useState([]);
  // useEffect(()=>{
  //     const fetchData = async () => {
  //         const response = await fetch(`api/users/${session?.user.id}/posts`);
  //         const data = await response.json();
  //         setData(data)
  //     }
  //    if(session.user.id) fetchData()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch(`/api/users/${session.user.id}/posts`);
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    if (status === "authenticated") {
      fetchData();
    } else if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [session, status, router]);

  const handlerEdit = (Data) => {
    router.push(`/update-prompt?id=${Data._id}`);
  };
  const handlerDelete = (Data) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");
    if (hasConfirmed) {
      try {
        const response = fetch(`/api/prompt/${Data._id}`, {
          method: "DELETE",
        });

        const newPost = Data.filter((post) => post._id !== Data._id);
        console.log(newPost);
        setData(newPost);
      } catch (error) {
        console.error("Error deleting post:", error);
      }
    }
  };
  return (
    <MyProfile
      name="My Profile"
      description="This is your profile"
      data={Data}
      handlerEdit={handlerEdit}
      handlerDelete={handlerDelete}
    />
  );
};

export default Page;
