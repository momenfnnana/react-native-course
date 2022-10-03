import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";
import { InputFiled } from "../../components";
import styles from "./style";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/,
      "Password must have at least 8 characters, one number, one special character"
    ),
});

const Login = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(true);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const showPasswordHandler = () => {
    setIsPasswordShown((currentState) => !currentState);
  };
  const isValidEmail = (email) => {
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
    if (email.match(regex)) return true;
    else return false;
  };
  const isValidPassword = (password) => {
    let regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%./^&*()_+<>,~`"':;]{8,}$/;
    if (password.match(regex)) return true;
    else return false;
  };
  // const handleSubmit = () => {
  //   if (isValidEmail(email) && isValidPassword(password)) {
  //     console.log("handleSubmit");
  //   } else {
  //     console.log("isValidEmail:", isValidEmail(email));
  //     console.log("isValidPassword:", isValidPassword(password));
  //   }
  // };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { ...rest }) => {
            setTimeout(() => {
              rest.setSubmitting(false);
            }, 2000);
            // rest.resetForm({ email: "mo@mom.asd", password: "asdasd" });
          }}
          validationSchema={loginSchema}
        >
          {({
            errors,
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
            isSubmitting,
          }) => (
            <>
              <InputFiled
                label="Email"
                placeholder="janboon@gmail.com"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {/* errors from Formik & yup */}
              {errors.email && touched.email && (
                <Text style={styles.errorMessage}>{errors.email}</Text>
              )}
              {/* regex error on email address */}
              {/* {!isValidEmail(email) && (
                <Text style={{ color: "red", fontSize: 12, margin: 15 }}>
                  not valid email
                </Text>
              )} */}
              <InputFiled
                label="Password"
                placeholder="******************"
                secureTextEntry={isPasswordShown}
                value={values.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                rightIcon={
                  isPasswordShown ? (
                    <Entypo
                      name="eye-with-line"
                      size={24}
                      color="#999999"
                      onPress={showPasswordHandler}
                    />
                  ) : (
                    <Entypo
                      name="eye"
                      size={24}
                      color="#999999"
                      style={styles.eye}
                      onPress={showPasswordHandler}
                    />
                  )
                }
              />
              {/* errors from Formik & yup */}
              {errors.password && touched.password && (
                <Text style={styles.errorMessage}>{errors.password}</Text>
              )}
              <Button
                title="Submit"
                onPress={handleSubmit}
                disabled={isSubmitting}
              />
              {/* loader appears while submitting */}
              {isSubmitting && <ActivityIndicator size={"large"} />}
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;
