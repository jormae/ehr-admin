import axios from "axios";
const BASE_API_URL = "http://localhost:3001";

export default {
  getAllPositions: () => axios.get(`${BASE_API_URL}/position`),
  getAllActivePositions: () => axios.get(`${BASE_API_URL}/position/active`),

  addPosition: (position) => axios.post(`${BASE_API_URL}/position/`, position),

  editPosition: (deptId) => axios.get(`${BASE_API_URL}/position/${deptId}`),

  updateDeptarment: (position) =>
    axios.put(`${BASE_API_URL}/position/${position.deptId}`, position),

  deletePosition: (deptId) =>
    axios.delete(`${BASE_API_URL}/position/${deptId}`),
  //   getAllPositions: () => axios.get(`${BASE_API_URL}/positions`),
  //   getAllActivePositions: () =>
  //     axios.get(`${BASE_API_URL}/positions/active`),

  //   addPosition: (position) =>
  //     axios.post(`${BASE_API_URL}/position/`, position),

  //   editPosition: (deptId) => axios.get(`${BASE_API_URL}/position/${deptId}`),

  //   updateDeptarment: (position) =>
  //     axios.put(`${BASE_API_URL}/position/${position.deptId}`, position),

  //   deletePosition: (deptId) =>
  //     axios.delete(`${BASE_API_URL}/position/${deptId}`),
};
