import { ColumnDef } from "@tanstack/react-table";
import { Sale } from "@/hooks/useGetSales";

export const columns: ColumnDef<Sale>[] = [
    {
        accessorKey: "branch",
        header: "Branch",
    },
    {
        accessorKey: "vehicle.type",
        header: "Type",
    },
    {
        accessorKey: "vehicle.model",
        header: "Model",
    },
    {
        accessorKey: "customer.firstname",
        header: "First Name",
    },
    {   
        accessorKey: "customer.lastname",
        header: "Last Name",
    },
    {
        accessorKey: "customer.phone",
        header: "Phone",
    },
    {
        accessorKey: "amount",
        header: "Amount",
    },
    {
        accessorKey: "createdAt",
        header: "Created At",
    },
]