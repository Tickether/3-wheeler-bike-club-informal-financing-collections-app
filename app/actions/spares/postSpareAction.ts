"use server"

export async function postSpareAction(
    branch: string,
    part: {
        type: string
        model: string
        no: string
        serial: string
    },
    amount: number,
) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/spares/postSpare`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            },
            body: JSON.stringify({
                branch: branch,
                part: part,
                amount: amount,
            })
        })
        if (!response.ok) {
            throw new Error("Failed to post spare")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
