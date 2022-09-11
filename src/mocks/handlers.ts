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

  rest.get(`${url}/quotes/all-quotes`, async (_req, res, ctx) => {
    const response = [
      {
        author: "test",
        image: "test",
        textContent: "test",
        user: "test",
      },
    ];
    return res.once(ctx.status(200), ctx.json(response));
  }),

  rest.get(`${url}/quotes/all-quotes`, async (_req, res, ctx) => {
    const response = { status: 400, error: "error" };
    return res.once(ctx.status(response.status), ctx.json(response.error));
  }),

  rest.get(`${url}/quotes/quotesByUser`, async (req, res, ctx) => {
    const id = await req.url.searchParams.get("id");
    if (id === "test error") {
      return res(ctx.status(400), ctx.json(new Error("Mock error")));
    }
    return res(
      ctx.status(200),
      ctx.json({
        quotes: {
          quotesCreated: [
            {
              textContent: "test",
              author: "test",
              owner: "test",
              image: "test",
              year: 1650,
              school: "test",
              book: "test",
              favoritedBy: ["test"],
              id: "test",
            },
          ],
          quotesFavorited: [
            {
              textContent: "test",
              author: "test",
              owner: "test",
              image: "test",
              year: 1650,
              school: "test",
              book: "test",
              favoritedBy: ["test"],
              id: "test",
            },
          ],
        },
      })
    );
  }),

  rest.delete(`${url}/quotes/quote`, async (req, res, ctx) => {
    const id = await req.url.searchParams.get("id");
    if (id === "test bad ID") {
      return res(ctx.status(400), ctx.json(new Error("Mock delete error")));
    }
    return res(ctx.status(200), ctx.json("mock delete correct"));
  }),

  rest.post(`${url}/quotes/quote`, async (req, res, ctx) => {
    const { status } = await req.json();
    const response =
      status === "ok"
        ? { res: "Quote created", resStatus: 201 }
        : { res: "Error creating quote", resStatus: 400 };

    return res(ctx.status(response.resStatus), ctx.json(response.res));
  }),
];

export default handlers;
