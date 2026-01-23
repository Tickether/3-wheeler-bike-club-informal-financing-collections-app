"use server"

export async function postContractOwnerPlusVehicleAction(
    branch: string,
    owner: string,
    vehicle: string,
) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/contracts/postContractOwnerPlusVehicle`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            },
            body: JSON.stringify({ 
                branch: branch,
                owner: owner,
                vehicle: vehicle,
            })
        })
        if (!response.ok) {
            throw new Error("Failed to post contract owner plus vehicle")
        }
        return response.json()
    } catch (error) { 
        console.log(error)
    }
}
