import {View, Text, StyleSheet} from 'react-native';

export default function Header({titulo}){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>{titulo}</Text>
            <Text style={estilos.subtitulo}>organize as suas atividades diárias</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
       backgroundColor: '#2563eb',
       paddingVertical: 20,
       paddingHorizontal: 16,
       alignItems: 'center'
    },
    titulo:{
        color: 'white',
        fontSize: 24,
        color: 'white'
    },
    subtitulo:{
        fontSize: 14,
        color: '#a2a0a0'
    }
})
