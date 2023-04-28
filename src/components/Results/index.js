import React from "react";
import './style.scss';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
//import Nav from '../../containers/Nav';

const Results = ({
  winAllRounds,
  winTwoRounds,
  winOneRound,
  winNoRound,
  date,
  dateIsActive,
  cleanState,
}) => {

// Create styles
const styles = StyleSheet.create({
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
}); 

let dateParsed = new Date(Date.parse(date));

const formatter = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

let fileName = `Résultats du ${date ? formatter.format(dateParsed) : formatter.format(new Date())}.pdf`;

const handleEndGame = (e) => {
  if (window.confirm('Etes vous sur de vouloir terminer la partie ? Cela va effacer les données du jeu et téléchargera un fichier PDF avec les résultats.')) {
    setTimeout(() => {
      cleanState();
      dateIsActive();
    }, 2000);
  } 
}

  // Document to download : 
const MyDoc = () => {
  return (
  <Document>
    <Page size="A4" orientation="landscape" style={styles.page}>
      <View style={styles.table}>
      <Text style={styles.title}>Résultats du {date ? formatter.format(dateParsed) : formatter.format(new Date())}</Text>
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
            <View style={styles.tableRow} key={player.id}>
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {winAllRounds.indexOf(player) + 1} </Text>
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.name} </Text>  
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.scoreRound1} - {player.scoreRound1 - player.pointsround1} <small> ({player.pointsround1}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound2} - {player.scoreRound2 - player.pointsround2} <small> ({player.pointsround2}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound3} - {player.scoreRound3 - player.pointsround3} <small> ({player.pointsround3}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.totalPoints} </Text>  
              </View> 
            </View>
            
          ))}
          {winTwoRounds.map((player) => (
            <View style={styles.tableRow} key={player.id}>
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {winTwoRounds.indexOf(player) + 1 + winAllRounds.length} </Text>
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.name} </Text>  
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.scoreRound1} - {player.scoreRound1 - player.pointsround1} <small> ({player.pointsround1}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound2} - {player.scoreRound2 - player.pointsround2} <small> ({player.pointsround2}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound3} - {player.scoreRound3 - player.pointsround3} <small> ({player.pointsround3}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.totalPoints} </Text>  
              </View> 
            </View>
            
          ))}

          {winOneRound.map((player) => (
            <View style={styles.tableRow} key={player.id}>
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {winOneRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length} </Text>
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.name} </Text>  
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.scoreRound1} - {player.scoreRound1 - player.pointsround1} <small> ({player.pointsround1}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound2} - {player.scoreRound2 - player.pointsround2} <small> ({player.pointsround2}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound3} - {player.scoreRound3 - player.pointsround3} <small> ({player.pointsround3}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.totalPoints} </Text>  
              </View> 
            </View>
            
          ))}

          {winNoRound.map((player) => (
            <View style={styles.tableRow} key={player.id}>
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {winNoRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length + winOneRound.length} </Text>
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.name} </Text>  
              </View> 
              <View style={styles.tableCol}>  
                <Text style={styles.tableCell}> {player.scoreRound1} - {player.scoreRound1 - player.pointsround1} <small> ({player.pointsround1}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound2} - {player.scoreRound2 - player.pointsround2} <small> ({player.pointsround2}) </small> </Text>  
              </View> 
              <View style={styles.tableCol}> 
                <Text style={styles.tableCell}> {player.scoreRound3} - {player.scoreRound3 - player.pointsround3} <small> ({player.pointsround3}) </small> </Text>  
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
      }; 

  return (
    <div className="results">

      <table className="results-table">
        <thead className="results-table-head">
          <tr className="results-table-head-row">
            <td> Classement </td>
            <td> Nom </td>
            <td> score partie 1 </td>
            <td> score partie 2 </td>
            <td> score partie 3 </td>
            <td> score final </td>
          </tr>
        </thead>
        <tbody className="results-table-body">
        {winAllRounds.map((player) => (
          <tr className="results-table-body-player" key={player.id}>
            <td> {winAllRounds.indexOf(player) + 1} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1} - {player.scoreRound1 - player.pointsround1} <small> ({player.pointsround1}) </small> </td>
            <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsround2} <small> ({player.pointsround2}) </small> </td>
            <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsround3} <small> ({player.pointsround3}) </small> </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
      </tbody>
      <tbody className="results-table-body">
      {winTwoRounds.map((player) => (
          <tr className="results-table-body-player" key={player.id}>
            <td> {winTwoRounds.indexOf(player) + 1 + winAllRounds.length} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1}  - {player.scoreRound1 - player.pointsround1} <small> ({player.pointsround1}) </small> </td>
            <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsround2} <small> ({player.pointsround2}) </small> </td>
            <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsround3} <small> ({player.pointsround3}) </small> </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
      </tbody>
      <tbody className="results-table-body">
      {winOneRound.map((player) => (
          <tr className="results-table-body-player" key={player.id}>
            <td> {winOneRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1}  - {player.scoreRound1 - player.pointsround1} <small> ({player.pointsround1}) </small> </td>
            <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsround2} <small> ({player.pointsround2}) </small> </td>
            <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsround3} <small> ({player.pointsround3}) </small> </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
      </tbody>
      <tbody className="results-table-body">
      {winNoRound.map((player) => (
          <tr className="results-table-body-player" key={player.id}>
            <td> {winNoRound.indexOf(player) + 1 + winAllRounds.length + winTwoRounds.length + winOneRound.length} </td>
            <td> {player.name} </td>
            <td> {player.scoreRound1}  - {player.scoreRound1 - player.pointsround1} <small> ({player.pointsround1}) </small> </td>
            <td> {player.scoreRound2} - {player.scoreRound2 - player.pointsround2} <small> ({player.pointsround2}) </small> </td>
            <td> {player.scoreRound3} - {player.scoreRound3 - player.pointsround3} <small> ({player.pointsround3}) </small> </td>
            <td> {player.totalPoints} </td>
          </tr>
        
      ))}
        </tbody>
      </table>

      <button className="results-button-dl" onClick={handleEndGame}>
        <PDFDownloadLink document={<MyDoc />} fileName={fileName} className="results-button-dl-link" >
          {({ blob, url, loading, error }) => 
            loading ? 'Loading document...' : 'Fin de la partie'
          }
        </PDFDownloadLink>
      </button>
    
    </div>
  );
};

export default Results;


