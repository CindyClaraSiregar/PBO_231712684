// Cindy
// 2684
class ConnectionManager {
    constructor() {
        if (ConnectionManager.instance) {
            return ConnectionManager.instance; 
        }
        this.connections = []; 
        ConnectionManager.instance = this; 
    }
    createConnection(type, host) {
        const connection = DatabaseFactory.createDatabase(type, host);
        this.connections.push(connection);
        return connection;
    }
    getConnections() {
        return this.connections;
    }
}
class DatabaseFactory {
    static createDatabase(type, host) {
        if (type === "MySQL") {
            return new MySQLDatabase(host);
        } else if (type === "PostgreSQL") {
            return new PostgreSQLDatabase(host);
        } else {
            throw new Error("Invalid database type");
        }
    }
}
class MySQLDatabase {
    constructor(host) {
        this.type = "MySQL";
        this.host = host;
    }
    connect() {
        console.log(`Connected to MySQL database at ${this.host}`);
    }
}
class PostgreSQLDatabase {
    constructor(host) {
        this.type = "PostgreSQL";
        this.host = host;
    }
    connect() {
        console.log(`Connected to PostgreSQL database at ${this.host}`);
    }
}
const manager = new ConnectionManager();
manager.createConnection("MySQL", "localhost");
manager.createConnection("PostgreSQL", "127.0.0.1");

const connections = manager.getConnections();
connections.forEach(conn => conn.connect());

console.log(connections);