import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/navLink";
import { Context as AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";

const SigninScreen = () => {
  const navigation = useNavigation();

  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      clearErrorMessage();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign In"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Dont have an account? Sign up instead"
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

export default SigninScreen;
