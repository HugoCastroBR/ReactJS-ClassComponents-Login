import React, { Component } from 'react';
import "./style.css"


class UserItem extends Component {

    render() { 
        if(this.props.user.selected){
            return ( 
                <div className="User-item User-item-selected">
                <span className="User-name">{this.props.user.name}</span>
                <span className="User-email" >{this.props.user.email}</span>            
            </div>
            )
        }else{
            return ( 
                <div className="User-item">
                <span className="User-name">{this.props.user.name}</span>
                <span className="User-email" >{this.props.user.email}</span>            
            </div>
            )
        }
    }
}

export default UserItem;