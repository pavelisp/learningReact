import React, {Component} from 'react';
import './block.css';

class Block extends Component {
    render(){
        const {frosty, mosty} = this.props;
        return <div className="frosty">{mosty} {frosty}</div>
    } 
}

export default Block;