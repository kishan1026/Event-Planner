import Requirement from "../models/requirement.model.js";

const createRequirement = async (req, res) => {
  try {
    const {
      eventName,
      eventType,
      startDate,
      endDate,
      location,
      venue,
      category,
      categoryDetails,
      additionalRequirements,
    } = req.body;

    const requirement = await Requirement.create({
      eventName,
      eventType,
      startDate,
      endDate,
      location,
      venue,
      category,
      categoryDetails,
      additionalRequirements,
    });

    return res.status(201).json({
      success: true,
      message: "Requirement created successfully",
      data: requirement,
    });
  } catch (error) {
    console.error("Create requirement error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to create requirement",
      error: error.message,
    });
  }
};
const getRequirements = async (req, res) => {
    try {
      const requirements = await Requirement.find().sort({
        createdAt: -1,
      });
  
      return res.status(200).json({
        success: true,
        message: "Requirements fetched successfully",
        data: requirements,
      });
    } catch (error) {
      console.error("Get requirements error:", error);
  
      return res.status(500).json({
        success: false,
        message: "Failed to fetch requirements",
        error: error.message,
      });
    }
  };

export { createRequirement, getRequirements};