import { rest } from "msw";

const url = process.env.REACT_APP_API_URL as string;
const handlers = [
  rest.post(`${url}/user/login`, async (req, res, ctx) => {
    const responseOk = { data: { user: { token: "mocked token" } } };
    return res(ctx.status(200), ctx.json(responseOk));
  }),
  rest.post(`${url}/user/register`, async (req, res, ctx) => {
    const userData = { data: { name: "", password: "", username: "" } };
    return res(ctx.status(200), ctx.json(userData));
  }),
];

export default handlers;
