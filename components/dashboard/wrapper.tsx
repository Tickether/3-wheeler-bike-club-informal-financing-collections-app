"use client";

import { Menu } from "@/components/top/menu";
import { DoorOpen, Package, ShoppingCart, FileText, Check } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Wrapper() {
    const menuItems = [
        {
            title: "Inventory",
            description: "Complete vehicle inventory management system",
            icon: Package,
            href: "/dashboard/inventory",
            color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
            hoverColor: "hover:bg-blue-500/20 hover:border-blue-300 dark:hover:border-blue-700",
            features: [
                "View all vehicles",
                "Add new inventory",
                "Update stock status",
                "Track vehicle details",
            ],
        },
        {
            title: "Sales",
            description: "Comprehensive sales tracking and management",
            icon: ShoppingCart,
            href: "/dashboard/sales",
            color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
            hoverColor: "hover:bg-green-500/20 hover:border-green-300 dark:hover:border-green-700",
            features: [
                "Record sales transactions",
                "View sales history",
                "Generate reports",
                "Track revenue",
            ],
        },
        {
            title: "Work & Pay",
            description: "Payment collections and contract management",
            icon: FileText,
            href: "/dashboard/contracts",
            color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
            hoverColor: "hover:bg-purple-500/20 hover:border-purple-300 dark:hover:border-purple-700",
            features: [
                "Create contracts",
                "Track payments",
                "Manage collections",
                "View payment history",
            ],
        },
    ];

    return (
        <div className="flex flex-col h-screen p-4 md:p-6 lg:p-8 w-full gap-6 overflow-auto">
            <Menu/>
            
            <div className="flex flex-col w-full gap-6 flex-1 min-h-0">
                <div className="flex w-full justify-center">
                    <Alert className="w-full max-w-[66rem]">
                        <DoorOpen className="h-4 w-4" />
                        <AlertTitle className="font-bold">Welcome, <span className="text-yellow-600">username</span></AlertTitle>
                        <AlertDescription className="text-xs italic">
                            <p className="max-md:text-[11px]">{"Select an option from the menu to get started"}</p>
                        </AlertDescription>
                    </Alert>
                </div>

                <div className="flex w-full justify-center flex-1 items-center py-4 md:py-8">
                    <div className="w-full max-w-[66rem] h-full flex items-center">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full h-auto md:h-[75%]">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <Link 
                                        key={item.title}
                                        href={item.href}
                                        className="group h-full flex items-center"
                                    >
                                        <div className={`
                                            relative w-full h-full min-h-[280px] md:min-h-0 p-5 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border-2 
                                            transition-all duration-300 cursor-pointer
                                            bg-card text-card-foreground
                                            ${item.color} ${item.hoverColor}
                                            shadow-md
                                            hover:shadow-xl hover:scale-105 hover:-mt-2
                                            transform hover:-translate-y-1
                                            flex flex-col
                                        `}>
                                            <div className="flex flex-col items-center text-center mb-4 md:mb-6">
                                                <div className={`
                                                    p-2.5 md:p-3 lg:p-4 rounded-lg md:rounded-xl mb-3 md:mb-4
                                                    ${item.color.split(' ')[0]} 
                                                    group-hover:scale-110 transition-transform duration-300
                                                `}>
                                                    <Icon className="h-7 w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
                                                </div>
                                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                                                    {item.title}
                                                </h2>
                                                <p className="text-xs md:text-sm lg:text-base text-muted-foreground px-2">
                                                    {item.description}
                                                </p>
                                            </div>

                                            <div className="flex-1 flex flex-col justify-between">
                                                <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                                                    {item.features.map((feature, idx) => (
                                                        <li key={idx} className="flex items-start gap-2 md:gap-3">
                                                            <Check className="h-4 w-4 md:h-5 md:w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                                            <span className="text-xs md:text-sm text-muted-foreground">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                <Button 
                                                    className="w-full group-hover:scale-105 transition-transform duration-300 text-sm md:text-base"
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Get Started
                                                </Button>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}