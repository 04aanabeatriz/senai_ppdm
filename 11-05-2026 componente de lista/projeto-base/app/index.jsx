import { Text, View, SafeAreaView, FlatList, StyleSheet, Image } from "react-native";
import Header from './components/Header';
import tarefas from './dados/tarefas';

function ItemTarefa({ Item }) {
  return (
    <View style={estilos.card}>
      <Image source={Item.photo} style={estilos.foto} />

      <Text style={estilos.titulo}>
        {Item.title}
      </Text>

      <Text style={estilos.status}>
        {Item.status}
      </Text>

      <Text style={estilos.descricao}>
        {Item.description}
      </Text>
    </View>
  );
}

export default function Index() {
  return (
    <SafeAreaView style={estilos.container}>
      <Header titulo='Sesi Produtividade' />

      <FlatList
        data={tarefas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ItemTarefa Item={item} />}
      />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },

  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },

  foto: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },

  status: {
    color: 'green',
    marginTop: 5,
  },

  descricao: {
    marginTop: 5,
    color: '#555',
  },
});