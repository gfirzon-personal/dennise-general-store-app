import axios from "axios"

let baseUrl = 'https://localhost:5001/api'

async function getDepartmentList() {
  let url = `${baseUrl}/Department`

  let response = await axios.get(url)
  return response
}

async function getDepartment(id) {
  let url = `${baseUrl}/Department/getById?id=${id}`

  let response = await axios.get(url)
  return response
}

async function updateDepartment(dept) {
  let url = `${baseUrl}/Department`
  let response = await axios.put(url, dept)

  return response
}

async function createDepartment(dept) {
  let url = `${baseUrl}/Department`
  let response = await axios.post(url, dept)

  return response
}


async function getEmployeeList() {
  let url = `${baseUrl}/Employee`

  let response = await axios.get(url)
  return response
}

async function getProductList() {
  let url = `${baseUrl}/Product`

  let response = await axios.get(url)
  return response
}

export {
  getDepartmentList,
  getDepartment,
  updateDepartment,
  createDepartment,
  getEmployeeList,
  getProductList
}