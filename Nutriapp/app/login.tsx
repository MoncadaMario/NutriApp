import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { darkTheme, lightTheme } from "../styles/themes";
import { i18n } from "../contexts/LanguageContext";
import styles from "@/styles/styles";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const router = useRouter();
  const { login } = useAuth();
  const { theme } = useTheme();
  const themeStyles = theme === "dark" ? darkTheme : lightTheme;

  const handleLogin = () => {
    login(email, password); // Llama a la función login con email y password
    router.replace("/home");
  };

  return (
    <ImageBackground
      source={require("../assets/images/backgroundopacity.jpg")} // Cambia a la ruta de tu imagen
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={[themeStyles.title]}>{i18n.t("welcome")}</Text>

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Correo electrónico"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Ingrese contraseña"
          placeholderTextColor="#777"
          value={password} // Cambiado a password
          onChangeText={setPassword} // Cambiado a setPassword
          secureTextEntry={true} // Oculta el texto de la contraseña
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={styles.linkText}>¿No tienes cuenta? Regístrate</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}