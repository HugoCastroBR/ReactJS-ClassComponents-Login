import React, { Component } from 'react';
import UserItem from '../UserItem';
import "./style.css"

class ListaUsers extends Component {
    
    render() { 
        return ( 
            <div className="Lista_users-container">
                {this.props.users.map((user,index) => {
                    return(
                        <UserItem key={index} 
                        user={user}
                        />
                    )
                })}
            </div>
        );
    }
}

export default ListaUsers;