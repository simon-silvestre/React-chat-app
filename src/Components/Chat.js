import React, { useState, useEffect, useRef } from 'react'
import {auth, db} from '../firebase'
import SendMessage from './SendMessage'

function Chat() {

    const scroll = useRef()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div className="Chat">
            <div className="messageContainer">
                {messages.map(({id, text, displayName, photoURL, uid}) => (
                    <div className={`Message ${uid === auth.currentUser.uid ? 'sent' : ''}`} key={id}>
                        <img src={photoURL} alt="profil" />
                        <div className="content">
                            <p>{displayName}</p>
                            <p>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll}/>
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
