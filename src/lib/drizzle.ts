import { sql } from "@vercel/postgres";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/vercel-postgres";

export const cartTable = pgTable("cart", {
	id: serial("id").primaryKey(),
	user_id: varchar("user_id", { length: 255 }).notNull(),
	product_id: varchar("product_id", { length: 255 }).notNull(),
	product_title: varchar("product_title", { length: 255 }).notNull(),
	product_author:varchar('product_author',{length:255}).notNull(),
	product_image: varchar("product_image").notNull(),
	product_price: integer("product_price").notNull(),
	quantity: integer("quantity").notNull(),
});

export const db = drizzle(sql);
