import { Document } from "mongoose"

export interface IType extends Document {
  type: "Mowing" | "Fertilisation" | "Irrigation" | "Aeration"
}