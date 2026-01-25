import connectDB from "@/utils/db/mongodb"
import { middleware } from "@/utils/db/middleware"
import Inventory from "@/model/inventory"

export async function POST(
    req: Request,
) {
    const authResponse = middleware(req)
    if (authResponse.status !== 200) {
        return authResponse
    }

    const { branch, vehicle, amount } = await req.json()

    try {
        await connectDB()
        const inventory = await Inventory.create({ 
            branch: branch,
            vehicle: vehicle,
            amount: amount,
            status: "in stock",
        })
        return new Response(JSON.stringify(inventory))
    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 })
    }
}
