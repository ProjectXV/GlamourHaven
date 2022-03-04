import { AppointmentState } from "../context/appointments";
import API from "../utils/api";
import { toast } from "react-toastify";

export const fetchAppointments = async () => {
  const { setAppointments, setLoading } = AppointmentState();

  try {
    setLoading(true);
    const response = await API.getAppointments();
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
