"use client";
import React from "react";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    height: 100,
    "@media (max-width: 600px)": {
      padding: 10,
    },
    "@media (min-width: 601px) and (max-width: 800px)": {
      padding: 15,
    },
    "@media (min-width: 801px)": {
      padding: 20,
    },
  },
});

export const Professional = (props) => (
  <Document style={styles.container}>
    <Page size="A4">
      <View
        style={{
          backgroundColor: "#71768e",
        }}
      >
        <Text>{props.name}</Text>
      </View>
      <View>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);
