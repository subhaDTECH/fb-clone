import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

const MessageSender = () => {
  const [{user},dispatch]=useStateValue();
  const [input,setInput]=useState("");
  const [image,setImage]=useState("");
  const postData=(e)=>{
    e.preventDefault();
    db.collection('posts').add({
      imageurl:image ,
      profileurl:user.photoURL,
      message:input,
      username:user.displayName,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()

      
    });
    setImage("");
    setInput("");

  }
    return (
        <div className="messagesender">
          <div className="messagesender__top">
            <form >
             <div className="first_input_div">
             <Avatar fontSize="large" className="mess_avatar" src={user.photoURL}/>

               <input className="input_first"
               value={input}
                 onChange={(e)=>setInput(e.target.value)}
                type="text" placeholder={` Whats on in your mind ${user.displayName} ?   `}/>
             </div>
            
             <input 
             value={image}
             onChange={(e)=>setImage(e.target.value)}
             type="text" placeholder="image URL(optional)" />
                <button onClick={postData} type="submit"></button>
            </form>
          </div>
            <div className="messagesender__bottom">
                <div className="message__bottom_icon">
                <IconButton>
                <VideocamIcon style={{color:"red"}} />
                     
                </IconButton>
                <p>Live </p>
                    
                </div>
                <div className="message__bottom_icon">
                <IconButton>
                  <PhotoLibraryIcon style={{color:"green"}}  />
                </IconButton>
                   
                    <p>videos/photo</p>
                </div>
                 <div className="message__bottom_icon">
                 <IconButton>
                 <InsertEmoticonIcon style={{color:"orange"}}/>
                 </IconButton>
                    
                    <p>feelings</p>
                 </div>
            </div>
          
        </div>
    )
}

export default MessageSender;
