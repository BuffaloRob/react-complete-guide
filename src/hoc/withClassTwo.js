// import React from 'react';
import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//   return (props) => (
//     <div className={className}>
//       < WrappedComponent {...props} />
//     </div>
//   )
// }

const withClassTwo = (WrappedComponent, className) => {
  const WithClassTwo = class extends Component {
    render() {
      return (
        <div className={className}>
          <WrappedComponent ref={this.props.forwardRef} {...this.props} />
        </div>
      )
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithClassTwo {...props} forwardRef={ref} />
  })
};

export default withClassTwo;