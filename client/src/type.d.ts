interface IActivity {
    _id: string
    activityType: IType
    performer: IPerformer
    description: string
    deadlineDate: Date
  }
  
interface IPerformer {
    name: "John" | "Tony" | "Tom"
  }

  interface IType extends Document {
    type: "Mowing" | "Fertilisation" | "Irrigation" | "Aeration"
  }
  
  type ApiDataType = {
    message: string
    status: string
    activities: IActivity[]
    activity?: IActivity
  }