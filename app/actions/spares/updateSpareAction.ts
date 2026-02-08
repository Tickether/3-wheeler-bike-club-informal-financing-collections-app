"use server"

export async function updateSpareAction(
    _id: string,
) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/spares/updateSpare`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            },
            body: JSON.stringify({
                _id: _id,
            })
        })
        if (!response.ok) {
            throw new Error("Failed to update spare")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
