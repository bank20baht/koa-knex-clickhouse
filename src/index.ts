import { createKoaServer, Controller, Get } from "routing-controllers";
import { TicketController } from "./controllers/tickets";
import Koa from "koa";
import cors from "@koa/cors";

const app: Koa = createKoaServer({
  controllers: [TicketController],
  middlewares: [cors],
});

app.listen(5000);
