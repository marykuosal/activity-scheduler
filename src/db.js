import { connect } from "mongoose";

export default async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };
        connect(
            "mongodb://localhost/activity-scheduler",
            connectionParams
        );
        console.log("Connected to the database!");
    } catch (error) {
        console.log("Could not connect to the database.", error);
    }
};