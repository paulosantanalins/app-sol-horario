import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Keyboard } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  const [cidade, setCidade] = useState('');
  const [previsoes, setPrevisoes] = useState([]);

  const capturarCidade = (cidade) => {
    setCidade(cidade);
  }

  const obterLatLong = () => {
    setPrevisoes([]);
    const target = endPointLatLon + cidade + '&appid=' + apiKey;
    fetch(target).then((dados) => {return dados.json()}).then((dados) => {
      obterNascerPorSol(dados.coord.lat, dados.coord.lon);
      Keyboard.dismiss();
    });

    
  };

  const obterNascerPorSol = (lat, long) => {
    const target = endPointPorSol + 'lat=' + lat + '&lon=' + long + '&units=metric&appid=' + apiKey;
    fetch(target).then((dados) => {return dados.json()}).then((dados) => {
      setPrevisoes(dados.daily); 
      Keyboard.dismiss();
    });
  };

  const endPointLatLon = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const endPointPorSol = 'https://api.openweathermap.org/data/2.5/onecall?';
  const apiKey = 'bc6b485675ddff278cbc75ea97b1a484';
  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
          <TextInput 
            style={styles.nomeCidade}
            placeholder="Digite o nome da cidade"
            value={cidade}
            onChangeText={capturarCidade}
          />
          <Button 
            title='OK'
            onPress={obterLatLong}
          />
      </View>
          <FlatList 
          data={previsoes}
          renderItem={
            previsao => (
              <PrevisaoItem previsao={previsao.item}/>
            )
          }
          />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#FFF'
  },
  entrada:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBotton: 8
  },
  nomeCidade:{
    padding: 12,
    borderBottomColor: '#BB96F3',
    textAlign: 'left',
    flexGrow: 0.9
  }
});
