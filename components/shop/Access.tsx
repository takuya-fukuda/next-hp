"use client";

export default function Access() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-[90%] max-w-[1240px] pb-16 md:pb-20">
        <h2 className="text-[18px] font-medium tracking-[0.12em] md:text-[20px]">
          <span className="mr-3 font-oswald text-[16px] tracking-[0.2em] text-[#222222]">
            ACCESS
          </span>
          アクセス
        </h2>

        <div className="mt-6">
          <iframe
            className="h-[320px] w-full border-0 md:h-[420px] lg:h-[480px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2312.5497989913224!2d135.811519713225!3d34.945596873292025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010f01a74a41c7%3A0x6b529c6fc7cb47b2!2sHair%20Stage%20Re%3Abirth!5e0!3m2!1sja!2sjp!4v1681991216858!5m2!1sja!2sjp"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hair Stage Re:birth アクセスマップ"
          />
        </div>
      </div>
    </section>
  );
}
