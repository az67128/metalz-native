import React from "react";
import { View, Image, TouchableWithoutFeedback, Dimensions } from "react-native";

import { observer } from "mobx-react";
import Modal from "react-native-modal";

class CoverPreview extends React.Component {
  state = {
    coverUrl: " ",
  };
  componentDidUpdate(prevProps) {
    if (this.props.cover !== prevProps.cover && Boolean(this.props.cover)) {
      this.setState({ coverUrl: this.props.cover });
    }
  }

  render() {
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;

    const { cover, togglePreview } = this.props;
    const { coverUrl } = this.state;
    return (
      <Modal
        isVisible={Boolean(cover)}
        onBackdropPress={() => togglePreview(null)}
        onBackButtonPress={() => togglePreview(null)}
        onSwipe={() => togglePreview(null)}
        swipeDirection="down"
        deviceHeight={deviceHeight > 700 ? deviceHeight + 100 : deviceHeight}
        backdropOpacity={0.9}>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <TouchableWithoutFeedback onPress={() => togglePreview(null)}>
            <Image
              source={{ uri: coverUrl }}
              style={{ alignSelf: "center", width: deviceWidth, height: deviceWidth }}
            />
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    );
  }
}

export default observer(CoverPreview);
