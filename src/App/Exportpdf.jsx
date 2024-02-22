import React, { useEffect } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";
import { ExportData } from "./Store/ExportData";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 10,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  table: {
    display: "table",
    width: "auto",
    fontSize: "12px",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHead: {
    flexDirection: "row",

    backgroundColor: "orange",
    color: "white",
  },

  tableCol: {
    width: "16.66%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    fontSize: 10,
    padding: 5,
  },
  flex: {
    flexWrap: "wrap",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 10,
    bottom: 10,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    borderTopWidth: 5, // Tambahkan garis bawah
    borderTopColor: "black", // Warna garis bawah
  },
  header: {
    textAlign: "left",
    fontWeight: "extrabold", // Menggunakan "bold" sebagai nilai fontWeight
    fontSize: 25,
    width: 10,
    fontFamily: "Helvetica-Bold", // Set font family to Helvetica-Bold
  },
  subHeader: {
    textAlign: "left",
    fontSize: 10.5,
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Kupin</Text>
        <Text style={styles.subHeader}>pinjam di kupin</Text>
        <Text style={styles.title}></Text>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          DATA PINJAMAN ASET
        </Text>
        <View style={styles.table}>
          <View style={styles.tableHead}>
            <View style={styles.tableCol}>
              <Text>Peminjam</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>Tanggal waktu</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>Keperluan</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>Pengemudi</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>Aset kendaraan</Text>
            </View>
            <View style={styles.tableCol}>
              <Text>BBM</Text>
            </View>
          </View>
          {data.map((res) => {
            return (
              <>
                <View key={res.nama} style={styles.tableRow}>
                  <View style={styles.tableCol}>
                    <Text>{res.peminjam[0].username}</Text>
                  </View>
                  <View
                    style={{
                      width: "16.66%",
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                      padding: 5,
                      flexWrap: "nowrap",
                    }}
                  >
                    <Text style={{ flexWrap: "nowrap", fontSize: 10 }}>
                      PT: {res.permintaan[0].waktu_tanggal}
                    </Text>
                    <Text style={{ flexWrap: "nowrap", fontSize: 10 }}>
                      PJ: {res.permintaan[0].waktu_jam}
                    </Text>
                    <Text style={{ flexWrap: "nowrap", fontSize: 10 }}>
                      KT: {res.waktu_tanggal_kembali}
                    </Text>
                    <Text style={{ flexWrap: "nowrap", fontSize: 10 }}>
                      KJ: {res.jam_kembali}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: "16.66%",
                      borderStyle: "solid",
                      borderWidth: 1,
                      borderLeftWidth: 0,
                      borderTopWidth: 0,
                      fontSize: 10,
                      padding: 5,
                    }}
                  >
                    <Text> {res.permintaan[0].keperluan}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>{res.pengemudi[0].username}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>{res.asset[0].nama_kendaraan}</Text>
                  </View>
                  <View style={styles.tableCol}>
                    <Text>
                      {parseInt(res.bbm).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </Text>
                  </View>
                </View>
              </>
            );
          })}
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </View>
    </Page>
  </Document>
);

export const Exportpdf = () => {
  const data = JSON.parse(localStorage.getItem("exportData"));
  // useEffect(() => {
  //   return () => {
  //     localStorage.removeItem("exportData");
  //   };
  // }, []);
  // if (data) {
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <MyDocument data={data} />
    </PDFViewer>
  );
  // }else{
  //   return (
  //     <div>No data fetch</div>
  //       );

  // }
};
