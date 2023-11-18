import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

class Buttons extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e31e00",
    padding: 20,
    alignItems: "center",
    borderRadius: 130,
    elevation: 5,
  },
  text: {
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});

export default Buttons;
