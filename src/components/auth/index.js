import { API } from "../../config";
export const authenticate = async (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
  }
};
export const signout = async (next) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${API}/signout`, { method: "GET" })
      .then((res) => {
        console.log("signout", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }
};
export const isAuthenticated = async (next) => {
  if (typeof window !== "undefined") {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};
