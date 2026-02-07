"use client";

const profileRows = [
  {
    label: "店名",
    value: "Hair Stage Re:birth（ヘアステージリバース）",
  },
  {
    label: "所在地",
    value: (
      <>
        〒601-1353 <br className="block md:hidden" />
        京都府京都市伏見区醍醐御園尾町26-16
      </>
    ),
  },
  {
    label: "TEL",
    value: "075-585-3950",
  },
  {
    label: "営業時間",
    value: (
      <>
        <p>【平日】9：30～19：00</p>
        <p>【土日祝】9：00～19：00</p>
      </>
    ),
  },
  {
    label: "定休日",
    value: "月曜日、火曜日",
  },
  {
    label: "駐車場",
    value: (
      <>
        有り（丸富ガレージ77番）
        <a
          href="https://goo.gl/maps/RZpdRcsE2XnZN3dF8"
          target="_blank"
          rel="noopener"
          className="ml-2 text-[13px] text-[#666666] underline underline-offset-4"
        >
          道順はこちら
        </a>
      </>
    ),
  },
  {
    label: "アクセス",
    value: "東西線 醍醐駅より徒歩10分",
  },
];

export default function Profile() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[90%] max-w-[1240px] py-12 md:py-16">
        <h2 className="text-[18px] font-medium tracking-[0.12em] md:text-[20px]">
          <span className="mr-3 font-oswald text-[16px] tracking-[0.2em] text-[#222222]">
            PROFILE
          </span>
          基本情報
        </h2>

        <table className="mt-6 w-full border-collapse text-[14px] text-[#333333] md:text-[15px]">
          <tbody>
            {profileRows.map((row) => (
              <tr key={row.label}>
                <th className="w-[120px] border border-[#dddddd] px-3 py-4 text-left font-medium md:w-[180px]">
                  {row.label}
                </th>
                <td className="border border-[#dddddd] px-3 py-4 leading-relaxed text-[#444444]">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
