import API from "../utils/api";

export async function loginUser(dispatch, loginPayload) {
  try {
    dispatch({ type: "REQUEST_LOGIN" });
    const { data } = await API.loginUser(loginPayload);
    if (data.token) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
      localStorage.setItem("userInfo", JSON.stringify(data));

      return data;
    }

    dispatch({ type: "LOGIN_ERROR", error: data.errors[0] });
    return;
  } catch (error) {
    Object.keys(error.response.data).forEach(function (prop) {
      // `prop` is the property name
      // `data[prop]` is the property value
      return dispatch({
        type: "LOGIN_ERROR",
        error: error.response.data[prop][0],
      });
    });
  }
}

export async function registerUser(dispatch, registerPayload) {
  try {
    dispatch({ type: "REQUEST_REGISTER" });
    const { data } = await API.createClient(registerPayload);
    if (data.token) {
      dispatch({ type: "REGISTER_SUCCESS", payload: data });
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    }

    dispatch({ type: "REGISTER_ERROR", error: data.errors[0] });
    return;
  } catch (error) {
    Object.keys(error.response.data).forEach(function (prop) {
      // `prop` is the property name
      // `data[prop]` is the property value
      return dispatch({
        type: "REGISTER_ERROR",
        error: error.response.data[prop][0],
      });
    });
  }
}

export async function logOut(dispatch) {
  dispatch({ type: "LOGOUT" });
  localStorage.removeItem("userInfo");
  localStorage.removeItem("token");
}
