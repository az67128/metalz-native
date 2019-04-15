import React from 'react';
import { View, TextInput } from 'react-native';
import { observer, inject } from 'mobx-react';
import style from '../style/SearchBar';
import SearchIcon from '../assets/SearchIcon';

const SearchBar = ({ searchString, changeSearchString }) => {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        value={searchString}
        placeholder="Search"
        selectTextOnFocus
        onChangeText={changeSearchString}
      />
      <SearchIcon style={style.icon} />
    </View>
  );
};

export default inject(({ store }) => ({
  searchString: store.searchString,
  changeSearchString: store.changeSearchString,
}))(observer(SearchBar));
