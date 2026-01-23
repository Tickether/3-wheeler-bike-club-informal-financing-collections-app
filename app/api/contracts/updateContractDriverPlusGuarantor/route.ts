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

    const { _id, driver, guarantor, deposit, start, end, duration, amount, installment, status } = await req.json()

    try {
        await connectDB()
        const contract = await Contract.findByIdAndUpdate({_id:_id}, { 
            driver: driver,
            guarantor: guarantor,
            deposit: deposit,
            start: start,
            end: end,
            duration: duration,
            amount: amount,
            installment: installment,
            status: "active",
        }, { new: true })
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
