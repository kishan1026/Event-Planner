export default function PlannerFields({ formData, setFormData }) {
    return (
      <div className="space-y-5">
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Number of Guests
          </label>
  
          <input
            type="number"
            min="1"
            value={formData.guestCount}
            onChange={(e) =>
              setFormData({
                ...formData,
                guestCount: e.target.value,
              })
            }
            placeholder="e.g. 200"
            className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Budget
          </label>
  
          <input
            type="number"
            min="0"
            value={formData.budget}
            onChange={(e) =>
              setFormData({
                ...formData,
                budget: e.target.value,
              })
            }
            placeholder="e.g. 50000"
           className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Theme
          </label>
  
          <input
            type="text"
            value={formData.theme}
            onChange={(e) =>
              setFormData({
                ...formData,
                theme: e.target.value,
              })
            }
            placeholder="e.g. Modern"
            className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
      </div>
    );
  }