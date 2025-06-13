import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Layout = ({ children
}) => (
    <div className="flex min-h-screen flex-col">
    
      <main className="flex-grow">{children}</main>
    </div>
  );

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerClassnames: PropTypes.string,
  homepage: PropTypes.bool,
};

Layout.defaultProps = {
  headerClassnames: null,
  homepage: false,
};

export default Layout;
