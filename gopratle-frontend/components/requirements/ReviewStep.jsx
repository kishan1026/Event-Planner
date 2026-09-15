export default function ReviewStep({ formData }) {
    return (
      <div className="space-y-6">
  
        {/* Event Details */}
        <div className="rounded-xl border border-gray-200 p-5">
  
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Event Details
          </h3>
  
          <div className="grid gap-4 sm:grid-cols-2">
  
            <ReviewItem
              label="Event Name"
              value={formData.eventName}
            />
  
            <ReviewItem
              label="Event Type"
              value={formData.eventType}
            />
  
            <ReviewItem
              label="Start Date"
              value={formData.startDate}
            />
  
            <ReviewItem
              label="End Date"
              value={formData.endDate}
            />
  
            <ReviewItem
              label="Location"
              value={formData.location}
            />
  
            <ReviewItem
              label="Venue"
              value={formData.venue || "Not provided"}
            />
  
            <ReviewItem
              label="Category"
              value={formData.category}
            />
  
          </div>
  
        </div>
  
        {/* Category Details */}
        <div className="rounded-xl border border-gray-200 p-5">
  
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Category Details
          </h3>
  
          {formData.category === "planner" && (
            <div className="grid gap-4 sm:grid-cols-2">
  
              <ReviewItem
                label="Number of Guests"
                value={formData.guestCount}
              />
  
              <ReviewItem
                label="Budget"
                value={formData.budget}
              />
  
              <ReviewItem
                label="Theme"
                value={formData.theme}
              />
  
            </div>
          )}
  
          {formData.category === "performer" && (
            <div className="grid gap-4 sm:grid-cols-2">
  
              <ReviewItem
                label="Performance Type"
                value={formData.performanceType}
              />
  
              <ReviewItem
                label="Number of Performers"
                value={formData.numberOfPerformers}
              />
  
              <ReviewItem
                label="Duration"
                value={`${formData.performanceDuration} minutes`}
              />
  
              <ReviewItem
                label="Genre / Style"
                value={formData.genre}
              />
  
            </div>
          )}
  
          {formData.category === "crew" && (
            <div className="grid gap-4 sm:grid-cols-2">
  
              <ReviewItem
                label="Crew Type"
                value={formData.crewType}
              />
  
              <ReviewItem
                label="Number of Crew"
                value={formData.numberOfCrew}
              />
  
              <ReviewItem
                label="Required Skills"
                value={formData.requiredSkills}
              />
  
              <ReviewItem
                label="Working Hours"
                value={`${formData.workingHours} hours`}
              />
  
            </div>
          )}
  
        </div>
  
        {/* Additional Requirements */}
        <div className="rounded-xl border border-gray-200 p-5">
  
          <h3 className="mb-4 text-lg font-semibold text-gray-900">
            Additional Requirements
          </h3>
  
          <p className="text-sm leading-6 text-gray-600">
            {formData.additionalRequirements || "None"}
          </p>
  
        </div>
  
      </div>
    );
  }
  
  function ReviewItem({ label, value }) {
    return (
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
          {label}
        </p>
  
        <p className="mt-1 font-medium capitalize text-gray-800">
          {value}
        </p>
      </div>
    );
  }