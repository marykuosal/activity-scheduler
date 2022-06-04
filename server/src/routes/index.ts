import { Router } from "express"
import { getActivities, addActivity, updateActivity, deleteActivity } from "../controllers/activities"

const router: Router = Router()

router.get("/activities", getActivities)

router.post("/add-activity", addActivity)

router.put("/edit-activity/:id", updateActivity)

router.delete("/delete-activity/:id", deleteActivity)

export default router