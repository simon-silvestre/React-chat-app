import React from 'react'
import SignIn from './SignIn';
import SignOut from './SignOut';

function NavBar({ user }) {

    return (
        <div className="NavBar">
            <p>Chat App</p>
            {user ? <SignOut /> : <SignIn />}
        </div>
    )
}

export default NavBar
