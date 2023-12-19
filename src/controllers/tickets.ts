import "reflect-metadata";
import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from "routing-controllers";
import { TicketService } from "../services/tickets";

@Controller("/tickets")
export class TicketController {
  private service: TicketService = new TicketService();

  @Get("/")
  async getAll() {
    return { message: await this.service.listTickets() };
  }

  @Get("/:id")
  async getOne(@Param("id") id: number) {
    return { message: await this.service.getTicket(id) };
  }

  @Post("/")
  async post(@Body() user: any) {
    return { message: await this.service.createTicket(user) };
  }

  @Put("/:id")
  async put(@Param("id") id: number, @Body() user: any) {
    return { message: await this.service.updateTicketDetail(id, user) };
  }

  @Delete("/:id")
  remove(@Param("id") id: number) {
    return "Removing tickets...";
  }
}
