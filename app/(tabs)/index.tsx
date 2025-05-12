import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>VIVA</Text>
      <Text style={styles.subtitle}>Puerto Rico</Text>
      <Text style={styles.caption}>Find your social.</Text>

      <Text style={styles.createAccount}>Create an account</Text>
      <Text style={styles.inputLabel}>
        Enter your email to sign up for this app
      </Text>

      <TextInput
        placeholder="email@domain.com"
        placeholderTextColor="#aaa"
        style={styles.input}
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.authButton}>
        <Text style={styles.buttonText}>
          <Text style={{ color: "#DB4437" }}>🟢 </Text>
          Continue with Google
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.authButton}>
        <Text style={styles.buttonText}>
          <Text style={{ color: "#000" }}> </Text>
          Continue with Apple
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.providerLogin}>
        <Text style={styles.providerText}>⭐ Provider Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 56,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "600",
  },
  caption: {
    color: "#aaa",
    marginVertical: 10,
  },
  createAccount: {
    marginTop: 30,
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  inputLabel: {
    fontSize: 14,
    color: "#aaa",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#222",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  authButton: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontWeight: "600",
  },
  providerLogin: {
    marginTop: 20,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  providerText: {
    color: "#333",
    fontWeight: "600",
  },
});
