import * as React from 'react';
import { lazy, Suspense } from 'react';

const LayoutComponentB = lazy(() => import('.'));

const LayoutComponentBLazy: React.FC = () => {
  return <div className="central-comp">
    <Suspense fallback={<p>Loading LayoutComponentB ...</p>}>
      <LayoutComponentB />
    </Suspense>
  </div>
}


export default LayoutComponentBLazy
