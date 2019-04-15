import React from 'react';
import { View, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import Album from './Album';
import { PublisherBanner } from 'expo';
import NoAlbums from './NoAlbums';
import SearchBar from './SearchBar';

class AlbumList extends React.Component {
  keyExtractor = (item, index) => item.album_id.toString();

  render() {
    const {
      albumList,
      addToHateList,
      loadAlbums,
      increaseItemsLimit,
      togglePreview,
      isLoading,
    } = this.props;

    return (
      <FlatList
        data={[{ album_id: 'search' }, ...albumList]}
        onRefresh={loadAlbums}
        onEndReached={increaseItemsLimit}
        onEndReachedThreshold={3}
        refreshing={isLoading}
        renderItem={({ item, index }) =>
          index === 0 ? (
            <SearchBar />
          ) : (
            <View>
              <Album album={item} togglePreview={togglePreview} addToHateList={addToHateList} />
              {index === 2 || (index > 0 && index % 7 === 0) ? (
                <PublisherBanner
                  style={{ alignSelf: 'center', paddingTop: 8 }}
                  bannerSize="banner"
                  adUnitID="ca-app-pub-1918244509555517/4039520814"
                />
              ) : null}
            </View>
          )
        }
        ListEmptyComponent={NoAlbums}
        keyExtractor={this.keyExtractor}
      />
    );
  }
}

export default observer(AlbumList);
