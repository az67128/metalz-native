import React from 'react';
import { Svg } from 'expo';

export default class YandexIcon extends React.Component {
  static defaultProps = {
    size: 26,
    fill: 'black',
  };
  render() {
    const { size, fill } = this.props;
    return (
      <Svg
        width={size}
        height={size}
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/Svg"
        {...this.props}>
        <Svg.Path
          d="M110.035 211.134L138.128 149.068H150.54V211.134H168.177V44.866H136.944C117.064 44.866 93.3773 65.7732 93.3773 99.7423C93.3773 133.718 123.101 147.435 123.101 147.435L87.8227 211.134H110.035ZM120.928 126.233C116.588 120.779 112.808 111.705 112.808 96.6433C112.808 63.6495 131.779 59.3876 134.396 58.9588C134.584 58.9278 134.767 58.9175 134.955 58.9175H150.047V134.369H138.305C131.592 134.369 125.109 131.485 120.928 126.233Z"
          fill={fill}
        />
        <Svg.Path
          d="M0 0V256H256V0H0ZM240.165 240.165H15.8351V15.8351H240.165V240.165Z"
          fill={fill}
        />
      </Svg>
    );
  }
}
