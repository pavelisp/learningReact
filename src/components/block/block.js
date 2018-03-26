import React, {Component} from 'react';
import './block.css';

class Block extends Component {
    render(){
        const {users, loading} = this.props;
        return loading ? <p>Loading...</p>
        : <ul className="frosty">{users.map(user => {
            return <li key={user.id}>{user.name}</li>;
           })}</ul>
    } 
}

export default Block;