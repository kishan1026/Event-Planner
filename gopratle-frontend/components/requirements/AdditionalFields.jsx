export default function AdditionalFields({ formData, setFormData }) {
    return (
      <div>
  
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Additional Requirements
          <span className="ml-2 text-xs text-gray-400">
            Optional
          </span>
        </label>
  
        <textarea
          value={formData.additionalRequirements}
          onChange={(e) =>
            setFormData({
              ...formData,
              additionalRequirements: e.target.value,
            })
          }
          placeholder="Describe any additional requirements..."
          rows={6}
         className="w-full resize-none rounded-lg border border-gray-500 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
  
        <p className="mt-2 text-xs text-gray-400">
          Add any special instructions, preferences, or other information.
        </p>
  
      </div>
    );
  }