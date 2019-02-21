import React from 'react';
import { Svg } from 'expo';

export default class App extends React.Component {
  static defaultProps = {
    fill: 'white',
  };
  render() {
    const { fill } = this.props;
    return (
      <Svg viewBox="0 0 136 256" fill="none" xmlns="http://www.w3.org/2000/Svg" {...this.props}>
        <Svg.Path
          d="M133.144 122.897L12.3795 2.13255C9.53612 -0.71085 4.97595 -0.71085 2.13255 2.13255C-0.71085 4.97595 -0.71085 9.53612 2.13255 12.3795L117.746 127.993L2.13255 243.607C-0.71085 246.45 -0.71085 251.011 2.13255 253.854C3.52743 255.249 5.40515 256 7.22921 256C9.05328 256 10.931 255.303 12.3259 253.854L133.09 133.09C135.933 130.3 135.933 125.686 133.144 122.897Z"
          fill={fill}
        />
      </Svg>
    );
  }
}
