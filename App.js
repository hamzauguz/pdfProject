import {View, StyleSheet} from 'react-native';
import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import htmlPlace from './src/helpers';
import PDFtoHTML from './src/pages/pdf-to-html';

const App = () => {
  const createPDF = async () => {
    try {
      let options = {
        html: htmlPlace,
        fileName: 'Kroppa',
        directory: 'Download',
      };
      let file = await RNHTMLtoPDF.convert(options);
      console.log(file.filePath);
      alert(file.filePath);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <PDFtoHTML onPress={() => createPDF()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

export default App;
