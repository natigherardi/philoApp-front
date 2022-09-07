import { rest } from "msw";

const url = process.env.REACT_APP_API_URL as string;
const handlers = [
  rest.post(`${url}/user/login`, async (req, res, ctx) => {
    const { username } = await req.json();
    const errorCase =
      username === ""
        ? { status: 400, response: "Error logging" }
        : {
            status: 200,
            response: { data: { user: { token: "mocked token" } } },
          };
    return res(ctx.status(errorCase.status), ctx.json(errorCase.response));
  }),
  rest.post(`${url}/user/register`, async (req, res, ctx) => {
    const { username } = await req.json();
    const responseRegister = username === "" ? "error" : "register success";
    return res(ctx.status(200), ctx.json(responseRegister));
  }),
  rest.get(`${url}/quotes/all-quotes`, async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          author: "test",
          image: "test",
          textContent: "test",
          user: "test",
        },
      ])
    );
  }),
];

export default handlers;
