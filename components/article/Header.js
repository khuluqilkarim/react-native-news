import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import COLORS from "../../constants/colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Discover</Text>
          <Image
            source={require("../../assets/bintang.png")}
            resizeMode="contain"
            style={styles.headerImage}
          />
        </View>
        <View style={styles.subHeaderTextContainer}>
          <Text style={styles.subHeaderText}>Find New Infomations</Text>
        </View>
      </View>
      <Text style={styles.recentArticlesText}>Recent Articles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
  },
  headerContainer: {
    marginHorizontal: 20,
    height: 150,
    width: 350,
    backgroundColor: COLORS.header,
    borderRadius: 20,
  },
  headerContent: {
    flexDirection: "row",
    marginRight: 25,
    paddingTop: 20,
    marginHorizontal: 20,
  },
  headerText: {
    fontSize: 35,
    fontWeight: "800",
    color: COLORS.white,
  },
  headerImage: {
    width: 25,
    height: 25,
    marginTop: 15,
    transform: [{ translateX: 10 }],
  },
  subHeaderTextContainer: {
    paddingTop: 0,
    marginHorizontal: 20,
  },
  subHeaderText: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: COLORS.white,
  },
  recentArticlesText: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.white,
    paddingLeft: 22,
    marginBottom: 20,
    paddingTop: 10,
  },
});

export default Header;
