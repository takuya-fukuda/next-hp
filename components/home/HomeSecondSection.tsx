"use client";

const newsItems = [
  {
    date: "2026/01/06",
    title: "2026年１月〜定休日のご案内☆",
    href: "https://hairstagerebirth.com/news/2026%e5%b9%b4%ef%bc%91%e6%9c%88%e3%80%9c%e5%ae%9a%e4%bc%91%e6%97%a5%e3%81%ae%e3%81%94%e6%a1%88%e5%86%85%e2%98%86/",
  },
  {
    date: "2026/01/06",
    title: "訪問出張カットのご案内☆",
    href: "https://hairstagerebirth.com/news/%e9%86%8d%e9%86%90%e3%80%81%e7%9f%b3%e7%94%b0%e3%80%81%e6%97%a5%e9%87%8e%e3%80%81%e5%be%a1%e8%94%b5%e5%b1%b1%e5%91%a8%e8%be%ba%e3%81%ae%e5%80%8b%e4%ba%ba%e5%ae%85%e3%81%ae%e8%a8%aa%e5%95%8f%e5%87%ba-2/",
  },
];

export default function HomeSecondSection() {
  return (
    <section id="front_top_content" className="py-[60px]">
      <div className="mx-auto w-[90%] max-w-[1240px]">
        <div className="listTitle">
          <h1 className="title first top-loop text-center">
            <span className="block font-mincho text-[1.6rem] leading-[1.6] md:text-[2.2rem]">
              <b className="mb-10 block text-[1.6rem] text-[#999] md:text-[2rem]">
                NEWS
              </b>
              お知らせ
            </span>
          </h1>
        </div>

        <ul className="postlist mt-6">
          {newsItems.map((item) => (
            <li
              key={item.href}
              className="border-b border-dotted border-[#dddddd] py-4"
            >
              <div className="flex flex-wrap items-center gap-2 text-[14px]">
                <p className="inline-flex items-center bg-black px-2 py-1 text-[12px] text-white">
                  <a href="https://hairstagerebirth.com/news/" className="text-white">新着情報</a>
                </p>
                <p className="text-[12px]">{item.date}</p>
                <span className="text-[12px]">│</span>
                <p className="text-[14px]">
                  <a href={item.href} className="hover:opacity-70">
                    {item.title}
                  </a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
