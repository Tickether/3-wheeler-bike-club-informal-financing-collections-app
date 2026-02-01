import connectDB from "@/utils/db/mongodb"
import { middleware } from "@/utils/db/middleware"
import Contract from "@/model/contract"

export async function POST(
    req: Request,
) {
    const authResponse = middleware(req)
    if (authResponse.status !== 200) {
        return authResponse
    }

    const { _id, week, amount, method, reference, status } = await req.json()

    try {
        await connectDB()
        // Use $push to add a payment to the payments array instead of replacing it
        const contract = await Contract.findByIdAndUpdate(
            { _id: _id },
            { 
                $push: {
                    payments: {
                        week: week,
                        amount: amount,
                        method: method,
                        reference: reference,
                        status: status,
                    }
                }
            },
            { new: true }
        )
        if (!contract) {
            return new Response(
                JSON.stringify({
                    error: "Contract not found",
                }),
                { status: 404 }
            );
        }

        return new Response(
            JSON.stringify(contract),
            { status: 200 }
        );

    } catch (error) {
        return new Response(JSON.stringify({ message: "Internal Server Error" }), { status: 500 })
    }
}
