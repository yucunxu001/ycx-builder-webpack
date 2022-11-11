'use strict'

import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './images/logo.png';
import './search.less'
import '../../common';
import { a } from './tree-shaking';
// import largeNumberXu from 'large-number-xu';
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
        <div className="search-text">Search Text 搜索文字 { a()} { addResult } </div>
        <div className="search-box">Search Box</div>
        <img src={ logo } onClick={ () => { this.loadComponent() } } /> 
      </div>
    ) 
  };
}

// ReactDOM.render(
//   <Search />,
//   document.getElementById('root')
// )

ReactDOM.createRoot(document.getElementById('root')).render(<Search />);

// document.write('Search Page');