"use client";
import { useState, useEffect } from "react";
import PrompCard from "./PrompCard";

const Feed = () => {
  const [Posts, setPosts] = useState([]);
  const [FilteredPosts, setFilteredPosts] = useState([]);
  const [SearchTimeOut, setSearchTimeOut] = useState(null);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();
      setPosts(data);
    };
    fetchData();
  }, []);

  const filterPosts = (searchText) => {
    const regex = new RegExp(searchText, "i");
    return Posts.filter((post) => 
      regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
    );
  };

  const handlerSearchChange = (e) => {
    setSearchText(e.target.value);
    clearTimeout(SearchTimeOut);
    setSearchTimeOut(
      setTimeout(() => {
        const filtered = filterPosts(e.target.value);
        console.log(filtered);
        setFilteredPosts(filtered);
      }, 500)
    );
  };

  const PromptCardList = ({ data, handlerTag }) => {
    return (
      <div className="mt-16 prompt_layout">
        {data.map((post) => {
          return (
            <PrompCard key={post._id} post={post} handlerTag={handlerTag} />
          );
        })}
      </div>
    );
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          required
          onChange={handlerSearchChange}
          className="search_input peer"
        />
        <div className="ml-2">
          <svg
            onClick={handlerSearchChange}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </form>
      {!searchText ? (
        <PromptCardList data={Posts} handlerTag={() => {}}></PromptCardList>
      ) : (
        <PromptCardList
          data={FilteredPosts}
          handlerTag={() => {}}
        ></PromptCardList>
      )}
    </section>
  );
};

export default Feed;
