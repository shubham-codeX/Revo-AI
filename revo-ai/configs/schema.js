import { pgTable, serial, varchar, boolean } from "drizzle-orm/pg-core";
import { sql } from 'drizzle-orm'; 

export const Users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    email: varchar('email', { length: 256 }).notNull().unique(), // Added .unique() since emails are often unique
    imageUrl: varchar('imageUrl', { length: 512 }),
    subscription: boolean('subscription').default(sql`false`).notNull(),
});