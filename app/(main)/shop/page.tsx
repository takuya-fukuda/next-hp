"use client";

import { useEffect } from "react";
import ShopHeading from "@/components/shop/ShopHeading";
import Profile from "@/components/shop/Profile";
import Access from "@/components/shop/Access";

export default function Page() {
  useEffect(() => {
    document.title = "店舗案内 | Hair Stage Re:birth";
  }, []);

  return (
    <main className="bg-white text-black">
      <ShopHeading />
      <Profile />
      <Access />
    </main>
  );
}
