"use client";

import { useMemo, useState } from "react";

const navItems = [
  { href: "/", label: "ホーム", subLabel: "HOME" },
  { href: "/menu/", label: "メニュー", subLabel: "MENU" },
  { href: "/shop/", label: "店舗案内", subLabel: "SHOP" },
  { href: "/staff/", label: "スタッフ紹介", subLabel: "STAFF" },
  { href: "/contact/", label: "お問い合わせ", subLabel: "CONTACT" },
];

export default function HomeFirstSection() {
  const [isOpen, setIsOpen] = useState(false);
  const panelClass = useMemo(
    () => (isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"),
    [isOpen]
  );

  return (
    <section className="w-full">
      <header
        id="header"
        className="sticky top-0 z-50 w-full bg-white lg:static"
      >
        <div className="mx-auto flex w-[90%] max-w-[1100px] items-center justify-between py-4 lg:py-5">
          <div className="flex items-center">
            <a href="/" className="block">
              <img
                src="/images/head_logo.png"
                alt="Hair Stage Re:birth"
                className="h-12 w-auto lg:h-[70px]"
              />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2 text-center text-[14px]">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="block px-8 py-2 transition-opacity hover:opacity-70"
                    >
                      <b className="block text-[14px] font-normal tracking-[0.01em]">
                        {item.label}
                      </b>
                      <span className="block text-[12px] tracking-[0.01em] text-black">
                        {item.subLabel}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="https://beauty.hotpepper.jp/slnH000647335"
              target="_blank"
              rel="noopener"
              className="hidden items-center justify-center border border-black px-6 py-3 text-[14px] font-semibold text-black transition-colors hover:bg-black hover:text-white lg:flex"
            >
              ご予約はこちら
            </a>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative flex h-10 w-24 items-center justify-center gap-2 border border-black text-[12px] tracking-[0.2em] text-black lg:hidden"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <span className="sr-only">MENU</span>
              <span className="absolute left-2 top-2 h-[2px] w-6 bg-black"></span>
              <span className="absolute left-2 top-4 h-[2px] w-6 bg-black"></span>
              <span className="absolute left-2 top-6 h-[2px] w-6 bg-black"></span>
              <span className="ml-6">MENU</span>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden transition-all duration-300 lg:hidden ${panelClass}`}
        >
          <nav className="border-t border-[#dddddd] bg-white">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between border-b border-[#dddddd] px-6 py-4 text-[14px]"
                  >
                    <span className="font-normal">{item.label}</span>
                    <span className="text-[12px] text-[#000]">{item.subLabel}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div id="mainImg" className="w-full bg-transparent py-0">
        <div className="mx-auto hidden max-w-[1920px] lg:block">
          <img
            src="/images/main.jpg"
            alt=""
            className="h-[800px] w-full object-cover"
          />
        </div>
        <div className="mx-auto block max-w-[750px] lg:hidden">
          <img
            src="/images/main.jpg"
            alt="アートボード 2"
            className="h-[1000px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
