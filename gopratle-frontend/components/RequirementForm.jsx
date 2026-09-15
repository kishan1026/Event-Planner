"use client";

import { useState } from "react";
import PlannerFields from "@/components/requirements/PlannerFields";
import PerformerFields from "@/components/requirements/PerformerFields";
import CrewFields from "@/components/requirements/CrewFields";
import AdditionalFields from "@/components/requirements/AdditionalFields";
import ReviewStep from "@/components/requirements/ReviewStep";

export default function RequirementForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    startDate: "",
    endDate: "",
    location: "",
    venue: "",
    category: "",

    guestCount: "",
    budget: "",
    theme: "",

    performanceType: "",
    numberOfPerformers: "",
    performanceDuration: "",
    genre: "",

    crewType: "",
    numberOfCrew: "",
    requiredSkills: "",
    workingHours: "",

    additionalRequirements: "",
  });

  const validateStepOne = () => {
    if (!formData.eventName.trim()) {
      alert("Please enter event name");
      return false;
    }

    if (!formData.eventType) {
      alert("Please select event type");
      return false;
    }

    if (!formData.startDate) {
      alert("Please select start date");
      return false;
    }

    if (!formData.endDate) {
      alert("Please select end date");
      return false;
    }

    if (formData.endDate < formData.startDate) {
      alert("End date cannot be before start date");
      return false;
    }

    if (!formData.location.trim()) {
      alert("Please enter location");
      return false;
    }

    if (!formData.category) {
      alert("Please select requirement category");
      return false;
    }

    return true;
  };

  const validateStepTwo = () => {
    if (formData.category === "planner") {
      if (!formData.guestCount) {
        alert("Please enter number of guests");
        return false;
      }

      if (!formData.budget) {
        alert("Please enter budget");
        return false;
      }

      if (!formData.theme.trim()) {
        alert("Please enter event theme");
        return false;
      }
    }

    if (formData.category === "performer") {
      if (!formData.performanceType.trim()) {
        alert("Please enter performance type");
        return false;
      }

      if (!formData.numberOfPerformers) {
        alert("Please enter number of performers");
        return false;
      }

      if (!formData.performanceDuration) {
        alert("Please enter performance duration");
        return false;
      }

      if (!formData.genre.trim()) {
        alert("Please enter genre/style");
        return false;
      }
    }

    if (formData.category === "crew") {
      if (!formData.crewType.trim()) {
        alert("Please enter crew type");
        return false;
      }

      if (!formData.numberOfCrew) {
        alert("Please enter number of crew members");
        return false;
      }

      if (!formData.requiredSkills.trim()) {
        alert("Please enter required skills");
        return false;
      }

      if (!formData.workingHours) {
        alert("Please enter working hours");
        return false;
      }
    }

    return true;
  };

  const nextStep = () => {
    if (currentStep === 1 && !validateStepOne()) {
      return;
    }

    if (currentStep === 2 && !validateStepTwo()) {
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const payload = {
        eventName: formData.eventName,
        eventType: formData.eventType,
        startDate: formData.startDate,
        endDate: formData.endDate,
        location: formData.location,
        venue: formData.venue,
        category: formData.category,

        categoryDetails:
          formData.category === "planner"
            ? {
                guestCount: Number(formData.guestCount),
                budget: Number(formData.budget),
                theme: formData.theme,
              }
            : formData.category === "performer"
            ? {
                performanceType: formData.performanceType,
                numberOfPerformers: Number(formData.numberOfPerformers),
                performanceDuration: Number(formData.performanceDuration),
                genre: formData.genre,
              }
            : {
                crewType: formData.crewType,
                numberOfCrew: Number(formData.numberOfCrew),
                requiredSkills: formData.requiredSkills,
                workingHours: Number(formData.workingHours),
              },

        additionalRequirements: formData.additionalRequirements,
      };

      const response = await fetch("https://event-planner-004u.onrender.com/api/requirements", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create requirement");
      }

      console.log("Requirement created:", data);

      setSubmitMessage("Requirement submitted successfully!");
    } catch (error) {
      console.error("Submit requirement error:", error);

      setSubmitMessage(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Requirement
          </h1>

          <p className="mt-2 text-gray-500">
            Tell us what you need for your event
          </p>
        </div>

        {/* Step Indicator */}
        <div className="mb-8 flex items-center justify-center">
          {[1, 2, 3, 4].map((step, index) => (
            <div key={step} className="flex items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                  currentStep >= step
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {step}
              </div>

              {index < 3 && (
                <div
                  className={`h-1 w-12 sm:w-20 ${
                    currentStep > step ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Names */}
        <div className="mb-6 flex justify-between px-1 text-xs font-medium text-gray-500 sm:text-sm">
          <span>Event Basics</span>
          <span>Details</span>
          <span>Additional</span>
          <span>Review</span>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl bg-white p-6 shadow-lg sm:p-8">
          {/* STEP 1 */}
          {currentStep === 1 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Event Basics
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter the basic information about your event.
                </p>
              </div>

              <div className="space-y-5">
                {/* Event Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Event Name
                  </label>

                  <input
                    type="text"
                    value={formData.eventName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        eventName: e.target.value,
                      })
                    }
                    placeholder="Enter event name"
                    className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Event Type */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Event Type
                  </label>

                  <select
                    value={formData.eventType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        eventType: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select event type</option>
                    <option value="corporate">Corporate</option>
                    <option value="wedding">Wedding</option>
                    <option value="concert">Concert</option>
                    <option value="festival">Festival</option>
                    <option value="private-party">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Dates */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Start Date
                    </label>

                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          startDate: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      End Date
                    </label>

                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          endDate: e.target.value,
                        })
                      }
                      className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Location
                  </label>

                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        location: e.target.value,
                      })
                    }
                    placeholder="Enter city or location"
                    className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Venue */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Venue
                    <span className="ml-2 text-xs text-gray-400">Optional</span>
                  </label>

                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        venue: e.target.value,
                      })
                    }
                    placeholder="Enter venue name"
                    className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Requirement Category
                  </label>

                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value,
                      })
                    }
                    className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  >
                    <option value="">Select category</option>
                    <option value="planner">Event Planner</option>
                    <option value="performer">Performer</option>
                    <option value="crew">Crew</option>
                  </select>
                </div>
              </div>

              {/* Button */}
              <div className="mt-8 flex justify-end">
                <button
                  onClick={nextStep}
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {currentStep === 2 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Category Details
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Provide details based on your selected category.
                </p>
              </div>

              {formData.category === "planner" && (
                <PlannerFields formData={formData} setFormData={setFormData} />
              )}

              {formData.category === "performer" && (
                <PerformerFields
                  formData={formData}
                  setFormData={setFormData}
                />
              )}

              {formData.category === "crew" && (
                <CrewFields formData={formData} setFormData={setFormData} />
              )}

              <div className="mt-8 flex justify-between">
                <button
                  onClick={previousStep}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  ← Back
                </button>

                <button
                  onClick={nextStep}
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {currentStep === 3 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Additional Requirements
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add anything else you want us to know.
                </p>
              </div>

              <AdditionalFields formData={formData} setFormData={setFormData} />

              <div className="mt-8 flex justify-between">
                <button
                  onClick={previousStep}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  ← Back
                </button>

                <button
                  onClick={nextStep}
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Review →
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {currentStep === 4 && (
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Review Requirement
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Review your information before submitting.
                </p>
              </div>

              <ReviewStep formData={formData} />

              <div className="mt-8 flex justify-between">
                <button
                  onClick={previousStep}
                  className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  ← Back
                </button>
                {submitMessage && (
                  <p className="mb-4 text-sm font-medium text-gray-700">
                    {submitMessage}
                  </p>
                )}

                <button
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  {isSubmitting ? "Submitting..." : "Submit Requirement"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
