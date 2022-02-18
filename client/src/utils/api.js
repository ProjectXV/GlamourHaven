import axios from "axios";

const baseURL = "http://127.0.0.1:8000"; //local baseURL

const defaultConfig = {
  baseURL,
  timeout: 60000,
  headers: {
    "Content-type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
};

const api = axios.create({ ...defaultConfig });

// api.interceptors.request.use(
//   (config) => {
//     const token = ""; // Whatever the token is
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
//   },
//   (err) => Promise.reject(err)
// );
class API {
  // api endpoint for loging in users
  async loginUser(user) {
    return api.post("/login", user);
  }

  //api endpoint for creating an employee
  async createStaff(staff) {
    return api.post("/add-employee", staff);
  }

  //api endpoint for listing an employee
  async getStaff() {
    return api.get("/list-employees");
  }

  //api endpoint for updating an employee
  async updateStaff(employee_id, updated_staff) {
    return api.put(`/update-employee/${employee_id}`, updated_staff);
  }

  //api endpoint for retrieving an employee
  async getStaffDetails(employee_id) {
    return api.get(`/get-delete-employee/${employee_id}`);
  }

  //api endpoint for deleting an employee
  async deleteStaff(employee_id) {
    return api.delete(`/get-delete-employee/${employee_id}`);
  }

  //api endpoint for listing a commodity
  async getProducts() {
    return api.get(`/list-create-commodities`);
  }

  //api endpoint for creating a commodity
  async addProduct(product) {
    return api.post(`/list-create-commodities`, product);
  }

  //api endpoint for updating a commodity
  async updateProduct(product_id, updated_product) {
    return api.put(`/update-commodity/${product_id}`, updated_product);
  }

  //api endpoint for retrieving a commodity
  async getProductDetails(product_id) {
    return api.get(`/get-delete-commodity/${product_id}`);
  }

  //api endpoint for deleting a commodity
  async deleteProduct(product_id) {
    return api.delete(`/get-delete-commodity/${product_id}`);
  }

  //api endpoint for creating clients
  async createClient(client) {
    return api.post(`/list-create-clients`, client);
  }

  //api endpoint for listing  clients
  async getClients() {
    return api.get(`/list-create-clients`);
  }

  //api endpoint for updating client
  async updateClient(client_id, updated_client) {
    return api.put(`/update-clients/${client_id}`, updated_client);
  }

  //api endpoint for retrieving a client
  async getClientDetails(client_id) {
    return api.get(`/get-delete-clients/${client_id}`);
  }

  //api endpoint for retrieving and deleting a client
  async deleteClient(client_id) {
    return api.delete(`/get-delete-clients/${client_id}`);
  }

  //api endpoint for listing service
  async getServices() {
    return api.get(`/list-create-service`);
  }

  //api endpoint for creating service
  async createService(service) {
    return api.post(`/list-create-service`, service);
  }

  //api endpoint for updating a service
  async updateService(service_id, updated_service) {
    return api.put(`/update-service/${service_id}`, updated_service);
  }

  //api endpoint for retrieving a service
  async getServiceDetails(service_id) {
    return api.get(`/get-delete-service/${service_id}`);
  }

  //api endpoint for deleting a service
  async deleteService(service_id) {
    return api.delete(`/get-delete-service/${service_id}`);
  }

  //api endpoint for creating an appointment
  async createAppointment(appointment) {
    return api.post(`/list-create-appointment`, appointment);
  }

  //api endpoint for listing an appointment
  async getAppointments() {
    return api.get(`/list-create-appointment`);
  }

  //api endpoint for updating an appointment
  async updateAppointment(appointment_id, updated_appointment) {
    return api.put(
      `/update-appointment/${appointment_id}`,
      updated_appointment
    );
  }

  //api endpoint for retrieving an appointment
  async getAppointmentDetails(appointment_id) {
    return api.get(`/get-delete-appointment/${appointment_id}`);
  }

  //api endpoint for deleting an appointment
  async deleteAppointmentDetails(appointment_id) {
    return api.delete(`/get-delete-appointment/${appointment_id}`);
  }
}

const instance = new API();

export default instance;
