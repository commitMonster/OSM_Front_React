import axios from "axios";

export const signin = async ({ userId, password }) => {
  const response = await axios({
    method: "post",
    url: "/api/auth/signin",
    data: {
      userId: userId,
      password: password,
    },
  });
  return response;
};

export const signout = async () => {
  const response = await axios({
    method: "post",
    url: "/api/auth/signout",
  });
  return response;
};

export const signup = async ({ userId, email, password, name }) => {
  const response = await axios({
    method: "post",
    url: "/api/auth/signup",
    data: {
      userId: userId,
      email: email,
      password: password,
      name: name,
    },
  });
  return response;
};

// type can be userId, email
export const duplicationCheck = async ({ type, payload }) => {
  const response = await axios({
    method: "post",
    url: `/api/auth/check/${type}`,
    data:
      type === "userId"
        ? {
            userId: payload,
          }
        : {
            email: payload,
          },
  });
  return response;
};

export const userCheck = async () => {
  const response = await axios({
    method: "get",
    url: "/api/auth",
  });
  return response;
};
