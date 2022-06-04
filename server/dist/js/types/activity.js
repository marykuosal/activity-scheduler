"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SavedActivity = void 0;
const mongoose_1 = require("mongoose");
const SavedActivitySchema = new mongoose_1.Schema({});
exports.SavedActivity = (0, mongoose_1.model)('savedActivity', SavedActivitySchema);
