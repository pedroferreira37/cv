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
        <Text style={styles.heading}>{props?.profile?.name || ""}</Text>
        <Text style={styles.subHeading}>{props?.profile?.role || ""}</Text>
        <Text style={styles.text}>{props?.profile?.mail || ""}</Text>
        <Text style={styles.text}>{props?.profile?.linkedin || ""}</Text>
        <Text style={styles.text}>{props?.profile?.github || ""}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Sobre Mim</Text>
        <Text style={styles.text}>{props?.profile?.about || ""}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Experiência</Text>
        {props.experiences.map((experience) => (
          <View key={experience.id}>
            <Text style={styles.subHeading}>{experience.role || ""}</Text>
            <Text style={styles.text}>{experience.company || ""}</Text>
            <Text style={styles.text}>
              {`${experience.start_year || ""}  -  ${
                months.find(({ value }) => value === experience.start_month)
                  ?.label || ""
              } , `}

              {experience.current
                ? "Atualmente"
                : `${experience.end_year || ""} - ${
                    experience.end_month
                      ? months.find(
                          ({ value }) => value === experience.end_month
                        )?.label || ""
                      : ""
                  } `}
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
          <View key={education.id}>
            <Text style={styles.subHeading}>{education.degree || ""}</Text>
            <Text style={styles.text}>{education.institution || ""}</Text>
            <Text style={styles.text}>
              {`${education.start_year || ""} - ${
                months.find(({ value }) => value === education.start_month)
                  ?.label || ""
              },`}

              {education.current
                ? "Atualmente"
                : `${education.end_year || ""}  ${education.end_month || ""}`}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
