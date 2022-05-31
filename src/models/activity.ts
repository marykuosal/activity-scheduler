import { getModelForClass, prop } from "@typegoose/typegoose";
import { Schema as _Schema, model } from "mongoose";
import { IPerformer } from "../types/activityPerformer";
import { IType } from "../types/activityType";

class activitySchema {
    @prop({ required: true })
    public activityType!: IType;

    @prop()
    public performer?: IPerformer;

    @prop({ required: true })
    public description!: string;

    @prop({ required: true })
    public deadlineDate!: Date; 
}

const ActivityModel = getModelForClass(activitySchema);

export default ActivityModel;