import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";

export const GET = async (request: NextRequest) => {
	const req = request.nextUrl;
	const uid = req.searchParams.get("user_id") as string;
	try {
		await sql`CREATE TABLE IF NOT EXISTS CART(id SERIAL, user_id varchar(255) NOT NULL, product_id varchar(255) NOT NULL, product_title varchar(255) NOT NULL, product_author varchar(255) NOT NULL, product_image varchar(255) NOT NULL, product_price integer NOT NULL, quantity integer NOT NULL);`;
		const res = await db
			.select()
			.from(cartTable)
			.where(eq(cartTable.user_id, uid));
		console.log(res);
		return NextResponse.json({ res });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "Something Went Wrong" });
	}
};

export const POST = async (request: NextRequest) => {
	const req = await request.json();
	// const uid = uuid();
	// const setCookies = cookies();
	// const user_id = setCookies.get("user_id")?.value;

	// if (!user_id) {
	// 	setCookies.set("user_id", uid);
	// }

	try {
		await sql`CREATE TABLE IF NOT EXISTS CART(id SERIAL, user_id varchar(255) NOT NULL, product_id varchar(255) NOT NULL, product_title varchar(255) NOT NULL, product_author varchar(255) NOT NULL, product_image varchar(255) NOT NULL, product_price integer NOT NULL, quantity integer NOT NULL);`;
		const res = await db
			.insert(cartTable)
			.values({
				// user_id: cookies().get("user_id")?.value as string,
				user_id: req.user_id,
				product_id: req.product_id,
				product_title: req.product_title,
				product_author: req.product_author,
				product_image: req.product_image,
				product_price: req.product_price,
				quantity: req.quantity,
			})
			.returning();

		return NextResponse.json({ res });
	} catch (error) {
		return NextResponse.json({ error });
	}
};

export const PUT = async (request: NextRequest) => {
	const req = await request.json();

	try {
		const res = await db
			.update(cartTable)
			.set({ quantity: req.quantity })
			.where(eq(cartTable.id, req.id))
			.returning();

		return NextResponse.json({ res });
	} catch (error) {
		return NextResponse.json({ error });
	}
};

export const DELETE = async (request: NextRequest) => {
	try {
		const req = await request.json();
		const res = await db
			.delete(cartTable)
			.where(eq(cartTable.id, req.id))
			.returning();
		return NextResponse.json({ res });
	} catch (error) {
		return NextResponse.json({ message: "Something Went Wrong" });
	}
};
