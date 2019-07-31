import * as React from 'react';
import { lazy, Suspense } from 'react';

const CoreAppComponent2 = lazy(() => import('./CoreAppComponent2'));

const CoreAppComponent2Lazy: React.FC = () => {
  return <div className="central-comp">
    <Suspense fallback={<p>Loading CoreAppComponent2 ...</p>}>
      <CoreAppComponent2 />
    </Suspense>
  </div>
}


export default CoreAppComponent2Lazy
