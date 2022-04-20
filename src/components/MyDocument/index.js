import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';

const MyDoc = () => (
  <Document>
    <Page>
      <View>
        <Text>Text #1</Text>
      </View>
      <View>
        <Text>Text #2</Text>
      </View>
    </Page>
  </Document>
);

export default function MyDocument() {
  return (
    <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
      {({ blob, url, loading, error }) => 
        loading ? 'Loading document...' : 'Download now!'
      }
    </PDFDownloadLink>
  )
}