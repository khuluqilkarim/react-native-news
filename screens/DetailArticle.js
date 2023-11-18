import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
  ScrollView,
} from "react-native";
import Buttons from "../components/article/Buttons.js";
import Separator from "../components/article/Seperator.js";

const windowWidth = Dimensions.get("window").width;

class DetailArticle extends Component {
  backHomepage = () => {
    this.props.navigation.navigate("Article");
  };
  render() {
    const { route } = this.props;
    const data = route.params.data;

    return (
      <>
        <ScrollView>
          <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <Separator height={10} />
            <View style={styles.splicingContainer}>
              <Text style={styles.title}>{data.title}</Text>
              <Separator height={10} />
              <Text style={styles.date}>Diubah pada tanggal : {data.date}</Text>
              <Separator height={10} />
              <Text style={styles.content}>
                {"\u00A0\u00A0\u00A0\u00A0\u00A0"}
                {data.content}
              </Text>
              <Separator height={20} />
            </View>
            <Buttons
              text="Read More"
              onPress={() =>
                Linking.openURL(data.link).catch((err) =>
                  console.error("Error", err)
                )
              }
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  BackgroundArticle: {
    flex: 1,
  },
  image: {
    width: windowWidth - 30,
    height: 200,
    resizeMode: "stretch",
  },
  date: {
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  content: {
    fontSize: 15,
    textAlign: "justify",
    fontFamily: "serif",
  },
  splicingContainer: {
    padding: 10,
  },
  backbtn: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
});

export default DetailArticle;
