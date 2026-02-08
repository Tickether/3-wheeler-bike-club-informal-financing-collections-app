"use server"

export async function getSparesAction() {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/spares/getSpares`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            }
        })
        if (!response.ok) {
            throw new Error("Failed to get spares")
        }
        return response.json()
    } catch (error) {
        console.log(error)
    }
}
