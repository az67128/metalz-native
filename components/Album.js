import React from "react";
import { View, Text, Image } from "react-native";
import style from "../style/Album";
import { observer } from "mobx-react";

class Album extends React.Component {
  render() {
    const { album } = this.props;
    return (
      <View style={style.album}>
        <View style={style.content}>
          <View>
            <Image
              source={{ uri: `https://spirit-of-metal.com${album.cover_url}` }}
              style={style.cover}
            />
          </View>
          <View style={style.description}>
            <View style={style.authorWrap}>
              <Text style={style.author}>{album.author}</Text>
            </View>
            <View>
              <Text style={style.title}>{album.title}</Text>
            </View>
            <View>
              <Text style={style.genre}>{album.genre}</Text>
            </View>
          </View>
          <View>
            <Text>Actions</Text>
          </View>
        </View>
        <View>
          <Text>albumActions</Text>
        </View>
      </View>
    );
  }
}

export default observer(Album);
