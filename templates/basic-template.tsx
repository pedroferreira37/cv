"use client";

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

export const Basic = (props) => (
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
              {experience.start_date && experience.start_date.getFullYear()} -
              {experience.current
                ? "Atual"
                : experience.end_date && experience.end_date.getFullYear()}
            </Text>
            <Text style={styles.text}>{experience.description}</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Educação</Text>
        {props.education.map((education) => (
          <View key={education.id} style={styles.subSection}>
            <Text style={styles.subHeading}>{education.degree}</Text>
            <Text style={styles.text}>{education.institution}</Text>
            <Text style={styles.text}>
              {education.startDate} - {education.endDate}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
