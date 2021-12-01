import React, { useState } from 'react'
import {db, auth} from '../firebase'
import firebase from 'firebase'

function SendMessage({ scroll }) {

    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault();
        const {uid, displayName, photoURL} = auth.currentUser

        if(msg !== '') {
            await db.collection('messages').add({
                text: msg,
                photoURL,
                displayName,
                uid,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            setMsg('')
            scroll.current.scrollIntoView({ behavior: 'smooth'})
        }
    }

    return (
        <div className="SendMessage">
            <form onSubmit={sendMessage}>
                <input value={msg} onChange={(e) => setMsg(e.target.value)} type="text" placeholder="Message..." />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default SendMessage
