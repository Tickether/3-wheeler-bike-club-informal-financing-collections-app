"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { ShieldCheck, CreditCard, ListCheck, HandCoins, Loader2 } from "lucide-react";
import Image from "next/image";
import { usePrivy, useLogin } from "@privy-io/react-auth";
import { useState } from "react";

export function Wrapper() {

    const { ready, authenticated } = usePrivy()
    const router = useRouter() 

    const [loading, setLoading] = useState(false)

    const { login } = useLogin({
        onComplete: () => {
            setLoading(true)
            router.push("/dashboard")
        }
    })

    
    async function Login() {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 500))
        setLoading(false)
        if (ready && !authenticated) {
            login()
        }
        if (ready && authenticated) {
            setLoading(true)
            router.push("/dashboard")
        }
    }
   
    

    return (
        <div className="flex flex-col items-center justify-between min-h-screen p-8 space-y-12">
            <div className="flex-1 flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
                <div className="relative w-36 h-36 mb-10">
                    <Image
                        src="/icons/logo.png"
                        alt="Informal Financing Collections Logo"
                        fill
                        className="rounded-3xl"
                        priority
                    />
                </div>

                <h1 className="text-5xl max-sm:text-2xl font-bold mb-6 text-center">
                    Informal Financing Collections
                </h1>
                <p className="text-xl max-sm:text-base mb-12 text-center max-w-xl">
                    Monitor repayments, manage borrowers, and track informal financing agreements — all in one place.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-12">
                    <div className="flex flex-col items-center p-8 rounded-2xl border">
                        <ListCheck className="w-14 h-14 mb-5" />
                        <h3 className="text-base text-center font-semibold mb-2">Borrower List</h3>
                        <p className="text-center text-sm">View and manage all current borrowers.</p>
                    </div>
                    <div className="flex flex-col items-center p-8 rounded-2xl border">
                        <CreditCard className="w-14 h-14 mb-5" />
                        <h3 className="text-base text-center font-semibold mb-2">Payment Tracking</h3>
                        <p className="text-center text-sm">Record, verify, and review all collections.</p>
                    </div>
                    <div className="flex flex-col items-center p-8 rounded-2xl border">
                        <ShieldCheck className="w-14 h-14 mb-5" />
                        <h3 className="text-base text-center font-semibold mb-2">Agreement Oversight</h3>
                        <p className="text-center text-sm">Keep tabs on repayment period and terms.</p>
                    </div>
                </div>
                <Button
                    onClick={Login}
                    disabled={!ready || loading}
                    className="rounded-full px-10 py-6 max-sm:px-6 max-sm:py-4"
                >
                    <div className="flex items-center">
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <HandCoins className="mr-2" />}
                        {loading ? "Loading..." : "Access Collections"}
                    </div>
                </Button>
            </div>
        </div>
    );
}