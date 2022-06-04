"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const activitySchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("ActivityModel", activitySchema);
