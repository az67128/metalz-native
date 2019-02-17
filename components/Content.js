import React from "react";
import { FlatList, View, Text } from "react-native";
import style from "../style/Content";
import { observer, inject } from "mobx-react";
import Album from "./Album";
import Loader from "./Loader";
import Swiper from "react-native-swiper";
import NoAlbums from "./NoAlbums";
import CoverPreview from "./CoverPreview";
import GenreSelect from "./GenreSelect";
import translation from "../constants/translation";
import { PublisherBanner } from "expo";

class Content extends React.Component {
  keyExtractor = (item, index) => item.album_id.toString();
  onIndexChanged = index => {
    this.props.store.changeMonth(index === 0 ? -1 : 1);
  };
  render() {
    const {
      albumList,
      isLoading,
      togglePreview,
      coverPreview,
      addToHateList,
      isGenreSelect,
      toggleFilter,
      selectGenre,
      loadAlbums,
      genreFilter,
    } = this.props.store;

    return (
      <View style={style.content}>
        {isLoading ? (
          <Loader />
        ) : (
          <Swiper
            index={1}
            showsPagination={false}
            onIndexChanged={this.onIndexChanged}
            scrollEnabled={!Boolean(coverPreview)}>
            <View style={[style.slide, style.slide1]}>
              <Text style={[style.text, style.text1]}>{translation("prevMonth")}</Text>
            </View>
            <FlatList
              data={albumList}
              onRefresh={loadAlbums}
              refreshing={isLoading}
              renderItem={({ item, index }) => (
                <View>
                  <Album album={item} togglePreview={togglePreview} addToHateList={addToHateList} />
                  {index === 2 || (index > 0 && index % 7 === 0) ? (
                    <PublisherBanner
                      style={{ alignSelf: "center", paddingTop: 8 }}
                      bannerSize="banner"
                      adUnitID="ca-app-pub-1918244509555517/4039520814"
                    />
                  ) : null}
                </View>
              )}
              ListEmptyComponent={NoAlbums}
              keyExtractor={this.keyExtractor}
            />
            <View style={[style.slide, style.slide2]}>
              <Text style={[style.text, style.text2]}>{translation("nextMonth")}</Text>
            </View>
          </Swiper>
        )}
        <CoverPreview cover={coverPreview} togglePreview={togglePreview} />
        <GenreSelect
          isVisible={isGenreSelect}
          toggle={() => toggleFilter("isGenreSelect")}
          selectGenre={selectGenre}
          genreFilter={genreFilter}
        />
      </View>
    );
  }
}

export default inject("store")(observer(Content));
