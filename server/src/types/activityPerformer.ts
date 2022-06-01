import { Document } from "mongoose"

export interface IPerformer extends Document {
  name: "John" | "Tony" | "Tom"
}