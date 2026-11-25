import sqlite3 from "sqlite3";

export class DatabaseConnectionManagerFactory {
  private static instance: DatabaseConnectionManagerFactory;
  private connection: sqlite3.Database | null = null;

  private constructor() {}

  static getInstance(): DatabaseConnectionManagerFactory {
    if (!DatabaseConnectionManagerFactory.instance) {
      DatabaseConnectionManagerFactory.instance = new DatabaseConnectionManagerFactory();
    }
    return DatabaseConnectionManagerFactory.instance;
  }

  getConnection(): sqlite3.Database {
    if (!this.connection) {
      this.connection = new sqlite3.Database(process.env.DB_PATH || "app.db");
    }
    return this.connection;
  }
}

export function query(sql: string): Promise<any[]> {
  const db = DatabaseConnectionManagerFactory.getInstance().getConnection();
  return new Promise((resolve, reject) => {
    db.all(sql, (err, rows) => (err ? reject(err) : resolve(rows)));
  });
}
