import { StyleSheet, Image, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box}>
        <View style={styles.pictureBox}>
          <Image style={styles.picture} source={require('./assets/rover.jpg')}/>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.title}>Title: Michael FARADAY</Text>
          <Text style={styles.description}>Description: Michael Faraday (Newington, 22 septembre 1791 - Hampton Court, 25 août 1867) est un physicien et un chimiste britannique, connu pour ses travaux fondamentaux dans le domaine de l'électromagnétisme, l'électrochimie, le diamagnétisme, et l'électrolyse. </Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  
  box: {
    height: 300,
    flexDirection: "row",
    marginTop: 10  
  },

  picture: {
    width: 250,
    borderColor: 'black',
    borderRadius: 15,
    borderWidth: 3
  },

  title: {
    margin: 10,
    color: "red",
    fontSize: 20
  },

  description: {
    margin: 10,
    color: "red",
    fontSize: 20
  },

  textBox: {
    width: 100,
  },

  pictureBox: {
    
  }
});
