import React from 'react';
import Messages from '../Messages/Messages.js';
import SendMessage from '../SendMessage/SendMessage.js';
import './Channel.css';
import ece from './ece.jpg';

export default class Channel extends React.Component {
    constructor(props) {
        super(props);
        alert(props.channel.messages.length);
        this.addMsg = this.addMsg.bind(this);
        this.state = {
          id: 1,
          name: props.channel.name,
          messages: props.channel.messages,
          currentmessage : 0,
        };
      }

      addMsg(msg) {
        const array = this.state.messages.concat({author: "david",content:msg,timestamp: new Date().getTime()})
        this.setState({ messages: array })
        const cont = this.state.messages.length
        this.setState({ currentmessage: cont })
      }
  
    render() {
      
      return (
       
        <div className="channel">
          <div className="header">
          <img className="circular" src={ece} />
            <p>{this.state.name}</p>
          </div>
            <div>
                <Messages messages ={this.state.messages}/>
            </div>
                <SendMessage addMsg ={this.addMsg} />
        </div>
      );
    }
  }