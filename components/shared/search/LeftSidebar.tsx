"use client";

import { sidebarLinks } from "@/constants/constants";
import { usePathname } from "next/navigation";
import MenuItem from "../MenuItem";
import { SignedOut } from "@clerk/nextjs";
import SignItem from "../SignItem";

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <section
      className="background-light900_dark200 light-border 
      sticky left-0 top-0 flex h-screen flex-col justify-between 
      overflow-y-auto border-r p-6 pt-36 shadow-light-300 
      dark:shadow-none max-sm:hidden lg:w-[266px] custom-scrollbar"
    >
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <section key={item.route}>
              <MenuItem item={item} isActive={isActive} />
            </section>
          );
        })}
        <SignedOut>
          <div className="flex flex-col gap-3">
            <SignItem
              href="/sign-in"
              label="Log In"
              icon="/assets/icons/account.svg"
            />
            <SignItem
              href="/sign-up"
              label="Sign Up"
              icon="/assets/icons/sign-up.svg"
            />
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
