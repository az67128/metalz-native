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
          d="M2.08562 133.103L122.85 253.867C125.693 256.711 130.253 256.711 133.097 253.867C135.94 251.024 135.94 246.464 133.097 243.62L17.4829 128.007L133.097 12.3929C135.94 9.54953 135.94 4.98938 133.097 2.14598C131.702 0.751099 129.824 1.57313e-05 128 1.58908e-05C126.176 1.60503e-05 124.298 0.69745 122.903 2.14598L2.13926 122.91C-0.704143 125.7 -0.704128 130.314 2.08562 133.103Z"
          fill={fill}
        />
      </Svg>
    );
  }
}
