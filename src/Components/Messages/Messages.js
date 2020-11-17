import React from 'react';
import './Message.css';
import 'moment/locale/fr';

const moment = require('moment');
moment.locale('fr');

function renderMaBulle(props) //My Message will be displayed on the right(not the same css for renderMaBulle and renderBulle)
{
  if(props.isSame===true)
  {
    return ( 
      <div className="maBulle">
        <div className="name">
        </div>
        <p>{props.data}</p>
      </div>
    );
  }
  else{
    return ( //The case where it's not the same author than the previous
        <div className="maBulle">
          
          <div className="name">
            <h6>Me</h6>
          </div>
          <p>{props.data}</p>
        </div>
    );
  }
}
function renderBulle(props)
{
  if(props.isSame===true)
  {
  return (
    <div className="bulle">
      <p>{props.data}</p>
    </div>
    );
  }
  else{
    return (
      <div className="bulle">

        <h6>{props.author}</h6>
        <p>{props.data}</p>
      </div>
      );
  }
}
function Message(props) {
  return(props.author==='david' ? renderMaBulle(props) : renderBulle(props) ) //If the author is david, it's my message, else, it's not    
}

var precAuthor='';
var datestr='';

export default class Messages extends React.Component {    


  render() {

      return (
        
          <div className="listMsg">
              {
              this.props.messages.map(d => //For each message in the channel
                  { //Format the date
                    moment().diff(moment(d.creation), 'days')>6 ? datestr = moment(d.creation).format('LLL') : datestr = moment(d.creation).calendar()

                    if(d.author === precAuthor) //If this message is from the same author than the previous one
                    {
                      precAuthor = d.author;
                      return( //We don't want to print the author again
                      <div className="message">
                        <h5>{datestr}</h5>
                        <Message key={d.id} data={d.content} author={d.author} isSame={true}/>
                        </div>
                        );
                    }
                    else{ //else we give "isSame" false to say to print the name of the author
                      precAuthor = d.author;
                      return(
                        <div className="message">
                        <h5>{datestr}</h5>
                        <Message key={d.id} data={d.content} author={d.author} isSame={false}/>
                        </div>
                        );
                        
                    } 
                  }
               )}
          </div>
      );
    }
  }
  
 
