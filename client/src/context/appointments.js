import React, { createContext, useContext, useEffect, useState } from "react";
import API from "../utils/api";
import { toast } from "react-toastify";
const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAppointments = async () => {
    const session_status = JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo")).session_status
      : null;

    function getAppointmentURL() {
      if (session_status === "manager" || session_status === "employee") {
        return API.getAppointments();
      } else if (session_status === "client") {
        const client_id = JSON.parse(localStorage.getItem("userInfo"))
          ? JSON.parse(localStorage.getItem("userInfo")).account_id
          : null;
        return API.getClientAppointments(client_id);
      }
    }

    try {
      setLoading(true);
      const response = await getAppointmentURL();
      if (response.status === 200) {
        setLoading(false);
        // Success 🎉
        console.log("response", response);
        setAppointments(response.data);
      }
    } catch (error) {
      // Error 😨
      toast.info("An Error occured", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: true,
      });
      if (error.response) {
        console.log(error.response.data);
        toast.info("An Error occured", {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: true,
        });
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("Error", error.message);
      }
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        setAppointments,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const AppointmentState = () => {
  return useContext(AppointmentContext);
};
