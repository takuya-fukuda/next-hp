"use client";

export default function HomeSixSection() {
  return (
    <>
      <section className="top_contact relative overflow-hidden py-[60px]">
        <img
          src="/images/shop_img6.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 mx-auto w-[90%] max-w-[1240px]">
          <h2 className="text-center text-[22px] font-medium text-white">
            <span className="mb-2 block font-oswald text-[14px] tracking-[0.2em] text-white">
              RESERVATION
            </span>
            ご予約・お問い合わせ
          </h2>
          <p className="mx-auto mt-10 max-w-[700px] text-center text-[15px] leading-relaxed text-white">
            ご予約・お問い合わせは、下記よりご連絡ください。<br />
            皆様のご来店を心よりお待ちしております。
          </p>

          <div className="mx-auto mt-10 flex w-full flex-wrap gap-4 lg:max-w-[1050px]">
            <a
              href="https://beauty.hotpepper.jp/slnH000647335"
              target="_blank"
              rel="noopener"
              className="w-full rounded-[5px] border border-[#AD2F5B] bg-[#AD2F5B] p-8 text-center text-[1.6rem] font-semibold text-white transition-colors hover:bg-transparent md:text-[2rem]"
            >
              <i className="fa-regular fa-calendar-days mr-2 text-[90%]"></i>
              ご予約はこちら
              <span className="mt-2 block text-[12px] font-normal md:text-[14px]">
                ホットペッパービューティーのご予約ページが開きます
              </span>
            </a>
            <a
              href="/contact/"
              className="w-full rounded-[5px] border border-white bg-white p-8 text-center text-[1.6rem] font-semibold text-[#222] transition-colors hover:bg-transparent hover:text-white md:text-[2rem] lg:w-[49%]"
            >
              <i className="fa-solid fa-envelope mr-2 text-[90%]"></i>
              メールでのお問い合わせ
              <span className="mt-2 block text-[12px] font-normal md:text-[14px]">
                24時間365日受付
              </span>
            </a>
            <a
              href="tel:075-585-3950"
              className="w-full rounded-[5px] border border-white bg-white p-8 text-center text-[1.6rem] font-semibold text-[#222] transition-colors hover:bg-transparent hover:text-white md:text-[2rem] lg:w-[49%]"
            >
              <i className="fa-solid fa-phone mr-2 text-[90%]"></i>
              075-585-3950
              <span className="mt-2 block text-[12px] font-normal leading-[1.4] md:text-[14px]">
                平日9：30〜19：00／土日祝9：00〜19：00（定休日：月曜日、火曜日）
              </span>
            </a>
          </div>
        </div>
      </section>

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
    </>
  );
}
