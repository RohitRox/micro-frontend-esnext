import * as React from 'react';

const LogoImg = require('../../images/app-logo.png');

const Logo: React.FC = () => {
  return <div className="card">
    <div className="card-body">
      <img
        height="44spx"
        width="44px"
        src={LogoImg}
        alt="Logo"
      />
      <p className="card-text">Logo from ui-components</p>
    </div>
  </div>
}

export default Logo;
