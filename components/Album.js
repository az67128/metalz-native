import React from "react";
import { View, Text, Image, Linking, Alert, TouchableWithoutFeedback } from "react-native";
import style from "../style/Album";
import { observer } from "mobx-react";

function formatNumber(number) {
  number = number || 0;
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
class Album extends React.Component {
  openLink = link => {
    Linking.openURL(link).catch(err => Alert(JSON.stringify(err)));
  };
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
            <Image style={style.close} source={require("../assets/close.png")} />
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
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.openLink(`https://music.yandex.ru/album/${album.yandex_link}`)
                  }>
                  <Image style={style.icon} source={require("../assets/yandex.png")} />
                </TouchableWithoutFeedback>
              )}
              {album.google_link && (
                <TouchableWithoutFeedback
                  onPress={() =>
                    this.openLink(`https://play.google.com/music/m/${album.google_link}`)
                  }>
                  <Image style={style.icon} source={require("../assets/google.png")} />
                </TouchableWithoutFeedback>
              )}
              <TouchableWithoutFeedback onPress={() => this.openLink(album.lastfm_url)}>
                <Image style={style.icon} source={require("../assets/lastfm.png")} />
              </TouchableWithoutFeedback>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default observer(Album);
