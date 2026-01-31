"use server"

export async function updateContractDriverPlusGuarantorAction(
    _id: string,
    driver: {
        firstname: string
        othername: string
        lastname: string
        phone: string
        location: string
        headshot: string[]
        national: string[]
    },
    guarantor: {
        firstname: string
        othername: string
        lastname: string
        phone: string
        location: string
        headshot: string[]
        national: string[]
    },
    deposit: number,
    start: Date,
    end: Date,
    duration: number,
    amount: number,
    installment: number,
) {
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/contracts/updateContractDriverPlusGuarantor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.THREEWB_API_KEY
            },
            body: JSON.stringify({ 
                _id: _id,
                driver: driver,
                guarantor: guarantor,
                deposit: deposit,
                start: start,
                end: end,
                duration: duration,
                amount: amount,
                installment: installment,
            })
        })
        if (!response.ok) {
            throw new Error("Failed to update contract driver plus guarantor")
        }
        return response.json()
    } catch (error) { 
        console.log(error)
    }
}
