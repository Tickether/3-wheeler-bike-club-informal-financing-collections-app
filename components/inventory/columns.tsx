import { ColumnDef } from "@tanstack/react-table";
import { Inventory } from "@/hooks/useGetInventory";

export const columns: ColumnDef<Inventory>[] = [
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
        accessorKey: "vehicle.color",
        header: "Color",
    },
    {
        accessorKey: "vehicle.vin",
        header: "VIN",
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