import React, { Component } from 'react'

class MessageForm extends Component {
  state = {
    body: '',
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.addMessage(this.state.body)
  }

  handleChange = (ev) => {
    this.setState({ body: ev.target.value })
  }

  render() {
    return (
      <form
        className="MessageForm"
        onSubmit={this.handleSubmit}
        
      >
        <input
          type="text"
          name="body"
          placeholder="Type a message..."
          value={this.state.body}
          onChange={this.handleChange}
          style = {styles.bar}
        />
        <button type="submit"
        style = {styles.button}>
        Send</button>
      </form>
    )
  }
}

const styles = {
bar: {
  position: 'absolute',
  bottom: '10px',
  height: '30px',
  width: '50vh',
},

button: {
  position: 'absolute',
  bottom: '10px',
  height: '35px',
  right: '50vh',
}

 

}
export default MessageForm
