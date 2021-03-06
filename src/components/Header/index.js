import React from 'react';
import Link from 'gatsby-link';
import NavMenu from '../NavMenu';
import Keep from '../Svg/keep';

export default () => {
  return (
    <div id="header">
      <Link className="keep" to="/">
        <Keep />
      </Link>
      <NavMenu />
    </div>
  );
};
