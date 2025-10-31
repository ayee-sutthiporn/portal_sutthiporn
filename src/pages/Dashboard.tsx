import SiteCard from "../components/SiteCard";

const SITES = [
  {
    title: "Docs",
    desc: "เอกสารและคู่มือระบบ",
    href: "https://docs.example.com",
    icon: "📘",
  },
  {
    title: "Admin",
    desc: "แดชบอร์ดจัดการผู้ใช้/สิทธิ์",
    href: "https://admin.example.com",
    icon: "🛡️",
  },
  {
    title: "Analytics",
    desc: "สรุปสถิติและรายงาน",
    href: "https://analytics.example.com",
    icon: "📊",
  },
  {
    title: "Shop",
    desc: "หน้าร้าน/สินค้า",
    href: "https://shop.example.com",
    icon: "🛒",
  },
  {
    title: "Community",
    desc: "ฟอรั่ม / Discord / Social",
    href: "https://community.example.com",
    icon: "💬",
  },
];

export default function Dashboard() {
  return (
    <>
      <section className="py-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Signed in • Welcome to Ayee Portal
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight">
          Your unified{" "}
          <span className="bg-linear-to-r from-brand-500 to-brand-700 bg-clip-text text-transparent">
            Portal
          </span>
        </h1>
        <p className="mt-3 max-w-prose text-slate-600 dark:text-slate-300">
          รวมบริการทั้งหมดของคุณไว้ที่เดียว — สวยงาม ใช้งานง่าย รองรับทุกหน้าจอ
        </p>
      </section>

      <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SITES.map((s) => (
          <SiteCard
            key={s.title}
            title={s.title}
            desc={s.desc}
            href={s.href}
            icon={<span>{s.icon}</span>}
          />
        ))}
      </section>
    </>
  );
}
