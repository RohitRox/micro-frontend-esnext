import * as React from 'react';

export const LayoutComponentB:  React.FC  = () => {
  return <div className="card layout-component-wrapper">
    <div className="card-body">
      <h5 className="card-title">LayoutComponentB</h5>
      <p className="card-text">LayoutComponentB which will be lazy loaded</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
}

export default LayoutComponentB;
