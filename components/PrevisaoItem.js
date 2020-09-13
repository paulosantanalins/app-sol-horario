import React from 'react';
import {
    View, Text, StyleSheet, Image
}from  'react-native';
import Cartao from './Cartao';


const PrevisaoItem = (props) => {

    const nascerSol = new Date(props.previsao.sunrise * 1000).toLocaleTimeString().slice(0, -3);
    const porSol = new Date(props.previsao.sunset * 1000).toLocaleTimeString().slice(0, -3);

    const feelsLike = props.previsao.feels_like;
    return(
    
    
    <Cartao estilos={estilos.cartao}>
        <View style={estilos.tela}>
            <View>
                <View style={estilos.primeiraLinha}>
                    <Text>{new Date(props.previsao.dt * 1000).toLocaleDateString()}</Text>
                </View>

                <View style={estilos.segundaLinha}>
                    <Image
                        style={estilos.imagemSegundaLinha}
                        source={{uri: 'https://openweathermap.org/img/wn/' + '01d' + '.png'}}
                    />
                    <Text style={estilos.valor}>{nascerSol}</Text>
                    <Image
                        style={estilos.imagemSegundaLinha}
                        source={{uri: 'https://openweathermap.org/img/wn/' + '02d' + '.png'}}
                    />
                    <Text style={estilos.valor}>{porSol} </Text>
                </View>

                <View style={estilos.terceiraLinha}>
                    <Image
                        style={estilos.feelLike}
                        source={require('../assets/feels_like.png')}
                    />
                    <Image
                        style={estilos.imagemSegundaLinha}
                        source={{uri: 'https://openweathermap.org/img/wn/' + '01d' + '.png'}}
                    />
                    <Text style={estilos.valor}>{feelsLike.day + '\u00B0'}</Text>
                    <Image
                        style={estilos.imagemSegundaLinha}
                        source={{uri: 'https://openweathermap.org/img/wn/' + '01n' + '.png'}}
                    />
                    <Text style={estilos.valor}>{feelsLike.night + '\u00B0'} </Text>
                </View>

            </View>
        </View>
    </Cartao>
    
    )
}

const estilos = StyleSheet.create({
    primeiraLinha:{
        justifyContent: 'center',
        flexDirection: 'row'
    },
    segundaLinha:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    terceiraLinha:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        marginBottom: 20,
        borderTopColor: '#DDD'
    },
    cartao: {
        marginBottom: 8
    }, 
    tela: {
        flexDirection: 'row'
    },
    imagem:{
        width: 50,
        height: 50,
    },
    imagemSegundaLinha: {
        width: 20,
        height: 20,
    }, 
    feelLike: {
        width: 20,
        height: 20,
        backgroundColor: '#808080'
    },
    valor: {
        marginHorizontal: 2
    }
});
export default PrevisaoItem;