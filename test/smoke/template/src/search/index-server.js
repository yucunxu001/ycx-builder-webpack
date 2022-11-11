'use strict'

// import React from 'react';
// import logo from './images/logo.png';
// import './search.less'
// import largeNumberXu from 'large-number-xu';
const React = require('react');
const logo = require('./images/logo.png');
const largeNumberXu = require('large-number-xu');
require('./search.less');

class Search extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      Text: null
    };
    this.loadComponent = this.loadComponent.bind(this); // 事件绑定
  }

  loadComponent () {
    import('./text').then((res) => {
      console.log(res)
      this.setState({
        Text: res.default
      })
    })
  }

  render() {
    const { Text } = this.state;
    const addResult = largeNumberXu('999', '1');
    return (
      <div className="wrap">
        {
          Text ? <Text/> : null
        }
        <div className="search-text">Search Text 搜索文字 { addResult } </div>
        <div className="search-box">Search Box</div>
        <img src={ logo } onClick={ () => { this.loadComponent() } } /> 
      </div>
    ) 
  };
}

module.exports = <Search/>;