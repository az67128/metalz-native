import React from 'react';
import { View, Text, Image, Linking, TouchableOpacity, Alert } from 'react-native';
import style from '../style/Album';
import { observer } from 'mobx-react';
import translation from '../constants/translation';
import YandexIcon from '../assets/YandexIcon';
import GoogleIcon from '../assets/GoogleIcon';
import LastfmIcon from '../assets/LastfmIcon';
import FanIcon from '../assets/FanIcon';
import CloseIcon from '../assets/CloseIcon';

function formatNumber(number) {
  number = number || 0;
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
class Album extends React.Component {
  openLink = link => {
    Linking.openURL(link).catch(err => console.log(JSON.stringify(err)));
  };
  promtForDelete = () => {
    const { album, addToHateList } = this.props;
    Alert.alert(
      translation('deleteAlbum'),
      `${album.author} - ${album.title}`,
      [
        {
          text: translation('cancel'),
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: translation('delete'),
          onPress: () => addToHateList(album.album_id),
          style: 'delete',
        },
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
              <CloseIcon style={style.close} />
            </TouchableOpacity>
          </View>
        </View>
        {album.lastfm_url && (
          <View style={style.albumBar}>
            <View style={style.leftBar}>
              <FanIcon style={style.icon} />
              <Text style={style.listeners}>{formatNumber(album.listeners)}</Text>
            </View>
            <View style={style.rightBar}>
              {album.yandex_link && (
                <TouchableOpacity
                  onPress={() =>
                    this.openLink(`https://music.yandex.ru/album/${album.yandex_link}`)
                  }>
                  <YandexIcon style={style.icon} />
                </TouchableOpacity>
              )}
              {album.google_link && (
                <TouchableOpacity
                  onPress={() =>
                    this.openLink(`https://play.google.com/music/m/${album.google_link}`)
                  }>
                  <GoogleIcon style={style.icon} />
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => this.openLink(album.lastfm_url)}>
                <LastfmIcon style={style.icon} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

export default observer(Album);
