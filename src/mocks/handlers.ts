import { rest } from "msw";

const url = process.env.REACT_APP_API_URL as string;
const handlers = [
  rest.post(`${url}/user/login`, async (req, res, ctx) => {
    const { username } = await req.json();
    const responseLogin =
      username === "" ? "error" : { data: { user: { token: "mocked token" } } };
    return res(ctx.status(200), ctx.json(responseLogin));
  }),
  rest.post(`${url}/user/register`, async (req, res, ctx) => {
    const { username } = await req.json();
    const responseRegister = username === "" ? "error" : "register success";
    return res(ctx.status(200), ctx.json(responseRegister));
  }),
];

export default handlers;
