import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      trim: true,
    },

    eventType: {
      type: String,
      required: true,
      enum: [
        "corporate",
        "wedding",
        "concert",
        "festival",
        "private-party",
        "other",
      ],
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    venue: {
      type: String,
      trim: true,
      default: "",
    },

    category: {
      type: String,
      required: true,
      enum: ["planner", "performer", "crew"],
    },

    categoryDetails: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },

    additionalRequirements: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Requirement = mongoose.model(
  "Requirement",
  requirementSchema
);

export default Requirement;