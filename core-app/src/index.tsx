import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.log("Hello from App");

import { Logo, UIComponentA, UIComponentBLazy } from 'ui-components';

ReactDOM.render(
  <>
    <Logo />
    <UIComponentA />
    <UIComponentBLazy />
  </>
, document.getElementById('root'))
