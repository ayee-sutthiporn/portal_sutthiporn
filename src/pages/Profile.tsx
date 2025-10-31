import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="mx-auto max-w-xl">
      <h2 className="text-3xl font-bold">Profile</h2>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <dl className="grid grid-cols-3 gap-3 text-sm">
          <dt className="text-slate-500">User ID</dt>
          <dd className="col-span-2 font-medium">{user?.id}</dd>
          <dt className="text-slate-500">Name</dt>
          <dd className="col-span-2 font-medium">{user?.name}</dd>
          <dt className="text-slate-500">Email</dt>
          <dd className="col-span-2 font-medium">{user?.email}</dd>
        </dl>
      </div>
    </div>
  );
}
