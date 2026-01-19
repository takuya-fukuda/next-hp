"use client";

export default function HomeThirdSection() {
  return (
    <section className="top_grt py-[60px]">
      <div className="mx-auto w-[90%] max-w-[1240px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full lg:w-[45%]">
            <h1 className="mb-10 text-[22px] font-medium tracking-[0.1rem]">
              <span className="mb-2 block font-oswald text-[14px] tracking-[0.2em] text-[#999]">
                GREETING
              </span>
              Hair Stage Re:birthよりご挨拶
            </h1>
            <p className="text-[15px] leading-relaxed">
              2023年4月、京都市伏見区醍醐にてサロン『Hair Stage Re:birth』としてオープンいたしました。<br />
              遠方のお客様にもご来店頂けるよう、駐車場も完備しております。
            </p>
            <p className="mt-4 text-[15px] leading-relaxed">
              当店では特にメンズカットやショートカット、お子様のカットを得意としております。その他シェービングや育毛マッサージ等のメニューもご用意しております。
            </p>
            <p className="mt-4 text-[15px] leading-relaxed">
              また、老人ホームなどの福祉施設や個人宅への出張訪問カットを行っておりますので、お気軽にご相談ください。<br />
              皆様のご来店を心よりお待ちしております。
            </p>
          </div>

          <div className="flex w-full items-start justify-between gap-4 lg:w-[50%]">
            <figure className="mt-[5rem] h-[30rem] w-[48%] lg:mt-[10rem] lg:h-[45rem]">
              <img
                src="/images/shop_img1.jpg"
                alt="Hair Stage Re:birth｜店舗外観写真"
                className="h-full w-full object-cover"
              />
            </figure>
            <figure className="h-[30rem] w-[48%] lg:h-[45rem]">
              <img
                src="/images/shop_img2.jpg"
                alt="Hair Stage Re:birth｜店舗内装"
                className="h-full w-full object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
