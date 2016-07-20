import React from 'react'
import NavLink from './NavLink'
// import { IndexLink } from 'react-router'
// by using onlyActiveOnIndex, we don't need to import {IndexLink} property

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
          <li><NavLink to='/' onlyActiveOnIndex={true} >Home</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
