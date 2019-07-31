import * as React from 'react';

import { Logo } from 'ui-components';

export const LayoutComponentA:  React.FC  = () => {
  return <div className="card layout-component-wrapper">
    <div className="card-body">
      <Logo />
      <h5 className="card-title">LayoutComponentA that renders Logo from ui-components</h5>
    </div>
  </div>
}

export default LayoutComponentA;
