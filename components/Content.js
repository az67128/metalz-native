import React from "react";
import { FlatList, View, Text } from "react-native";
import style from "../style/Content";
import { observer, inject } from "mobx-react";
import Album from "./Album";

class TopBar extends React.Component {
  keyExtractor = (item, index) => item.album_id.toString();
  render() {
    const { albums, isLoading } = this.props.store;
    return (
      <View style={style.content}>
        {isLoading ? (
          <Text>loading</Text>
        ) : (
          <FlatList
            data={albums}
            renderItem={({ item }) => <Album album={item} />}
            keyExtractor={this.keyExtractor}
          />
        )}
      </View>
    );
  }
}

export default inject("store")(observer(TopBar));

{
  /* <View >
        {albums.map(album => (
          <Album key={album.album_id} album={album} />
        ))}
      </View> */
}
{
  /* <FlatList
          data={albums}
          renderItem={({ album }) => <Album key={album.album_id} album={album} />}
        /> */
}
