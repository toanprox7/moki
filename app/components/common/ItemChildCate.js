import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class ItemChildCate extends Component {
    render() {
        return (
             <Link to={`/san-pham/${this.props.id}/1`}>{this.props.name}</Link>

        );
    }
}

export default ItemChildCate;