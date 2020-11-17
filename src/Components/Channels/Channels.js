import React from 'react';
import './Channels.css';


export default class Channels extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          channels: props.channels,
          last : 0,
        };
      }


    render() {
      return (
        <div className="container">
        {this.state.channels.map((d,index) =>
            {
                return(
                    <div onClick={() => this.props.onClick(index)}>
                        <div className="channel" key={d}>
                            <div className="name">
                              {d.name}
                              </div>
                            <p>{d.messages.pop().content.slice(0, 30)} ...</p>
                        </div>
                        
                    </div>
                    );
            }
            )
        }
    </div>
      ); 
    }
  }