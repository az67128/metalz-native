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

class TopBar extends React.Component {
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
              <Text style={[style.text, style.text1]}>Previous month</Text>
            </View>
            <FlatList
              data={albumList}
              onRefresh={loadAlbums}
              refreshing={isLoading}
              renderItem={({ item }) => (
                <Album album={item} togglePreview={togglePreview} addToHateList={addToHateList} />
              )}
              ListEmptyComponent={NoAlbums}
              keyExtractor={this.keyExtractor}
            />
            <View style={[style.slide, style.slide2]}>
              <Text style={[style.text, style.text2]}>Next month</Text>
            </View>
          </Swiper>
        )}
        <CoverPreview cover={coverPreview} togglePreview={togglePreview} />
        <GenreSelect
          isVisible={isGenreSelect}
          toggle={() => toggleFilter("isGenreSelect")}
          selectGenre={selectGenre}
        />
      </View>
    );
  }
}

export default inject("store")(observer(TopBar));
