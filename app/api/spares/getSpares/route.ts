import Spare from "@/model/spare";
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
        const spares = await Spare.find({});


        if (!spares) {
            return new Response(
                JSON.stringify({
                    error: "Spares not found",
                }),
                { status: 404 }
            );
        }


        return new Response(
            JSON.stringify(spares),
            { status: 200 }
        );

    } catch (error) {
        return new Response(
            JSON.stringify({
                error: "Failed to fetch spares",
                details: error
            }),
            { status: 500 }
        );

    }
}
