import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer: {
        width: '80%', // Ancho del contenedor (ajusta según sea necesario)
        backgroundColor: 'white', // Color de fondo blanco
        borderRadius: 10, // Bordes redondeados
        padding: 15, // Espaciado interno
        shadowColor: '#000', // Color de la sombra
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2, // Opacidad de la sombra
        shadowRadius: 4, // Radio de la sombra
        elevation: 5, // Elevación para Android
        alignItems: 'center', // Centra el contenido horizontalmente
        justifyContent: 'center', // Centra el contenido verticalmente
        marginVertical: 20, // Espaciado vertical entre otros elementos
      },
      button: {
        backgroundColor: '#31bd8c', // Color de fondo del botón
        paddingVertical: 12, // Espaciado vertical
        paddingHorizontal: 20, // Espaciado horizontal
        borderRadius: 5, // Bordes redondeados
        alignItems: 'center', // Centra el texto horizontalmente
        justifyContent: 'center', // Centra el texto verticalmente
        elevation: 3, // Sombra para Android
        shadowColor: '#000', // Color de la sombra para iOS
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2, // Opacidad de la sombra
        shadowRadius: 4, // Radio de la sombra
      },
      buttonText: {
        color: '#FFFFFF', // Color del texto del botón
        fontSize: 16, // Tamaño de la fuente
        fontWeight: 'bold', // Negrita
      },
      linkText: { marginTop: 10, color: "#007bff", textDecorationLine: "underline" },
      input: {
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#DDD",
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: "white",
        marginBottom: 15,
        fontSize: 16,
    },
    container: {
        flex: 1, // Asegúrate de que el contenedor ocupe todo el espacio
        justifyContent: 'center', // Centra el contenido verticalmente
        alignItems: 'center', // Centra el contenido horizontalmente
        padding: 20, // Espaciado interno
      },
      background: {
        flex: 1, // Asegúrate de que la imagen de fondo ocupe todo el espacio
      },
      label: {
        color: '##070808',
        fontSize: 16, // Tamaño de la fuente del título
        marginBottom: 5, // Espaciado inferior
        alignSelf: 'auto', // Alinea el texto a la izquierda
        width: '100%', // Asegura que el texto ocupe el ancho completo
      },
});

export default styles;