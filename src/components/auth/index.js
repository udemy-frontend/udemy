import { API } from "../../config";

export const authenticate = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("jwt", JSON.stringify(data));
  }
};

export const signout = (next) => {
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

export const isAuthenticated = () => {

  if (typeof window !== "undefined") {
    return false;
  }
  
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    var user = { _id: "1", name: "", email: "", role: "" };
  }

  
};

export const jwt = () => {
  return JSON.parse(localStorage.getItem("jwt"));
};
