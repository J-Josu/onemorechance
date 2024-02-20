import { createClient } from '@libsql/client';
import * as dotenv from "dotenv";
import { sql } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/libsql';
import * as schema from './schema';

dotenv.config({ path: ".env.local" });

export const client = createClient({
    url: process.env.TURSO_DB_URL!,
    authToken: process.env.TURSO_DB_AUTH_TOKEN!
});

export const db = drizzle(client, { schema });

async function main() {
    const tableSchema = db._.schema;
    if (!tableSchema) {
        throw new Error("No table schema found");
    }

    console['log']("🗑️  Emptying the entire database");
    const queries = Object.values(tableSchema).map((table) => {
        console['log'](`🧨 Preparing delete query for table: ${table.dbName}`);
        return sql.raw(`DROP TABLE ${table.dbName};`);
    });

    console['log']("📨 Sending delete queries...");

    await db.transaction(async (tx) => {
        await Promise.all(
            queries.map(async (query) => {
                if (query) await tx.run(query);
            })
        );
    });

    console['log']("✅ Database emptied");
}

main().catch(console['error']);
