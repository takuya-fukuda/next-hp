"use client";

import { useEffect } from "react";
import MenuSection from "@/components/menu/MenuSection";

export default function Page() {
  useEffect(() => {
    document.title = "メニュー | Hair Stage Re:birth";
  }, []);

  return (
    <main className="bg-white text-black">
      <MenuSection />
    </main>
  );
}
