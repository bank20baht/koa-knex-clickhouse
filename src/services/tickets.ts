import TicketRepository from "../repository/tickets";

export class TicketService {
  private ticketRepository = new TicketRepository();

  async listTickets(): Promise<string> {
    return await this.ticketRepository.listTicket();
  }

  async getTicket(id: number): Promise<string> {
    return "This action returns ticket #" + id;
  }

  async createTicket(user: any): Promise<string> {
    return "Saving ticket...";
  }

  async updateTicketDetail(id: number, user: any): Promise<string> {
    return "Updating a ticket detail...";
  }

  async updateTicketStatus(): Promise<string> {
    return "Updating a ticket status...";
  }

  async deleteTicket(): Promise<string> {
    return "Removing tickets...";
  }
}
