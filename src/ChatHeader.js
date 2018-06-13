import React from 'react'

const ChatHeader = () => {
  return (
      <div className="ChatHeader" style={styles}>
      <div className="roomInfo">
        <h2>#general</h2>
        <p>Announcements and general chat</p>
      </div>
    </div>
  )
}

const styles = {
  backgroundColor: '#c9c9c9',

  fontSize: '10px',
  alignItems: 'stretch',
  width: '100vh',
  position: 'fixed',
}

export default ChatHeader
