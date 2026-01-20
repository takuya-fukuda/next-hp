"use client";

export default function HomeFourthSection() {
  return (
    <section className="top_menu relative overflow-hidden py-[60px]">
      <img
        src="/images/shop_img3.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative mx-auto w-[90%] max-w-[1240px]">
        <h2 className="text-center text-[22px] font-medium text-white">
          <span className="mb-2 block font-oswald text-[14px] tracking-[0.2em] text-white">
            MENU
          </span>
          メニュー
        </h2>

        <div className="mt-12 bg-white p-8 shadow-soft md:p-12">
          <p className="text-left text-[15px] leading-relaxed md:text-center">
            お客様のご要望に合わせ、スタイリッシュなヘアスタイルをご提供いたします。<br />
            また、シェービングや育毛マッサージなどのメニューもご用意しております。<br />
            育毛マッサージでは、頭皮をやさしくほぐし、血行を促進することで健やかな髪へ導きます。<br />
            お客様には、リラックスしてくつろげる空間をご提供し、最高のヘアスタイルを手軽にご利用いただけるよう心がけております。<br />
            是非、一度お越しくださいませ。
          </p>
          <div className="mt-8 text-center md:mt-16">
            <a
              href="/menu/"
              className="inline-flex w-[250px] items-center justify-center border border-[#333] bg-[#333] px-8 py-6 text-[16px] font-semibold tracking-[0.1em] text-white transition-colors hover:bg-transparent hover:text-[#333] md:text-[18px]"
            >
              詳しいメニューはこちら
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
