export default function CrewFields({ formData, setFormData }) {
    return (
      <div className="space-y-5">
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Crew Type
          </label>
  
          <input
            type="text"
            value={formData.crewType}
            onChange={(e) =>
              setFormData({
                ...formData,
                crewType: e.target.value,
              })
            }
            placeholder="e.g. Sound, Lighting, Camera"
            className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Number of Crew Members
          </label>
  
          <input
            type="number"
            min="1"
            value={formData.numberOfCrew}
            onChange={(e) =>
              setFormData({
                ...formData,
                numberOfCrew: e.target.value,
              })
            }
            placeholder="e.g. 5"
       className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Required Skills
          </label>
  
          <input
            type="text"
            value={formData.requiredSkills}
            onChange={(e) =>
              setFormData({
                ...formData,
                requiredSkills: e.target.value,
              })
            }
            placeholder="e.g. Audio mixing"
            className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Working Hours
          </label>
  
          <input
            type="number"
            min="1"
            value={formData.workingHours}
            onChange={(e) =>
              setFormData({
                ...formData,
                workingHours: e.target.value,
              })
            }
            placeholder="e.g. 8"
           className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
      </div>
    );
  }