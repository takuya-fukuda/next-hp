"use client";

const bannerItems = [
  {
    title: "STAFF",
    label: "スタッフ紹介",
    description: "当店スタッフのプロフィールを掲載しております。",
    href: "/staff/",
    image: "/images/shop_img4.jpg",
    alt: "Hair Stage Re:birth｜スタッフ紹介",
  },
  {
    title: "SHOP",
    label: "店舗案内",
    description: "営業時間やアクセス方法を掲載しております。",
    href: "/shop/",
    image: "/images/shop_img5.jpg",
    alt: "Hair Stage Re:birth｜店舗外観",
  },
];

export default function HomeFiveSection() {
  return (
    <section className="top_banner py-[60px]">
      <div className="mx-auto w-[90%] max-w-[1240px]">
        {bannerItems.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            } ${index === 0 ? "" : "mt-[5rem] lg:mt-[8rem]"}`}
          >
            <figure className="h-[20rem] w-full lg:h-[40rem] lg:w-1/2">
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="w-full lg:w-[45%]">
              <h2 className="text-[22px] font-medium">
                <span className="mb-2 block font-oswald text-[14px] tracking-[0.2em] text-[#999]">
                  {item.title}
                </span>
                {item.label}
              </h2>
              <p className="my-8 text-[15px] leading-relaxed lg:my-12">
                {item.description}
              </p>
              <a
                href={item.href}
                className="inline-flex w-[250px] items-center justify-center border border-[#333] bg-[#333] px-8 py-6 text-[16px] font-semibold tracking-[0.1em] text-white transition-colors hover:bg-transparent hover:text-[#333] md:text-[18px]"
              >
                詳しくはこちら
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
