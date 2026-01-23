"use server"

export async function updateInventoryAction(
    _id: string,
) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/inventory/updateInventory`, {
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
            throw new Error("Failed to update inventory")
        }
        return response.json()
    } catch (error) { 
        console.log(error)
    }
}
