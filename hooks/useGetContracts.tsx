import { getContractsAction } from "@/app/actions/contracts/getContractsAction"
import { useState, useEffect } from "react"

export interface Contract {
    _id: string
    branch: string
    serial: string
    vehicle: {
        type: string
        model: string
        color: string
        vin: string
        license: string
    }
    owner: {
        firstname: string
        othername: string
        lastname: string
        phone: string
    }
    driver?: {
        firstname: string
        othername: string
        lastname: string
        phone: string
        location: string
        headshot: string[]
        national: string[]
    }
    guarantor?: {
        firstname: string
        othername: string
        lastname: string
        phone: string
        location: string
        headshot: string[]    
        national: string[]
    }
    deposit: number
    start: Date
    end: Date
    duration: number
    amount: number
    installment: number
    payments?: Array<{
        week: number
        amount: number
        method: string
        reference: Date
        status: string
    }>
    status: string
    createdAt: Date
    updatedAt: Date
}

export const useGetContracts = () => {
    const [contracts, setContracts] = useState<Contract[] | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<any | null>(null)

    useEffect(() => {
        async function getContracts() {
            setLoading(true)
            try {
                const data = await getContractsAction()
                setContracts(data)
            } catch (err) {
                setError(err)
            }
            setLoading(false)
        }
        getContracts()
    }, [])

    async function getBackContracts() {
        setLoading(true)
        try {
            const data = await getContractsAction()
            setContracts(data)
        } catch (err) {
            setError(err)
        }
        setLoading(false)
    }

    return { contracts, loading, error, getBackContracts }
}
