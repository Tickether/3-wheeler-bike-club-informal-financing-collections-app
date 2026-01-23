import mongoose from "mongoose"

const SaleSchema = new mongoose.Schema(
    {
        branch: {
            type: String,
            enum: ["kasoa", "kumasi"],
        },
        customer: {
            firstname: {
                type: Number,
            },
            othername: {
                type: Number,
            },
            lastname: {
                type: String,
            },
            phone: {
                type: String,
            },
        },
        vehicle: {
            type: {
                type: String,
                enum: ["motorcycle", "tricycle"],
            },
            model: {
                type: String,
            },
            year: {
                type: String,
            },
            color: {
                type: String,
            },
            vin: {
                type: String,
            },
            papers: {
                type: String,
            },
        },
        amount: {
            type: Number,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Add timestamps
    }

)

const Sale = mongoose.models.Sale || mongoose.model("Sale", SaleSchema)

export default Sale