import React, { Component } from 'react';
import BannerMainOnePicture from './BannerMainOnePicture';
import MainProductChild from './MainProductChild';

class BlockCategory extends Component {
    render() {
        return (
            <div>
                
        <BannerMainOnePicture data={this.props.data}/>
        <MainProductChild data={this.props.data}/>
            </div>
       
        );
    }
}

export default BlockCategory;