/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

// jshint ignore:start
export default function Header(props) {
  let navStyle = {
    fontSize: "1.32rem",
  }
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark" style={navStyle}>
      <a className="navbar-brand " href="" style={navStyle}><i class="fas fa-calculator"></i>  {props.title}</a>
      <button className="navbar-toggler bg-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
        </ul>
      </div>
    </nav>
  )
}
Header.defaultProps = {
  title: "Default title"
}

Header.propTypes = {
  title: PropTypes.string
}
// jshint ignore:end