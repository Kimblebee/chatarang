import React from 'react'

import Message from './Message'

const MessageList = (props) => {
  return (
    <div className="MessageList"
    style = {styles}>
      {
        props.messages.map(msg => <Message key={msg.id} message={msg} />)
      }
    </div>
  )
}


const styles = {
  width: '50vw',
maxWidth: '50vw',
  top: '5rem',
  fontSize: '15px',
  height: '70%',
  overflowY: 'scroll',
  position: 'relative',
  paddingLeft: '10px',

}
export default MessageList
