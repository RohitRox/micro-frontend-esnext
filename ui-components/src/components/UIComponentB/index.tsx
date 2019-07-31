import * as React from 'react';

export const UIComponentB:  React.FC  = () => {
  return <div className="card">
    <div className="card-body">
      <h5 className="card-title">UIComponentB</h5>
      <p className="card-text">Lazily loaded component from ui-components</p>
    </div>
  </div>
}

export default UIComponentB;
