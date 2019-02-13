import React from "react";
import { View } from "react-native";
import style from "./style/App";
import TopBar from "./components/TopBar";
import Content from "./components/Content";
import BottomBar from "./components/BottomBar";
import Store from "./store/Store";
import { Provider } from "mobx-react";

const store = Store.create({});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={style.app}>
          <TopBar />
          <Content albums={store.albums} isLoading={store.isLoading} />
          <BottomBar />
        </View>
      </Provider>
    );
  }
}
