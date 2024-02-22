import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { useSelector } from "react-redux";

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
  header: {
    textAlign: "left",
    fontWeight: "extrabold", // Menggunakan "bold" sebagai nilai fontWeight
    fontSize: 25,
    width: 10,
    fontFamily: "Helvetica-Bold", 
  },
  subHeader: {
    textAlign: "left",
    fontSize: 10.5,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,

  },
  titles : {
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    borderTopWidth: 5, // Tambahkan garis bawah
    borderTopColor: "black",
  },
  content: {
    flexDirection: "row",
    marginBottom: 5,
    fontSize:15
  },
  label: {
    width: 100,
    marginRight: 10,
    fontWeight: "bold",
  },
  value: {
    flex: 1,
  },
  signatureContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
  },
  signature: {
    width: "40%",
    textAlign: "center",
    borderTop: "1 solid black",
    paddingTop: 5,
  },
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Kupin</Text>
        <Text style={styles.subHeader}>pinjam di kupin</Text>
        <Text style={styles.titles}></Text>
        <Text style={styles.title}>Surat Perintah Jalan</Text>
        {data.map((res) => (
          <View key={res.nama} style={styles.content}>
            <Text style={styles.label}>Peminjam:</Text>
            <Text style={styles.value}>{res.peminjam[0].username}a</Text>
          </View>
        ))}
        {data.map((res) => (
          <View key={res.nama} style={styles.content}>
            <Text style={styles.label}>Waktu:</Text>
            <Text style={styles.value}>
              {res.request_data[0].waktu_jam}
                |  
              {res.request_data[0].waktu_tanggal}
            </Text>
          </View>
        ))}
        {data.map((res) => (
          <View key={res.nama} style={styles.content}>
            <Text style={styles.label}>Keperluan:</Text>
            <Text style={styles.value}>{res.request_data[0].keperluan}</Text>
          </View>
        ))}
        {data.map((res) => (
          <View key={res.nama} style={styles.content}>
            <Text style={styles.label}>Pengemudi:</Text>
            <Text style={styles.value}>{res.pengemudi_data[0].username}</Text>
          </View>
        ))}
        {data.map((res) => (
          <View key={res.nama} style={styles.content}>
            <Text style={styles.label}>Aset Kendaraan:</Text>
            <Text style={styles.value}>{res.asset_data[0].nama_kendaraan}</Text>
          </View>
        ))}
        {data.map((res) => (
          <View key={res.nama} style={styles.content}>
            <Text style={styles.label}>BBM:</Text>
            <Text style={styles.value}>
{/* 
              {res.bbm !== null ? parseInt(res.bbm).toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              }):"kosong"} */}
            </Text>
          </View>
        ))}
        <View style={styles.signatureContainer}>
          <Text style={styles.signature}>Pengemudi,</Text>
          <Text style={styles.signature}>Peminjam,</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export const ExportpdfSpj = () => {
  // const data = useSelector((state) => state.exportsData.data);
  const data = JSON.parse(localStorage.getItem("exportDataSpj"));

  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      {data ? <MyDocument data={data} /> : <Text>Loading...</Text>}
    </PDFViewer>
  );
};
