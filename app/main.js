'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router';

import Avatar from './component.js';

ReactDOM.render(<Avatar username="pwh" />, document.getElementById('app'));


// import MyBar from './components/my/self-bar';

// ReactDOM.render(<MyBar 
// 					// onLeftIconButtonTouchTap={this._handleClick} 
// 					Height={300}>
// 					TOP • 30
// 				</MyBar>, document.getElementById('app'));

/*
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link } from 'react-router'
import data from './data'
import './app.css'

class Category extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <div>
        <h1>{category.name}</h1>
        {this.props.children || (
          <p>{category.description}</p>
        )}
      </div>
    )
  }
}

class CategorySidebar extends React.Component {
  render() {
    const category = data.lookupCategory(this.props.params.category)

    return (
      <div>
        <Link to="/">◀︎ Back</Link>
        <h2>{category.name} Items</h2>
        <ul>
          {category.items.map((item, index) => (
            <li key={index}>
              <Link to={`/category/${category.name}/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class Item extends React.Component {
  render() {
    const { category, item } = this.props.params
    const menuItem = data.lookupItem(category, item)

    return (
      <div>
        <h1>{menuItem.name}</h1>
        <p>${menuItem.price}</p>
      </div>
    )
  }
}

class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Sidebar</h1>
        <p>
          Routes can have multiple components, so that all portions of your UI
          can participate in the routing.
        </p>
      </div>
    )
  }
}

class IndexSidebar extends React.Component {
  render() {
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {data.getAll().map((category, index) => (
            <li key={index}>
              <Link to={`/category/${category.name}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    const { content, sidebar } = this.props

    return (
      <div>
        <div className="Sidebar">
          {sidebar || <IndexSidebar />}
        </div>
        <div className="Content">
          {content || <Index />}
        </div>
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="category/:category" components={{ content: Category, sidebar: CategorySidebar }}>
        <Route path=":item" component={Item} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))
*/