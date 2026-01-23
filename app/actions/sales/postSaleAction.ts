"use server"

export async function postSaleAction(
    branch: string,
    customer: string,
    vehicle: string,
    amount: number,
) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/sales/postSale`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            },
            body: JSON.stringify({ 
                branch: branch,
                customer: customer,
                vehicle: vehicle,
                amount: amount,
            })
        })
        if (!response.ok) {
            throw new Error("Failed to post sale")
        }
        return response.json()
    } catch (error) { 
        console.log(error)
    }
}
