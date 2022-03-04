import API from "../utils/api";

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const { data } = await API.loginUser(loginPayload);
    if (data.token !== undefined) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));

      return data;
    }

    dispatch({ type: "LOGIN_ERROR", error: data.errors[0] });
    return;
  } catch (error) {
    // Object.keys(error.response.data).forEach(function (prop) {
    //   // `prop` is the property name
    //   // `data[prop]` is the property value
    return dispatch({
      type: "LOGIN_ERROR",
      error: error.message,
    });
    // });
  }
}

export async function registerUser(dispatch, registerPayload) {
  try {
    dispatch({ type: "REQUEST_REGISTER" });
    const response = await API.createClient(registerPayload);
    if (response?.status === 201) {
      dispatch({ type: "REGISTER_SUCCESS", payload: response.data });
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log("Registered User", response.data);
      return response.data;
    }

    dispatch({ type: "REGISTER_ERROR", error: "An Error Occurred" });
    return;
  } catch (error) {
    // Error 😨
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      return dispatch({
        type: "REGISTER_ERROR",
        error: error.response.data,
      });
    } else if (error.request) {
      console.log(error.request);
      return dispatch({
        type: "REGISTER_ERROR",
        error: error.request,
      });
    } else {
      // Something happened in setting up the request and triggered an Error
      console.log("Error", error.message);
      return dispatch({
        type: "REGISTER_ERROR",
        error: error.message,
      });
    }
    // });
  }
}

export async function logOut(dispatch) {
  await dispatch({ type: "LOGOUT" });
  localStorage.removeItem("userInfo");
}
