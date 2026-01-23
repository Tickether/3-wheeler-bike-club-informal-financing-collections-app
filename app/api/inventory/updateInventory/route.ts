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

    const { _id } = await req.json()

    try {
        await connectDB()
        const inventory = await Inventory.findByIdAndUpdate({_id:_id}, { 
            status: "out of stock",
        }, { new: true })

        if (!inventory) {
            return new Response(
                JSON.stringify({
                    error: "Inventory not found",
                }),
                { status: 404 }
            );
        }


        return new Response(
            JSON.stringify(inventory),
            { status: 200 }
        );

    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 })
    }
}
