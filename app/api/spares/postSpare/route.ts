import connectDB from "@/utils/db/mongodb"
import { middleware } from "@/utils/db/middleware"
import Spare from "@/model/spare"

export async function POST(
    req: Request,
) {
    const authResponse = middleware(req)
    if (authResponse.status !== 200) {
        return authResponse
    }

    const { branch, part, amount } = await req.json()

    try {
        await connectDB()
        const spare = await Spare.create({
            branch: branch,
            part: part,
            amount: amount,
            status: "in stock",
        })
        return new Response(JSON.stringify(spare))
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 })
    }
}
