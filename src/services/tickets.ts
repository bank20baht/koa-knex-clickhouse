export class TicketService {
  async listTickets(): Promise<string> {
    return "List Tickets is work";
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
