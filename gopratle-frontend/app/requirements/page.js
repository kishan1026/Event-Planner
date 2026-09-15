import Link from "next/link";
import RequirementForm from "@/components/RequirementForm";

export default function RequirementsPage() {
  return (
    <main>
      <div className="mx-auto flex max-w-5xl justify-end px-6 pt-6">
        <Link
          href="/requirements-list"
          className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-700"
        >
          View Requirements
        </Link>
      </div>

      <RequirementForm />
    </main>
  );
}