import React from "react";
import './style.scss';
import { useHistory } from 'react-router-dom';
//import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const Results = ({
  winAllRounds,
  winTwoRounds,
  winOneRound,
  winNoRound,
  cleanState
}) => {

let history = useHistory();

const handleFinish = () => {
  console.log('finish');
  cleanState();
  history.push("/");
} 

const fileName = `Results ${new Date().toDateString()}.pdf`;

// Create styles
/* const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center'
  },
  table: { 
    display: "table", 
    width: "auto",
    margin: 10, 
  }, 
  tableRow: {  
    flexDirection: "row",
  }, 
  tableCol: { 
    width: "16%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0,
  }, 
  tableCell: { 
    margin: "auto", 
    marginTop: 5,
    marginBottom: 5, 
    fontSize: 10,
  }
}); */

  // Document to download : 
/* const MyDoc = () => {
  return (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.table}>
        <View style={styles.tableRow}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Classement</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Nom</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Score partie 1</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Score partie 2</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Score partie 3</Text> 
          </View>
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Score final</Text> 
          </View> 
        </View>
        {winAllRounds.map((player) => (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {winAllRounds.indexOf(player) + 1} </Text>
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.name} </Text>  
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.scoreRound1} - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.totalPoints} </Text>  
              </View> 
            </View>
            
          ))}
          {winTwoRounds.map((player) => (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {winTwoRounds.indexOf(player) + 1 + winAllRounds.length} </Text>
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.name} </Text>  
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.scoreRound1} - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.totalPoints} </Text>  
              </View> 
            </View>
            
          ))}

          {winOneRound.map((player) => (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {winOneRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length} </Text>
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.name} </Text>  
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.scoreRound1} - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.totalPoints} </Text>  
              </View> 
            </View>
            
          ))}

          {winNoRound.map((player) => (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {winNoRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length + winOneRound.length} </Text>
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.name} </Text>  
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.scoreRound1} - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.totalPoints} </Text>  
              </View> 
            </View>
            
          ))}
      </View>
    </Page>
  </Document>
)
      }; */

  return (
    <div className="results">
      <p> Les résultats </p>
      <table className="table">
        <thead>
          <tr>
            <td> Classement </td>
            <td> Nom </td>
            <td> score partie 1 </td>
            <td> score partie 2 </td>
            <td> score partie 3 </td>
            <td> score final </td>
          </tr>
        </thead>
        <tbody>
        {winAllRounds.map((player) => (
          <tr>
            <td> {winAllRounds.indexOf(player) + 1} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1} - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </td>
            <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </td>
            <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
      {winTwoRounds.map((player) => (
          <tr>
            <td> {winTwoRounds.indexOf(player) + 1 + winAllRounds.length} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1}  - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </td>
            <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </td>
            <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
      {winOneRound.map((player) => (
          <tr>
            <td> {winOneRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1}  - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </td>
            <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </td>
            <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
      {winNoRound.map((player) => (
          <tr>
            <td> {winNoRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length + winOneRound.length} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1}  - {player.scoreRound1 - player.pointsRound1} <small> ({player.pointsRound1}) </small> </td>
            <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsRound2} <small> ({player.pointsRound2}) </small> </td>
            <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsRound3} <small> ({player.pointsRound3}) </small> </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
        </tbody>
      </table>

      {/* <PDFDownloadLink document={<MyDoc />} fileName={fileName}>
      {({ blob, url, loading, error }) => 
        loading ? 'Loading document...' : 'Télécharger'
      }
    </PDFDownloadLink> */}

    <div>
      <button
        type="button"
        className=""
        onClick={handleFinish}
        Redirect="/"
      >
      fin  
      </button>
    </div>
    
    </div>
  );

};

export default Results;


