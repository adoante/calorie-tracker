import { NextResponse, NextRequest } from "next/server"
import { createClient } from '@/utils/supabase/server';

export async function POST(req: NextRequest) {
	const { searchParams } = new URL(req.url)

	const email = searchParams.get("email")

	const supabase = await createClient()

	const { data, error } = await supabase
		.from("waitlist")
		.insert({ email: email })
		.select()

	if (error) {
		return NextResponse.json({ error: error })
	}

	return NextResponse.json({ data: data })
}
