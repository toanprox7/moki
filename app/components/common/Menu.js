import React, { Component } from 'react';
import BreadCrumb from '../sanpham/BreadCrumb';
import { BrowserRouter as Router, Route, Switch, Ridirect, hashHistory, Redirect, NavLink, Link,} from 'react-router-dom';
class Menu extends Component {
  constructor(props) {
    super(props);
    
  }
  
  checkSl=() =>{
    var arrayProducts = JSON.parse(localStorage.getItem("cart"));
    return arrayProducts.length;
  }
    render() {
      // console.log(this.checkSl());
        return (
<div id="top-page">
  <div className="top-head-page">
    <div className="container">
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="phone-support">
            <i className="fa fa-phone" />
            Hotline: <span>1900</span> <span>636</span> <span>779</span>
          </div>
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 text-right">
          <div className="block-top-right">
            <ul>
              <li className="welcome">Chào mừng bạn đến với MOKI</li>
              <li className="check-cart">  <i className="fa fa-flag-checkered" />
                <a href="#"> Kiểm tra đơn hàng</a></li>
              <li className="my-cart">  <i className="fa fa-shopping-cart" />
              <span>{this.checkSl()}</span><Link to="/shopping-cart">  Giỏ hàng</Link></li>
              <li className="authen"> <a href="#">Register</a>/ <a href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav className="header">
    <div className="container">
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="logo">
             <Link to="/"><img src="/img/devWeb/home/logo_medium.png" alt="moki.vn" /></Link>
          </div>
        </div>
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <div className="nav-right">
            <div className="search">
              <input type="text" placeholder="Search for a produce" />
              <button><i className="fa fa-search" /></button>
            </div>
            <div className="menu-nav text-right">
              <ul>
                <li><Link to="/">TRANG CHỦ</Link></li>
                <li><a href="#">GÓC CỦA MẸ</a></li>
                <li><a href="#">GIỚI THIỆU</a></li>
                <li><a href="#">SHOP MOKI</a></li>
                <li><a href="https://www.facebook.com/moki.vn" target="_blank"><span className="fa fa-facebook-f" /></a></li>
                <li><a href="https://twitter.com/MOKI_VN" target="_blank"> <span className="fa fa-twitter" /> </a></li>
                <li><a href="https://www.youtube.com/channel/UCM7dLGfHJ6onxoY3StztfwQ/" target="_blank"><span className="fa fa-youtube" /></a></li>
                <li><a href="https://www.instagram.com/moki.vn/" target="_blank"><span className="fa fa-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  {this.props.children}
</div>

        );
    }
}

export default Menu;

