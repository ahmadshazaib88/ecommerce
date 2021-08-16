import entityApi from "./entityApi";

const vehicles = entityApi("vehicles");
const fleets = entityApi("fleets");
const devices = entityApi("devices");
const product = entityApi("product");
const users = entityApi("users");
const orders = entityApi("orders")

export { vehicles, fleets, devices, product, users, orders };

