import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.log("Hello from App");

import { Logo, UIComponentA, UIComponentBLazy } from 'ui-components';
import { LayoutComponentA, LayoutComponentBLazy } from 'layout-components';

ReactDOM.render(
  <>
    <Logo />
    <hr />
    <UIComponentA />
    <hr />
    <UIComponentBLazy />
    <hr />
    <LayoutComponentA />
    <hr />
    <LayoutComponentBLazy />
  </>
, document.getElementById('root'))
