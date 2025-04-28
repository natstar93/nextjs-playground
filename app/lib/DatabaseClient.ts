import postgres from 'postgres';
import { Revenue } from './types';

class DatabaseClient {
    private sql;

    constructor(options = {}) {
        const connectionString = process.env.POSTGRES_URL;
        if (!connectionString) throw new Error('POSTGRES_URL not set');

        this.sql = postgres(connectionString, options);
    }

    async fetchRevenue() {
        try {
            const data = await this.sql<Revenue[]>`SELECT * FROM revenue`;
            return data;
        } catch (error) {
            console.error('Database Error:', error);
            throw new Error('Failed to fetch revenue data.');
        }
    }
}

export default DatabaseClient;
