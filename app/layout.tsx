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

        {children}

        <footer id="footer" className="bg-[#f2f2f2]">
          <div className="mx-auto w-[90%] max-w-[1240px] py-10 text-center">
            <div className="text-[18px] font-semibold">Hair Stage Re:birth</div>
            <nav className="mt-6">
              <ul className="flex flex-wrap justify-center gap-6 text-[14px]">
                <li>
                  <a href="https://hairstagerebirth.com/sitemap/">サイトマップ</a>
                </li>
                <li>
                  <a href="https://hairstagerebirth.com/privacy/">プライバシーポリシー</a>
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
            Copyright © 2023 Hair Stage Re:birth All rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
