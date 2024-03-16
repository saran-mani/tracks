import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/navLink";

const SignupScreen = () => {
  const navigation = useNavigation();
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});

export default SignupScreen;
