import React, { useState } from "react";
import axios from "axios";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Dropdown } from 'react-native-element-dropdown'; // Asegúrate de instalar esta biblioteca
import { useRouter } from "expo-router";

type DropdownItem = {
  label: string;
  value: string;
};

export default function RegisterScreen() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol, setRol] = useState<string | null>(null);
  const [genero, setGenero] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const roles: DropdownItem[] = [
    { label: 'Nutricionista', value: 'nutricionista' },
    { label: 'Paciente', value: 'paciente' },
  ];

  const generos: DropdownItem[] = [
    { label: 'Masculino', value: 'masculino' },
    { label: 'Femenino', value: 'femenino' },
  ];

  const handleRegister = async () => {
    // Validar que todos los campos estén llenos
    if (!nombre || !correo || !contrasena || !rol || !genero) {
      setErrorMessage("Todos los campos son obligatorios.");
      return;
    }

    try {
      const response = await axios.post("https://localhost:7042/api/usuarios", {
        nombre,
        correo,
        contrasena,
        rol,
        genero,
      });

      if (response.status === 200) {
        console.log("Usuario registrado con éxito:", response.data);
        router.push("/login"); 
      }
    } catch (err: any) {
      console.error("Error al registrar el usuario:", err.message);
      setErrorMessage(err.response?.data?.message || "Error al crear el usuario");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <Text style={styles.label}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        autoCapitalize="words"
      />

      <Text style={styles.label}>Correo Electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />

      <Text style={styles.label}>Rol</Text>
      <Dropdown
        style={styles.dropdown}
        data={roles}
        labelField="label"
        valueField="value"
        placeholder="Selecciona un rol"
        value={rol}
        onChange={(item: DropdownItem) => {
          setRol(item.value);
        }}
      />

      <Text style={styles.label}>Género</Text>
      <Dropdown
        style={styles.dropdown}
        data={generos}
        labelField="label"
        valueField="value"
        placeholder="Selecciona un género"
        value={genero}
        onChange={(item: DropdownItem) => {
          setGenero(item.value);
        }}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  dropdown: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});