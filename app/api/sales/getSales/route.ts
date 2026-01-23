import Sale from "@/model/sale";
import connectDB from "@/utils/db/mongodb";
import { middleware } from "@/utils/db/middleware";


export async function POST(
    req: Request,
) {
    const authResponse = middleware(req);
    if (authResponse.status !== 200) {
        return authResponse;
    }

    try {
        await connectDB();
        const sales = await Sale.find({});


        if (!sales) {
            return new Response(
                JSON.stringify({
                    error: "Sales not found",
                }),
                { status: 404 }
            );
        }


        return new Response(
            JSON.stringify(sales),
            { status: 200 }
        );

    } catch (error) {
        return new Response(
            JSON.stringify({
                error: "Failed to fetch sales",
                details: error
            }),
            { status: 500 }
        );

    }
}