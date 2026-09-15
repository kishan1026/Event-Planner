export default function PerformerFields({ formData, setFormData }) {
    return (
      <div className="space-y-5">
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Performance Type
          </label>
  
          <input
            type="text"
            value={formData.performanceType}
            onChange={(e) =>
              setFormData({
                ...formData,
                performanceType: e.target.value,
              })
            }
            placeholder="e.g. Singer, DJ, Dancer"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Number of Performers
          </label>
  
          <input
            type="number"
            min="1"
            value={formData.numberOfPerformers}
            onChange={(e) =>
              setFormData({
                ...formData,
                numberOfPerformers: e.target.value,
              })
            }
            placeholder="e.g. 3"
          className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Performance Duration (minutes)
          </label>
  
          <input
            type="number"
            min="1"
            value={formData.performanceDuration}
            onChange={(e) =>
              setFormData({
                ...formData,
                performanceDuration: e.target.value,
              })
            }
            placeholder="e.g. 60"
            className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Genre / Style
          </label>
  
          <input
            type="text"
            value={formData.genre}
            onChange={(e) =>
              setFormData({
                ...formData,
                genre: e.target.value,
              })
            }
            placeholder="e.g. Bollywood"
            className="w-full rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </div>
  
      </div>
    );
  }