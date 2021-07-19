import React,{useState,useEffect} from 'react';
import "./Feed.css";
import StoryReels from "./StoryReels";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import FlipMove from 'react-flip-move';
const Feed = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
           db.collection('posts').orderBy('timestamp','desc')
           .onSnapshot(snapshot=>{
               setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
           })
    },[])
    return (
        <div className="feed">
           <StoryReels/>
            <MessageSender/>
            <FlipMove>
            {
                posts.map((post)=>{
                    console.log(post)
                    console.log(post.imageurl)
                    return (
                        <Post
                          key={post.id}
                          imageurl={post.data.imageurl}
                          profileurl={post.data.profileurl}
                          message={post.data.message}
                          username={post.data.username}
                          timestamp={post.data.timestamp}

                        />

                    )
                })
            }
            </FlipMove>
            
        </div>
    )
}

export default Feed;
