/* eslint-disable react/prop-types */
import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";
import power from "../assets/navbar/power.png";
import phoneDoctor from "../assets/home/phoneDoctor.png";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: 40,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "underline",
    color: "red",
  },
  section: {
    width: "100%",
  },
  sectionDeux: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#3423",
    padding: 10,
  },
  table: {
    display: "table",
    width: "auto",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    alignItems: "center",
    height: 24,
  },
  tableHeaderCell: {
    backgroundColor: "#000",
    color: "#FFF",
    width: "25%",
    padding: 5,
  },
  tableCell: {
    width: "25%",
    padding: 5,
  },
  tableCellDeux: {
    width: "25%",
    padding: 5,
  },
  totalRow: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#000",
    borderTopStyle: "solid",
    alignItems: "center",
    height: 24,
    marginTop: 10,
    backgroundColor: "#3423",
  },
  totalCell: {
    margin: 50,
  },

  image: {
    width: 100,
  },
  signature: {
    width: 100,
    height: 100,
    marginLeft: "300px",
  },
  titleSignature: {
    fontSize: 14,
    marginBottom: 10,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "underline",
    color: "red",
  },
});

export default function PdfGenerator({ telephone, signatureImage }) {
  return (
    <div>
      <PDFDownloadLink
        document={
          <Document>
            <Page size="A4" style={styles.page}>
              <View>
                <Text style={styles.title}>Devis</Text>
                <View
                  style={{
                    height: "2px",
                    backgroundColor: "black",
                    marginBottom: 10,
                  }}
                />
                <View style={styles.section}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <Image style={styles.image} src={phoneDoctor} alt="logo" />
                    <View style={{ display: "flex", flexDirection: "column" }}>
                      <Text style={styles.subtitle}>
                        Informations de l'entreprise
                      </Text>
                      <Text style={styles.tableCell}>Emmaüs Connect</Text>
                      <Text style={styles.tableCell}> 17 Rue Delandine </Text>
                      <Text style={styles.tableCell}>69002 Lyon</Text>
                      <Text style={styles.tableCell}>09 78 45 04 38</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.sectionDeux}>
                  <Text style={styles.subtitle}>Détails du téléphone</Text>
                  <View style={styles.table}>
                    {/* En-tête du tableau */}
                    <View style={styles.tableRow}>
                      <Text>Marque</Text>
                      <Text>Modèle</Text>
                      <Text>RAM</Text>
                      <Text>Stockage</Text>
                      <Text>État</Text>
                    </View>

                    {/* Lignes du tableau */}
                    <View style={styles.tableRow}>
                      <Text>{telephone.brand}</Text>
                      <Text>{telephone.model}</Text>
                      <Text>{telephone.ram}</Text>
                      <Text>{telephone.storage}</Text>
                      <Text>{telephone.state}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.totalRow}>
                  <Text style={styles.totalCell}>Montant total TTC :</Text>
                  <Text style={styles.totalCell}>800 €</Text>
                </View>
              </View>
              <Text style={styles.titleSignature}>Signature :</Text>
              <View style={styles.signature}>
                <Image src={signatureImage} style={styles.signatureImage} />
              </View>
            </Page>
          </Document>
        }
        fileName={`${telephone.brand}.pdf`}
      >
        <img alt="" src={power} size="Small" />
      </PDFDownloadLink>
    </div>
  );
}
