import { Response, Request } from "express"
import { IActivity, SavedActivity } from "./../../types/activity"
import ActivityModel from "../../models/activity"

const getActivities = async (req: Request, res: Response): Promise<void> => {
  try {
    const activities: IActivity[] = await ActivityModel.find()
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
        deadlineDate: body.deadlineDate
      })
  
      const {activityType, description, performer, deadlineDate}: IActivity= await activity.save()
      const allActivities: IActivity[] = await ActivityModel.find();
  
      res
        .status(201)
        .json({ message: "Activity added", activity: {activityType, description, performer, deadlineDate}, activities: allActivities })
    } catch (error) {
      throw error
    }
  }

  const updateActivity = async (req: Request, res: Response): Promise<void> => {
    try {
      const {
        params: { id },
        body,
      } = req
      const updateActivity: IActivity | null = await ActivityModel.findByIdAndUpdate(
        { _id: id },
        body
      )
      const allActivities: IActivity[] = await ActivityModel.find()
      res.status(200).json({
        message: "Activity updated",
        activity: updateActivity,
        activities: allActivities,
      })
    } catch (error) {
      throw error
    }
  }

  const deleteActivity = async (req: Request, res: Response): Promise<void> => {
    try {
      const deletedActivity: IActivity | null = await ActivityModel.findByIdAndRemove(
        req.params.id
      )
      const allActivities: IActivity[] = await ActivityModel.find()
      res.status(200).json({
        message: "Activity deleted",
        activity: deletedActivity,
        activities: allActivities,
      })
    } catch (error) {
      throw error
    }
  }
  
  export { getActivities, addActivity, updateActivity, deleteActivity }