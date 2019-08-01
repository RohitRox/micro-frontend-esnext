import * as React from 'react';

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  componentDidCatch(error, errorInfo) {
    console.log(this.state.error)
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div style={{ border: '2px solid red' }}>
          <h2 style={{ color: 'red' }}>Something went wrong with this widget.</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

const RealWidget = () => {
  if (location.search.length > 0) {
    throw new Error('Shit hit the fan!')
  }
  return <h1>Hi I am buggy widget</h1>
}

const BuggyWidget = () => {
  return <ErrorBoundary>
    <RealWidget />
  </ErrorBoundary>
}

export default BuggyWidget;
