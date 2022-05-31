import { Response, Request } from "express"
import { IActivity, SavedActivity } from "./../../types/activity"
import ActivityModel from "../../models/activity"

const getActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    const activities: typeof SavedActivity[] = await ActivityModel.find()
    res.status(200).json({ activities })
  } catch (error) {
    throw error
  }
}

const addActivity = async (req: Request, res: Response): Promise<void> => {
    try {
      const body = req.body as Pick<IActivity, "activityType" | "description" | "performer" | "deadlineDate">
  
      const activity = new ActivityModel({
        activityType: body.activityType,
        description: body.description,
        performer: body.performer,
        deadlineDate: Date.toString()
      })
  
      const newActivity= await activity.save()
      const allActivities: IActivity[] = await activity.find()
  
      res
        .status(201)
        .json({ message: "Activity added", activity: newActivity, activities: allActivities })
    } catch (error) {
      throw error
    }
  }