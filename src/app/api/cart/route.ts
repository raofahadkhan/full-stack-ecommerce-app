import { NextResponse, NextRequest } from "next/server";
import { db, cartTable } from "@/lib/drizzle";
import { v4 as uuid } from "uuid";
import { cookies } from "next/headers";

export const GET = async (response: Request) => {
	try {
		const res = await db.select().from(cartTable);
		return NextResponse.json({ response });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: "Something Went Wrong" });
	}
};

export const POST = async (request: Request) => {
	const req = await request.json();
	const uid = uuid();
	const setCookies = cookies();

	if (!cookies().has("user_id")) {
		setCookies.set("user_id", uid);
	}

	try {
		const res = await db.insert(cartTable).values({
			product_id: req.product_id,
			quantity: 1,
			user_id: cookies().get("user_id")?.value as string,
		});
	} catch (error) {}
};
