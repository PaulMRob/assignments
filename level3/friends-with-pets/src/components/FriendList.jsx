import React from "react"
import Friend from "./Friend"
import data from "../data"

export default function FriendList() {
    const friends = data.map(item => {
        return (
            <Friend
                key={item.id} 
                {...item}   
            />        
        )
    })
    return (
        <div className="friends-list">
            {friends}
        </div>
    )
}