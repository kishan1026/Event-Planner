"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function RequirementsListPage() {
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequirements = async () => {
      try {
        const response = await fetch(
          "https://event-planner-004u.onrender.com/api/requirements"
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch requirements");
        }

        setRequirements(data.data);
      } catch (error) {
        console.error("Fetch requirements error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequirements();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-lg text-gray-600">Loading requirements...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50">
        <p className="text-red-600">Error: {error}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
      <Link
    href="/requirements"
    className="text-sm font-medium text-blue-600 hover:text-blue-800"
  >
    ← Create New Requirement
  </Link>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Event Requirements
          </h1>

          <p className="mt-2 text-gray-600">
            View all submitted event requirements.
          </p>
        </div>

        {requirements.length === 0 ? (
          <div className="rounded-xl border border-gray-300 bg-white p-8 text-center">
            <p className="text-gray-600">
              No requirements found.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {requirements.map((requirement) => (
              <div
                key={requirement._id}
                className="rounded-xl border border-gray-300 bg-white p-6 shadow-sm"
              >
                {/* Event Header */}
                <div className="flex flex-col justify-between gap-3 border-b border-gray-200 pb-5 sm:flex-row">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">
                      {requirement.eventName}
                    </h2>

                    <p className="mt-1 capitalize text-gray-600">
                      {requirement.eventType.replace("-", " ")}
                    </p>
                  </div>

                  <span className="h-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-medium capitalize text-blue-700">
                    {requirement.category}
                  </span>
                </div>

                {/* Event Details */}
                <div className="grid gap-5 py-5 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Date
                    </p>
                    <p className="mt-1 text-gray-900">
                      {new Date(
                        requirement.startDate
                      ).toLocaleDateString()}{" "}
                      →{" "}
                      {new Date(
                        requirement.endDate
                      ).toLocaleDateString()}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Location
                    </p>
                    <p className="mt-1 text-gray-900">
                      {requirement.location}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-500">
                      Venue
                    </p>
                    <p className="mt-1 text-gray-900">
                      {requirement.venue || "Not specified"}
                    </p>
                  </div>
                </div>

                {/* Category Details */}
                <div className="border-t border-gray-200 pt-5">
                  <h3 className="mb-4 text-lg font-semibold text-gray-900">
                    {requirement.category === "planner"
                      ? "Planner Details"
                      : requirement.category === "performer"
                      ? "Performer Details"
                      : "Crew Details"}
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-3">
                    {Object.entries(
                      requirement.categoryDetails || {}
                    ).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-sm font-medium capitalize text-gray-500">
                          {key.replace(/([A-Z])/g, " $1")}
                        </p>

                        <p className="mt-1 text-gray-900">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Additional Requirements */}
                {requirement.additionalRequirements && (
                  <div className="mt-5 border-t border-gray-200 pt-5">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Additional Requirements
                    </h3>

                    <p className="mt-2 text-gray-600">
                      {requirement.additionalRequirements}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}