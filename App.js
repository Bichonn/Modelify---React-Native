import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Pressable, Image } from 'react-native';
import * as Haptics from 'expo-haptics';

const Projects = [
  {
    id: 1,
    title: 'Pot de fleurs',
    description: 'un petit pot de fleurs bleu rond',
    use: 'décoration',
    budget: 15,
    image: require('./assets/Project-Images/pot-fleur-bleu-rond.png'),
  },
  {
    id: 2,
    title: 'Support téléphone',
    description: 'un support téléphone en bois',
    use: 'commercial',
    budget: 45,
    image: require('./assets/Project-Images/support-smartphone-wood.png'),
  },
  {
    id: 3,
    title: 'Maquette maison',
    description: 'une maquette de maison pour projet 3D',
    use: 'pédagogique',
    budget: 30,
    image: require('./assets/Project-Images/maquette-home.png'),
  },
];

export default function App() {
  const [showImage, setShowImage] = useState(null);

  return (
    <View style={styles.container}>
      <Text>Welcome to</Text>
      <Text style={styles.Title}>Modelify</Text>
      <FlatList
        data={Projects} 
        keyExtractor={(item) => item.id.toString()} 
        renderItem={({ item }) => (
          <Pressable onPress={() => { 
            setShowImage(showImage === item.image ? null : item.image),
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            console.log('Project selected:', item.title);
          }}>
            <View style={styles.ElementlistProject}>
              <Text style={styles.ProjectTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
              <Text style={styles.ProjectUse}>{item.use}</Text>
              <Text>{item.budget} €</Text>

              {showImage === item.image && ( <Image source={item.image} style={styles.ProjectImage} />)}
            </View>
          </Pressable>
        )} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Title: {
    marginTop: 30,
    fontSize: 32,
    fontWeight: 'bold',
  },
  listProject: {
    marginTop: 30,
    width: '80%',
  },
  ElementlistProject: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  ProjectTitle: {
    fontWeight: 'bold',
  },
  ProjectUse: {
    fontStyle: 'italic',
    color: 'gray',
  },
  ProjectImage: {
    width: 100,
    height: 100,
    marginTop: 10,
  },


});
