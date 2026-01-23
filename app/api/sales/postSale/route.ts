import connectDB from "@/utils/db/mongodb"
import { middleware } from "@/utils/db/middleware"
import Sale from "@/model/sale"

export async function POST(
    req: Request,
) {
    const authResponse = middleware(req)
    if (authResponse.status !== 200) {
        return authResponse
    }

    const { branch, customer, vehicle, amount } = await req.json()

    try {
        await connectDB()
        const sale = await Sale.create({ 
            branch: branch,
            customer: customer,
            vehicle: vehicle,
            amount: amount,
        })
        return new Response(JSON.stringify(sale))
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 })
    }
}
