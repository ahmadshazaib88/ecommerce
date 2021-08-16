import axios from "./config";

// TODO Handle errors
const paramsSerializer = (params) => {

  const query = JSON.stringify(params?.query || {})
  return `query=${query}`;
}

const getAll = (entity) => (query) =>
  axios
    .get(`/${entity}`, { params: { query }, paramsSerializer })
    .then((p) => p.data);

const get = (entity) => (id) =>
  axios.get(`/${entity}/${id}`).then((p) => p.data);

const create = (entity) => (data) =>
  axios.post(`/${entity}`, data).then((p) => p.data);

const update = (entity) => (id, data) =>
  axios.put(`/${entity}/${id}`, data).then((p) => p.data);

const remove = (entity) => (id) =>
  axios.delete(`/${entity}/${id}`).then((p) => p.data);

export default (entity) => ({
  getAll: getAll(entity),
  get: get(entity),
  create: create(entity),
  update: update(entity),
  remove: remove(entity),
});
