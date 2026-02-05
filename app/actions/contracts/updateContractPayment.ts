"use server"

export async function updateContractPaymentAction(
    _id: string,
    week: number,
    amount: number,
    method: string,
    reference: Date,
    status: string,
    
) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/contracts/updateContractPayment`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            },
            body: JSON.stringify({ 
                _id: _id,
                week: week,
                amount: amount,
                method: method,
                reference: reference,
                status: status,
            })
        })
        if (!response.ok) {
            throw new Error("Failed to update contract payment")
        }
        return response.json()
    } catch (error) { 
        console.log(error)
    }
}
