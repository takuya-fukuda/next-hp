"use client";

export default function StaffHeading() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full bg-[#333333]">
        <img src="/images/eye-1.jpg" alt="" className="h-auto w-full object-cover" />
        <h1 className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-[16px] font-medium tracking-[0.06em] text-black md:text-[18px]">
          <span className="px-2 py-1">スタッフ紹介</span>
        </h1>
      </div>

      <div className="mx-auto w-[90%] max-w-[1240px] py-3">
        <nav className="text-[11px] text-black">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:opacity-70">
                Hair Stage Re:birth HOME
              </a>
            </li>
            <li className="text-[10px]">&gt;</li>
            <li className="text-black">スタッフ紹介</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
