"use client";

import { useEffect } from "react";
import StaffHeading from "@/components/staff/StaffHeading";
import Profile from "@/components/staff/Profile";

export default function Page() {
  useEffect(() => {
    document.title = "スタッフ紹介 | Hair Stage Re:birth";
  }, []);

  return (
    <main className="bg-white text-black">
      <StaffHeading />
      <Profile />
    </main>
  );
}
