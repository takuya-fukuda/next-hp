"use client";

const qaItems = [
  { question: "サロン歴は？", answer: "19年です！" },
  {
    question: "得意なカットは？",
    answer: "メンズカット、子供のカット、ショートカットが得意です！",
  },
  {
    question: "趣味は？",
    answer: "音楽を聴く、映画鑑賞、ジョギング、トレーニングです！",
  },
  { question: "好きな言葉は？", answer: "夢は信じていれば必ず叶う！" },
  {
    question: "どうしてサロンを開業したのですか？",
    answer:
      "母親がやりたかった職業でもあり、父親の同級生が理美容業界のカリスマでずっと憧れがあったからです！",
  },
  {
    question: "お客様へメッセージはありますか？",
    answer:
      "ショートスタイルが大好きですので、普段どういったところを気にしているのか、悩んでいるのか、細かいカウンセリングでしっかりサポートしていければと思います！",
  },
  {
    question: "休日は何をしていますか？",
    answer: (
      <>
        訪問出張カットという福祉分野での活動をしています。
        <br />
        主に福祉施設、在宅などに施術させてもらってます。
        <br />
        あとは子供たちと遊んでいます！
      </>
    ),
  },
  { question: "出身はどこですか？", answer: "京都の宇治出身です！" },
  { question: "尊敬する人はいますか？", answer: "他界した祖父を尊敬しています！" },
  {
    question: "やりがいを感じる時はいつですか？",
    answer: "お客様がリピートしてもらえた時、笑ってくれた時です！",
  },
  {
    question: "大切にしていることは何ですか？",
    answer:
      "まずはお客様の目線に立つ事、お客様が第一優先であること。お客様が何を求めているのかをしっかり寄り添うことを大事にしています！",
  },
];

export default function Profile() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[90%] max-w-[1240px] py-12 md:py-16">
        <div className="flex flex-col-reverse items-center gap-6 md:flex-row md:items-center md:justify-between md:gap-0">
          <figure className="w-full md:w-[48%]">
            <img src="/images/prf_img.jpg" alt="福田 数也" className="h-auto w-full" />
          </figure>
          <p className="w-full text-center text-[34px] font-bold leading-[1.4] text-[#222222] md:w-[48%] md:text-left md:text-[60px] font-mincho">
            <span className="block text-[24px] text-[#999999] md:text-[36px]">
              オーナー
            </span>
            福田 数也
            <b className="mt-1 block text-[20px] text-[#333333] md:ml-4 md:mt-0 md:inline md:text-[30px]">
              Kazuya Fukuda
            </b>
          </p>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-y-6 md:mt-20 md:grid-cols-2 md:gap-x-[4%] md:gap-y-10">
          {qaItems.map((item) => (
            <li key={item.question} className="border-b border-[#cccccc] pb-6 md:pb-10">
              <p className="relative pl-9 text-[14px] leading-relaxed text-[#333333] before:absolute before:left-0 before:top-[3px] before:flex before:h-[20px] before:w-[20px] before:items-center before:justify-center before:bg-black before:text-[12px] before:font-normal before:text-white before:content-['Q'] md:text-[16px] md:before:top-[2px] md:before:h-[25px] md:before:w-[25px] md:before:text-[14px]">
                {item.question}
              </p>
              <p className="relative mt-2 pl-9 text-[14px] font-semibold leading-relaxed text-[#333333] before:absolute before:left-0 before:top-[3px] before:flex before:h-[20px] before:w-[20px] before:items-center before:justify-center before:bg-[#999999] before:text-[12px] before:font-normal before:text-white before:content-['A'] md:text-[16px] md:before:top-[2px] md:before:h-[25px] md:before:w-[25px] md:before:text-[14px]">
                {item.answer}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
