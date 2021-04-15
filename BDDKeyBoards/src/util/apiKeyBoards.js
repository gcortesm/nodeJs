
const axios = require('axios');

const getCommandById = (url,id) => {
  try {
    return axios.get(`${url}${id}`);
  } catch (e) {
    console.error('exception occurred while GET', e);
    throw e;
  }
}
const createCommand = (url, command) => {
  try {
    console.log(url);
    return axios.post(url, command);
  } catch (e) {
    console.error('exception occurred while POST', e);
    throw e;
  }
}
const patchData = async (url, data) => {
  try {
    return await axios.patch(url, data);
  } catch (e) {
    console.error('exception occurred while PATCH', e);
    throw e;
  }
}
const deleteData = async (url, data) => {
  try {
    return await axios.delete(url);
  } catch (e) {
    console.error('exception occurred while DELETE', e);
    throw e;
  }
}
module.exports = {
  getCommandById,
  createCommand,
  patchData,
  deleteData
}