import { Document, Schema, model } from "mongoose"
import { IPerformer } from "./activityPerformer"
import { IType } from "./activityType"

export interface IActivity extends Document {
  activityType: "Mowing" | "Fertilisation" | "Irrigation" | "Aeration" | undefined
  performer: "John" | "Tony" | "Tom" | undefined
  description: string
  deadlineDate: string
}

const SavedActivitySchema = new Schema({});
export const SavedActivity = model<IActivity>('savedActivity', SavedActivitySchema);