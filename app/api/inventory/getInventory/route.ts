import Inventory from "@/model/inventory";
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
        const inventory = await Inventory.find({});


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
        return new Response(
            JSON.stringify({
                error: "Failed to fetch inventory",
                details: error
            }),
            { status: 500 }
        );

    }
}