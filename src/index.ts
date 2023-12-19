import { createKoaServer, Controller, Get } from "routing-controllers";
import { TicketController } from "./controllers/tickets";
import Koa from "koa";

const app: Koa = createKoaServer({
  controllers: [TicketController],
});

app.listen(5000);
