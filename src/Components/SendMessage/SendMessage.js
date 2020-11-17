import React from 'react';
import './SendMessage.css';

export default class SendMessage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      if(this.state.value !== '')
      {
          this.props.addMsg(this.state.value);
      }
      this.setState({
        value:''
      })
      event.preventDefault();
    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="box" >
            <input className="field" type="textarea" value={this.state.value} onChange={this.handleChange}  placeholder="Ecrire un message..."/>
            <button className="button">
            </button>
          
        </form>
      );
    }
  }