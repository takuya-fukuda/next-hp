"use client";

export default function HomeFirstSection() {
  return (
    <section className="w-full">
      <div id="mainImg" className="w-full bg-transparent py-0">
        <div className="hidden w-full lg:block">
          <img
            src="/images/main.jpg"
            alt=""
            className="h-auto w-full object-contain"
          />
        </div>
        <div className="block w-full lg:hidden">
          <img
            src="/images/main.jpg"
            alt="アートボード 2"
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
