import React from 'react';
import PropTypes from 'prop-types';
import Consts from './consts';
import './BackDrop.css';

const BackDrop = props => {
  const { path } = props;
  const src = `${Consts.backDropImageUrl}${path}`;

  return <img className="full-width" src={src} alt="" srcSet="" />;
};

BackDrop.defaultProps = {
  path: ''
};

BackDrop.propTypes = {
  path: PropTypes.string
};

export default BackDrop;
