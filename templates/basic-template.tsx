"use client";

import { months } from "@/lib/date";
import { Resume } from "@/lib/reducer";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: 30,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subHeading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

export const Basic = (props: Resume) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{props.name}</Text>
        <Text style={styles.subHeading}>{props.role}</Text>
        <Text style={styles.text}>{props.mail}</Text>
        <Text style={styles.text}>{props.linkedin}</Text>
        <Text style={styles.text}>{props.github}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Sobre Mim</Text>
        <Text style={styles.text}>{props.about}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Experiência</Text>
        {props.experiences.map((experience) => (
          <View key={experience.id} style={styles.subSection}>
            <Text style={styles.subHeading}>{experience.role}</Text>
            <Text style={styles.text}>{experience.company}</Text>
            <Text style={styles.text}>
              {experience.start_date.getFullYear()},{" "}
              {months[experience.start_date.getMonth()]} -{" "}
              {experience.current
                ? "Atual"
                : experience.end_date && (
                    <>
                      {experience.end_date.getFullYear()},{" "}
                      {months[experience.end_date.getMonth()]}{" "}
                    </>
                  )}
            </Text>
            <Text style={{ ...styles.text, marginBottom: 20 }}>
              {experience.description}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Educação</Text>
        {props.educations.map((education) => (
          <View key={education.id} style={styles.subSection}>
            <Text style={styles.subHeading}>{education.degree}</Text>
            <Text style={styles.text}>{education.institution}</Text>
            <Text style={styles.text}>
              {education.start_date.getFullYear()},{" "}
              {months[education.start_date.getMonth()]} -{" "}
              {education.current
                ? "Atual"
                : education.end_date && (
                    <>
                      {education.end_date.getFullYear()},{" "}
                      {months[education.end_date.getMonth()]}{" "}
                    </>
                  )}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
