import {View, StyleSheet, Alert} from 'react-native';
import React from 'react';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import htmlPlace from './src/helpers';
import PDFtoHTML from './src/pages/pdf-to-html';
import FileViewer from 'react-native-file-viewer';

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
      Alert.alert(
        'Successfully Exported',
        'Path:' + file.filePath,
        [
          {text: 'Cancel', style: 'cancel'},
          {text: 'Open', onPress: () => openFile(file.filePath)},
        ],
        {cancelable: true},
      );
    } catch (error) {
      console.log(error);
    }
  };

  const openFile = filepath => {
    const path = filepath; // absolute-path-to-my-local-file.
    FileViewer.open(path)
      .then(() => {
        // success
      })
      .catch(error => {
        // error
      });
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
