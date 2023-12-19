const { createClient } = require("@clickhouse/client");

const client = createClient({
  host: process.env.CLICKHOUSE_HOST ?? "http://localhost:8123",
  username: process.env.CLICKHOUSE_USER ?? "default",
  password: process.env.CLICKHOUSE_PASSWORD ?? "",
});
export default class TicketRepository {
  async listTicket(): Promise<any> {
    const result = await client.query({
      query: "SELECT * FROM db_tast.test",
      format: "JSON",
    });
    const dataset = await result.json();
    return dataset;
  }
}
