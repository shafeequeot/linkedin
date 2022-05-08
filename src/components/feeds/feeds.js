import React, {useEffect, useState} from 'react'
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import './feeds.css'
import InputOptions from './inputOptions';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import FeedIcon from '@mui/icons-material/Feed';
import Posts from './posts'
import { db } from '../../app/firebase/config';
import { collection, addDoc } from "firebase/firestore"; 
import firebase from "firebase/app";

function Feeds() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(()=>{
    db.collection("posts").orderBy('Timestamp','desc').onSnapshot((snapshot)=>{
      setPosts(
        snapshot.docs.map((doc) =>({
          id: doc.id,
          data: doc.data()
        })))
    })
  },[])


  const sendPost = (e)=>{
    e.preventDefault()
    db.collection('posts').add({
      name: 'Shafeeque',
      desciption: 'this is a test desc',
      message: input,
      photoUrl: '',
      Timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }
  return (
    <div className='feed'>
        <div className="feedInputContainer backGroundWhite">
            <div className="inputFeed">
                <CreateRoundedIcon />
                <form>
                    <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder='Start a post'/>
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
        
            <div className='feedInputOptions'>
               <InputOptions color="#7085F9" Icon={PhotoRoundedIcon} title="Photo"/>
               <InputOptions color="#E7A33E" Icon={VideocamRoundedIcon} title="Video"/>
               <InputOptions color="#C0CBCD" Icon={WorkRoundedIcon} title="Job"/>
               <InputOptions color="#7FC15E" Icon={FeedIcon} title="Write Article"/>

            </div>
        </div>
        <div className='feedInputContainer'>
          {posts.map(({id, data:{ name, desciption, message, photoUrl}})=>(

            <Posts key={id} name={name} 
            description={desciption}
            message={message}
            photoUrl ={photoUrl} />
         ))}
          
          
        </div>
    </div>
  )
}

export default Feeds