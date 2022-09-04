import jwt from "jwt-decode";

const tokenDecoder = (token: string) => {
  const payloadToken: {
    id: string;
    username: string;
    iat: string;
  } = jwt(token);

  return {
    token: token,
    id: payloadToken.id,
    username: payloadToken.username,
  };
};

export default tokenDecoder;
