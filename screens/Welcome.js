import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../constants/colors";
import Button from "../components/Welcome/Button";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[COLORS.primary, COLORS.primary]}
    >
      <View style={{ flex: 1 }}>
        <View>
          <Image
            source={require("../assets/profile.png")}
            resizeMode="contain"
            style={styles.profile}
          />
          <Image
            source={require("../assets/kotak-hijau.png")}
            style={styles.kotak_hijau1}
          />
          <Image
            source={require("../assets/informatika.png")}
            resizeMode="contain"
            style={styles.informatika}
          />
          <Image
            source={require("../assets/avatar.png")}
            resizeMode="contain"
            style={styles.avatar}
          />
          <Image
            source={require("../assets/kotak-kuning.png")}
            resizeMode="contain"
            style={styles.kotak_kuning1}
          />
          <Image
            source={require("../assets/kotak-kuning.png")}
            resizeMode="contain"
            style={styles.kotak_kuning2}
          />
          <Image
            source={require("../assets/kotak-hijau.png")}
            resizeMode="contain"
            style={styles.kotak_hijau2}
          />
          <Image
            source={require("../assets/kotak-hijau.png")}
            resizeMode="contain"
            style={styles.kotak_hijau3}
          />
        </View>
        {/* content */}
        <View style={styles.content}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: COLORS.secondary,
            }}
          >
            I'm
          </Text>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 800,
              color: COLORS.white,
            }}
          >
            M Khuluqil Karim
          </Text>
          <View style={{ paddingTop: 10, paddingBottom: 20 }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
                marginVertical: 4,
              }}
            >
              I am a student at
              <Text style={{ color: COLORS.yellow }}>
                {" "}
                IT Telkom Surabaya
              </Text>{" "}
              ,
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.white,
              }}
            >
              informatics study program with nim 1203210020.
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 25,
              }}
            >
              <Image
                source={require("../assets/logo-linkdin.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 20,
                }}
              />
              <Image
                source={require("../assets/logo-gh.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 20,
                }}
              />
              <Image
                source={require("../assets/logo-ig.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  marginRight: 20,
                }}
              />
            </View>
          </View>
          <Button
            title="Let's Get Started"
            onPress={() => navigation.navigate("Article")}
            style={{
              marginTop: 22,
              width: "100%",
            }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  profile: {
    width: 300,
    height: 300,
    position: "absolute",
    borderRadius: 20,
    top: 0,
    transform: [{ translateX: 50 }, { translateY: 100 }],
  },
  kotak_hijau1: {
    height: 400,
    width: 400,
    position: "absolute",
    top: 0,
    transform: [{ translateX: 50 }, { translateY: -120 }, { rotate: "-8deg" }],
  },
  informatika: {
    width: 400,
    height: 90,
    position: "absolute",
    top: 0,
    transform: [{ translateX: 65 }, { translateY: 40 }],
  },
  avatar: {
    width: 300,
    height: 300,
    position: "absolute",
    borderRadius: 20,
    top: 0,
    transform: [{ translateX: 50 }, { translateY: 100 }],
  },
  kotak_kuning1: {
    width: 190,
    height: 190,
    position: "absolute",
    borderRadius: 20,
    top: 0,
    transform: [{ translateX: 50 }, { translateY: 630 }, { rotate: "220deg" }],
  },
  kotak_kuning2: {
    width: 150,
    height: 150,
    position: "absolute",
    borderRadius: 20,
    top: 0,
    transform: [{ translateX: 200 }, { translateY: 400 }, { rotate: "120deg" }],
  },
  kotak_hijau2: {
    width: 150,
    height: 150,
    position: "absolute",
    borderRadius: 20,
    top: 0,
    transform: [{ translateX: 50 }, { translateY: 500 }, { rotate: "160deg" }],
  },
  kotak_hijau3: {
    width: 150,
    height: 150,
    position: "absolute",
    borderRadius: 20,
    top: 0,
    transform: [{ translateX: 300 }, { translateY: 500 }, { rotate: "10deg" }],
  },
  content: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 400,
    width: "100%",
    paddingTop: 30,
  },
});

export default Welcome;
