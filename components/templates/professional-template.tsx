"use client";
import React from "react";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Poppins",
  src: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap",
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFA07A",
  },
  flex: {
    display: "flex",
  },
});

export const Professional = (props) => (
  <Document style={{ height: "400px" }}>
    <Page
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#ECECEC",
      }}
    >
      <View
        style={{
          width: "40%",
          height: "100%",
          display: "flex",
        }}
      >
        <View style={{ height: "50%" }}>
          <Image
            src="pedro_pic.jpg"
            style={{ height: "100%", maxWidth: "100%", objectFit: "cover" }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#3A41E4",
            height: "50%",
            display: "flex",
            color: "white",
            padding: "20px 40px",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          >
            Contato
          </Text>
          <Text
            style={{
              fontSize: "8px",
              textAlign: "justify",
              lineHeight: "2px",
            }}
          >
            Endereço do Escritório: Rua Qualquer, 123, Cidade, Estado, País -
            12345-000 Portfólio: www.sitebacana.com.br LinkedIn: @sitebacana
          </Text>
          <Text style={{ fontSize: "8px", lineHeight: "2px" }}>
            E-mail: alo@sitebacana.com.br
          </Text>
          <Text style={{ fontSize: "8px", lineHeight: "2px" }}>
            Portfólio: www.sitebacana.com.br
          </Text>
        </View>
      </View>

      <View
        style={{
          padding: "20px 40px",
          width: "240px",
          display: "flex",
          gap: "20px",
        }}
      >
        <Text style={{ fontSize: "40px", fontWeight: "bold" }}>
          Pedro Ferreira
        </Text>

        <View>
          <Text style={{ fontSize: "15px" }}>Analista de Sistemas</Text>

          <View
            style={{
              height: "1px",
              backgroundColor: "gray",
              margin: "10px 0",
            }}
          ></View>
        </View>

        <View style={{ width: "240px" }}>
          <Text
            style={{
              fontSize: "15px",
              fontWeight: "bold",

              paddingBottom: "10px",
            }}
          >
            Resumo
          </Text>

          <Text style={{ fontSize: "8px", lineHeight: "1.5px" }}>
            Analista de sistemas orientado por resultados, com excelentes
            habilidades de comunicação, além de profundo conhecimento de
            sistemas digitais e processos da cadeia de suprimentos.
          </Text>
        </View>

        <View style={{ width: "240px", fontSize: "15px" }}>
          <Text style={{ paddingBottom: "10px" }}>Historico de Trabalho</Text>

          <View style={{ fontSize: "12px", lineHeight: "1.5px" }}>
            <Text style={{ fontSize: "10px", marginBottom: "2px" }}>
              Analista de Sistemas
            </Text>
            <Text style={{ fontSize: "8px", marginBottom: "10px" }}>
              Dowblooms Ltda. Junho de 2018 - presente
            </Text>
            <Text style={{ fontSize: "8px", lineHeight: "1.5px" }}>
              Estudo de sistemas organizacionais dos clientes Tradução de
              requisitos de negócios em projetos funcionais Treinamento de
              funcionários e usuários em vários softwares
            </Text>
          </View>
        </View>

        <View style={{ width: "240px", fontSize: "15px" }}>
          <Text style={{ paddingBottom: "10px" }}>Historico Academico</Text>

          <View style={{ fontSize: "12px", lineHeight: "1.5px" }}>
            <Text style={{ fontSize: "10px", marginBottom: "2px" }}>
              Analista de Sistemas
            </Text>
            <Text style={{ fontSize: "8px", marginBottom: "10px" }}>
              Dowblooms Ltda. Junho de 2018 - presente
            </Text>
            <Text style={{ fontSize: "8px", lineHeight: "1.5px" }}>
              Estudo de sistemas organizacionais dos clientes Tradução de
              requisitos de negócios em projetos funcionais Treinamento de
              funcionários e usuários em vários softwares
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);
