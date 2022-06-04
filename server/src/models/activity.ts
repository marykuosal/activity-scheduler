import { IActivity } from "./../types/activity"
import { model, Schema } from "mongoose"

const activitySchema: Schema = new Schema(
  {
    activityType: {
      type: String,
      required: true,
    },

    performer: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
    deadlineDate: {
        type: String,
        required: true,
      },
  },
  { timestamps: true }
)

export default model<IActivity>("ActivityModel", activitySchema)