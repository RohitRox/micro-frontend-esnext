import * as React from 'react';
import * as ReactDOM from 'react-dom';

console.log("Hello from App");

import CoreAppComponent1 from './CoreAppComponent1'
import CoreAppComponent2Lazy from './CoreAppComponent2Lazy'

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
    <hr />
    <CoreAppComponent1 />
    <hr />
    <CoreAppComponent2Lazy />
  </>
, document.getElementById('root'))
