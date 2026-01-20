"use client";

export default function HomeFirstSection() {
  return (
    <section className="w-full">
      <div id="mainImg" className="w-full bg-transparent py-0">
        <div className="mx-auto hidden max-w-[1920px] lg:block">
          <img
            src="/images/main.jpg"
            alt=""
            className="h-[800px] w-full object-cover"
          />
        </div>
        <div className="mx-auto block max-w-[750px] lg:hidden">
          <img
            src="/images/main.jpg"
            alt="アートボード 2"
            className="h-[1000px] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
