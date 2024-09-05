"use client"
import {useState, useEffect} from 'react'
import PrompCard from './PrompCard'

const Feed = () => {
  const [Posts, setPosts] = useState([]);
 
  useEffect(() => {
    const fetchData = async() => {
      const response = await fetch('/api/prompt');
      const data = await response.json();
      setPosts(data);
      console.log(data);
    
    }
    fetchData();
  }, []);

  
  const [searchText, setSearchText] = useState('');
  const handlerSearchChange = (e) => {

  }

  const PromptCardList = ({data, handlerTag}) => {
    return(
      <div className="mt-16 prompt_layout">
        {data.map((post) => {
          return <PrompCard key={post._id} post={post} handlerTag={handlerTag}/>
        })}
      </div>
    )
  }

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
      <input type="text" 
      placeholder="Search for a tag or a username"
      value={searchText}
      required
      onChange={handlerSearchChange}
      className="search_input peer"
      />
      </form>
      <PromptCardList data={Posts} handlerTag={() => {}} ></PromptCardList>
    </section>
  )
}

export default Feed
