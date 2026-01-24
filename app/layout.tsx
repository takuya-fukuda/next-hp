"use client";

import "./globals.css";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "ホーム", subLabel: "HOME" },
  { href: "/menu/", label: "メニュー", subLabel: "MENU" },
  { href: "/shop/", label: "店舗案内", subLabel: "SHOP" },
  { href: "/staff/", label: "スタッフ紹介", subLabel: "STAFF" },
  { href: "/contact/", label: "お問い合わせ", subLabel: "CONTACT" },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const panelClass = useMemo(
    () => (isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"),
    [isOpen]
  );

  return (
    <html lang="ja">
      <body>
        <header id="header" className="sticky top-0 z-50 w-full bg-white">
          <div className="w-full px-0">
            <div className="flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:py-4">
              <div className="flex w-full items-center justify-start lg:w-auto">
                <a href="/" className="flex items-center gap-2">
                  {/* <img
                    src="/images/head_logo.png"
                    alt=""
                    className="h-8 w-8 lg:h-10 lg:w-10"
                  /> */}
                  <img
                    src="/images/head_logo.png"
                    alt="Hair Stage Re:birth"
                    className="h-8 w-auto lg:h-12"
                  />
                </a>
              </div>

              <div className="hidden w-full items-center justify-end gap-4 lg:flex lg:w-auto">
                <nav id="mainNav">
                  <ul className="items-center text-center text-[14px] lg:flex">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="block px-6 py-1 transition-opacity hover:opacity-70"
                        >
                          <b className="block text-[13px] font-medium tracking-[0.02em] text-[#222222]">
                            {item.label}
                          </b>
                          <span className="block text-[10px] tracking-[0.08em] text-[#9a9a9a]">
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
                  className="inline-flex items-center justify-center gap-2 bg-[#2b2f33] px-6 py-3 text-[13px] font-semibold tracking-[0.08em] text-white transition-opacity hover:opacity-80"
                >
                  <i className="fa-regular fa-calendar-days mr-2 text-[90%]"></i>
                  ご予約はこちら
                </a>
              </div>
            </div>

            <div className="pb-3 lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex w-full items-center gap-3 border border-black px-3 py-2 text-[11px] tracking-[0.2em] text-black"
                aria-expanded={isOpen}
                aria-controls="mobile-nav"
              >
                <span className="sr-only">MENU</span>
                <span className="relative block h-4 w-4">
                  {isOpen ? (
                    <>
                      <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 rotate-45 bg-black"></span>
                      <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 -rotate-45 bg-black"></span>
                    </>
                  ) : (
                    <>
                      <span className="absolute left-0 top-0 h-[2px] w-4 bg-black"></span>
                      <span className="absolute left-0 top-2 h-[2px] w-4 bg-black"></span>
                      <span className="absolute left-0 top-4 h-[2px] w-4 bg-black"></span>
                    </>
                  )}
                </span>
                <span>MENU</span>
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

        {children}

        <footer id="footer" className="bg-[#f2f2f2]">
          <div className="mx-auto w-[90%] max-w-[1240px] py-10 text-center">
            <div className="text-[18px] font-semibold">Hair Stage Re:birth</div>
            <nav className="mt-6">
              <ul className="flex flex-wrap justify-center gap-6 text-[14px]">
                <li>
                  <a href="https://hairstagerebirth.com/sitemap/">繧ｵ繧､繝医・繝・・</a>
                </li>
                <li>
                  <a href="https://hairstagerebirth.com/privacy/">繝励Λ繧､繝舌す繝ｼ繝昴Μ繧ｷ繝ｼ</a>
                </li>
              </ul>
            </nav>
            <div className="mt-6 flex justify-center">
              <a
                href="https://www.instagram.com/momosakura117812/"
                target="_blank"
                rel="noopener"
                className="text-black hover:opacity-70"
              >
                <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div className="bg-[#f2f2f2] py-4 text-center text-[12px]">
            Copyright ﾂｩ 2023 Hair Stage Re:birth All rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
