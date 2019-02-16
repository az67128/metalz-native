import React from "react";
import { View, Text, Image, Linking, TouchableOpacity, Alert } from "react-native";
import style from "../style/Album";
import { observer } from "mobx-react";

function formatNumber(number) {
  number = number || 0;
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
class Album extends React.Component {
  openLink = link => {
    Linking.openURL(link).catch(err => console.log(JSON.stringify(err)));
  };
  promtForDelete = () => {
    const { album, addToHateList } = this.props;
    Alert.alert(
      "Delete album",
      `${album.author} - ${album.title}`,
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        { text: "Delete", onPress: () => addToHateList(album.album_id), style: "delete" },
      ],
      { cancelable: true },
    );
  };
  render() {
    const { album, togglePreview, addToHateList } = this.props;

    return (
      <View style={style.album}>
        <View style={style.content}>
          <View>
            <TouchableOpacity
              onPress={() => togglePreview(`https://spirit-of-metal.com${album.cover_url}`)}>
              <Image
                source={{ uri: `https://spirit-of-metal.com${album.cover_url}` }}
                style={style.cover}
              />
            </TouchableOpacity>
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
            <TouchableOpacity onPress={this.promtForDelete}>
              <Image style={style.close} source={require("../assets/close.png")} />
            </TouchableOpacity>
          </View>
        </View>
        {album.lastfm_url && (
          <View style={style.albumBar}>
            <View style={style.leftBar}>
              <Image style={style.icon} source={require("../assets/fan.png")} />
              <Text style={style.listeners}>{formatNumber(album.listeners)}</Text>
            </View>
            <View style={style.rightBar}>
              {album.yandex_link && (
                <TouchableOpacity
                  onPress={() =>
                    this.openLink(`https://music.yandex.ru/album/${album.yandex_link}`)
                  }>
                  <Image style={style.icon} source={require("../assets/yandex.png")} />
                </TouchableOpacity>
              )}
              {album.google_link && (
                <TouchableOpacity
                  onPress={() =>
                    this.openLink(`https://play.google.com/music/m/${album.google_link}`)
                  }>
                  <Image style={style.icon} source={require("../assets/google.png")} />
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => this.openLink(album.lastfm_url)}>
                <Image style={style.icon} source={require("../assets/lastfm.png")} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default observer(Album);
