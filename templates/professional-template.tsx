"use client";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export function Professional({ props }) {
  return (
    <>
      <Document>
        <Page style={{ padding: 40 }} size="A4">
          <View
            style={{
              backgroundColor: "#F9F9F9",
              height: 176,
              width: 595,
              position: "absolute",
              top: 0,
              left: 0,
            }}
          ></View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ width: "60%" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: "26px",
                  marginBottom: "14px",
                }}
              >
                {props.profile.name}
              </Text>
              <Text
                style={{
                  fontSize: "16px",
                  color: "#0E6CC2",
                  marginBottom: "20px",
                }}
              >
                {props.profile.role}
              </Text>
              <Text style={{ fontSize: "10px" }}>
                {props.profile.description}
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "40%",
                paddingLeft: "40px",
              }}
            >
              <View>
                <View style={{ paddingBottom: "8px" }}>
                  <Text style={{ fontSize: "10px", color: "#8B8B8B" }}>
                    Email
                  </Text>
                  <Text style={{ fontSize: "10px", color: "#222222" }}>
                    {props.profile.email}
                  </Text>
                </View>

                <View style={{ paddingBottom: "8px" }}>
                  <Text style={{ fontSize: "10px", color: "#8B8B8B" }}>
                    Linkedin
                  </Text>
                  <Text style={{ fontSize: "10px", color: "#222222" }}>
                    {props.profile.linkedin}
                  </Text>
                </View>

                <View style={{ paddingBottom: "8px" }}>
                  <Text style={{ fontSize: "10px", color: "#8B8B8B" }}>
                    Github
                  </Text>
                  <Text style={{ fontSize: "10px", color: "#222222" }}>
                    {props.profile.github}
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={{ paddingTop: "60px", marginTop: "60px" }}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View style={{ width: "50%", marginRight: "24px " }}>
                  <Text style={{ color: "#0E6CC2", fontSize: "14px" }}>
                    Work experience
                  </Text>

                  {props.experiences.map((experience) => {
                    return (
                      <>
                        <View style={{ padding: "20px 0 20px 0" }}>
                          <View>
                            <Text
                              style={{
                                color: "#222222",
                                fontSize: "14px",
                                fontWeight: "bold",
                              }}
                            >
                              {experience.role}
                            </Text>
                            <Text
                              style={{
                                color: "#797979",
                                fontSize: "14px",
                                fontWeight: "bold",
                              }}
                            >
                              {experience.company}, {experience.startDate.year}
                            </Text>

                            <Text
                              style={{
                                color: "#222222",
                                fontSize: "10px",
                                fontWeight: "bold",
                                paddingTop: "8px",
                              }}
                            >
                              {experience.description}
                            </Text>
                          </View>
                        </View>
                      </>
                    );
                  })}
                </View>

                <View style={{ width: "50%", marginLeft: "24px " }}>
                  <Text style={{ color: "#0E6CC2", fontSize: "14px" }}>
                    Educacao
                  </Text>
                  {props.educations.map((education) => {
                    return (
                      <>
                        <View style={{ padding: "20px 0 20px 0" }}>
                          <View>
                            <Text
                              style={{
                                color: "#222222",
                                fontSize: "14px",
                                fontWeight: "bold",
                              }}
                            >
                              {education.degree}
                            </Text>
                            <Text
                              style={{
                                color: "#797979",
                                fontSize: "14px",
                                fontWeight: "bold",
                              }}
                            >
                              {education.instituon}, {education.startDate.year}{" "}
                              - {education.startDate.month}
                            </Text>
                          </View>
                        </View>
                      </>
                    );
                  })}
                </View>
              </View>
              <View></View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
}
