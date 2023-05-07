import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HttpStatusCode } from "axios";
import App from "./App";
import { APPLICATION_ERROR_OVERLAY_TITLE } from "./constants/texts";
import { MISSING_OR_INVALID_API_KEY } from "./constants/texts";

const server = setupServer();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("App", () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });
  test("Renders ErrorOverlay when Finnhub API key is missing or invalid ", async () => {
    server.use(
      rest.get(
        "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=undefined",
        async (req, res, ctx) => {
          console.log(req);
          return await res(ctx.status(HttpStatusCode.Unauthorized));
        }
      )
    );

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText(APPLICATION_ERROR_OVERLAY_TITLE)).toBeVisible();
    });
    expect(screen.getByText(MISSING_OR_INVALID_API_KEY)).toBeVisible();
  });
});
