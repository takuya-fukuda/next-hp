"use client";

const cutMenu = [
  { label: "大人", price: "4,500円" },
  { label: "高校生・大学生", price: "4,000円" },
  { label: "中学生", price: "3,500円" },
  { label: "Kidsカット（シャンプーなし）", price: "2,500円" },
  { label: "前髪カット", price: "800円" },
];

const colorMenu = [
  { label: "ショート", price: "5,000円〜" },
  { label: "ミディアム", price: "6,000円〜" },
  { label: "ロング", price: "7,000円〜" },
];

const permMenu = [
  { label: "レギュラー", price: "6,000円" },
  { label: "スパイラル", price: "7,000円" },
  { label: "ツイスト", price: "8,000円" },
  { label: "縮毛矯正", price: "15,000円〜" },
];

const treatmentMenu = [
  { label: "トリートメント（カット別）", price: "3,500円" },
];

const plusMenu = [
  { label: "頭皮クレンジングスキャルプ", price: "1,500円" },
  { label: "単品は3,500円", price: "" },
  { label: "シェービング", price: "1,000円" },
  { label: "単品は2,000円", price: "" },
  { label: "レディースシェービング", price: "2,200円" },
  { label: "ヘッドスパ", price: "2,000円" },
  { label: "単品は4,000円", price: "" },
  { label: "シャンプー", price: "2,200円" },
];

export default function MenuSection() {
  return (
    <section className="w-full bg-white">
      <div className="w-full">
        <img
          src="/images/eye-1.jpg"
          alt="メニュー"
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="mx-auto w-[90%] max-w-[1240px] py-10">
        <nav className="text-[12px] text-[#777777]">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <a href="/" className="hover:opacity-70">
                Hair Stage Re:birth HOME
              </a>
            </li>
            <li className="text-[10px]">&gt;</li>
            <li className="text-black">メニュー</li>
          </ol>
        </nav>

        <h1 className="mt-5 font-mincho text-[28px] tracking-[0.08em] md:text-[34px]">
          メニュー
        </h1>
      </div>

      <div id="full-wrapper">
        <div id="content" className="wide w-full">
          <div className="mx-auto w-[90%] max-w-[1240px] pb-20">
            <div className="mt-8 space-y-10">
              <div className="border-t border-dotted border-[#dddddd] pt-8">
                <h2 className="text-[18px] font-semibold tracking-[0.12em] md:text-[20px]">
                  CUT MENU{" "}
                  <span className="ml-3 text-[12px] font-normal tracking-[0.2em] text-[#999999]">
                    カットメニュー
                  </span>
                </h2>
                <ul className="mt-6 space-y-3 text-[15px] md:text-[16px]">
                  {cutMenu.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between border-b border-dotted border-[#dddddd] pb-3"
                    >
                      <span>{item.label}</span>
                      {item.price ? (
                        <span className="text-[14px] text-[#333333]">
                          {item.price}
                        </span>
                      ) : (
                        <span className="text-[12px] text-[#777777]"> </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-dotted border-[#dddddd] pt-8">
                <h2 className="text-[18px] font-semibold tracking-[0.12em] md:text-[20px]">
                  COLOR MENU{" "}
                  <span className="ml-3 text-[12px] font-normal tracking-[0.2em] text-[#999999]">
                    カラーメニュー（カット別）
                  </span>
                </h2>
                <ul className="mt-6 space-y-3 text-[15px] md:text-[16px]">
                  {colorMenu.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between border-b border-dotted border-[#dddddd] pb-3"
                    >
                      <span>{item.label}</span>
                      {item.price ? (
                        <span className="text-[14px] text-[#333333]">
                          {item.price}
                        </span>
                      ) : (
                        <span className="text-[12px] text-[#777777]"> </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-dotted border-[#dddddd] pt-8">
                <h2 className="text-[18px] font-semibold tracking-[0.12em] md:text-[20px]">
                  PERM MENU{" "}
                  <span className="ml-3 text-[12px] font-normal tracking-[0.2em] text-[#999999]">
                    パーマメニュー（カット別）
                  </span>
                </h2>
                <ul className="mt-6 space-y-3 text-[15px] md:text-[16px]">
                  {permMenu.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between border-b border-dotted border-[#dddddd] pb-3"
                    >
                      <span>{item.label}</span>
                      {item.price ? (
                        <span className="text-[14px] text-[#333333]">
                          {item.price}
                        </span>
                      ) : (
                        <span className="text-[12px] text-[#777777]"> </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-dotted border-[#dddddd] pt-8">
                <h2 className="text-[18px] font-semibold tracking-[0.12em] md:text-[20px]">
                  TREATMENT MENU{" "}
                  <span className="ml-3 text-[12px] font-normal tracking-[0.2em] text-[#999999]">
                    トリートメントメニュー
                  </span>
                </h2>
                <ul className="mt-6 space-y-3 text-[15px] md:text-[16px]">
                  {treatmentMenu.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between border-b border-dotted border-[#dddddd] pb-3"
                    >
                      <span>{item.label}</span>
                      {item.price ? (
                        <span className="text-[14px] text-[#333333]">
                          {item.price}
                        </span>
                      ) : (
                        <span className="text-[12px] text-[#777777]"> </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-b border-dotted border-[#dddddd] py-8">
                <h2 className="text-[18px] font-semibold tracking-[0.12em] md:text-[20px]">
                  PLUS MENU{" "}
                  <span className="ml-3 text-[12px] font-normal tracking-[0.2em] text-[#999999]">
                    プラスメニュー
                  </span>
                </h2>
                <ul className="mt-6 space-y-3 text-[15px] md:text-[16px]">
                  {plusMenu.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center justify-between border-b border-dotted border-[#dddddd] pb-3 last:border-b-0 last:pb-0"
                    >
                      <span>{item.label}</span>
                      {item.price ? (
                        <span className="text-[14px] text-[#333333]">
                          {item.price}
                        </span>
                      ) : (
                        <span className="text-[12px] text-[#777777]"> </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
