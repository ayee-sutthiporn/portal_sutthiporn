type Props = {
  title: string;
  desc?: string;
  href: string;
  icon?: React.ReactNode;
};

export default function SiteCard({ title, desc, href, icon }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-brand-700 text-white">
          {icon ?? <span>🔗</span>}
        </div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      {desc && (
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {desc}
        </p>
      )}
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-600 group-hover:underline">
        Open <span aria-hidden>↗</span>
      </span>
    </a>
  );
}
