import { Document, Schema, model } from "mongoose"
import { IPerformer } from "./activityPerformer"
import { IType } from "./activityType"

export interface IActivity extends Document {
  activityType: IType
  performer: IPerformer
  description: string
  deadlineDate: Date
}

const SavedActivitySchema = new Schema({});
export const SavedActivity = model<IActivity>('savedActivity', SavedActivitySchema);