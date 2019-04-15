import React from 'react';
import { View, Text } from 'react-native';
import style from '../style/Content';
import { observer, inject } from 'mobx-react';
import Loader from './Loader';
import Swiper from 'react-native-swiper';
import AlbumList from './AlbumList';
import CoverPreview from './CoverPreview';
import GenreSelect from './GenreSelect';
import translation from '../constants/translation';

class Content extends React.Component {
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
      increaseItemsLimit,
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
              <Text style={[style.text, style.text1]}>{translation('prevMonth')}</Text>
            </View>
            <View>
              <AlbumList
                albumList={albumList}
                addToHateList={addToHateList}
                loadAlbums={loadAlbums}
                increaseItemsLimit={increaseItemsLimit}
                togglePreview={togglePreview}
                isLoading={isLoading}
              />
            </View>
            <View style={[style.slide, style.slide2]}>
              <Text style={[style.text, style.text2]}>{translation('nextMonth')}</Text>
            </View>
          </Swiper>
        )}
        <CoverPreview cover={coverPreview} togglePreview={togglePreview} />

        <GenreSelect
          isVisible={isGenreSelect}
          toggle={() => toggleFilter('isGenreSelect')}
          selectGenre={selectGenre}
          genreFilter={genreFilter}
        />
      </View>
    );
  }
}

export default inject('store')(observer(Content));
