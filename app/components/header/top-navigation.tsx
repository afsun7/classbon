"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuItems } from "./const/menu-list-header";
import clsx from "clsx";

export const TopNavigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-x-8 mr-12">
      {menuItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <li key={`navigation-${item.href}`}>
            <Link
              href={item.href}
              className={clsx("hover:text-primary transition-colors pb-2", {
                "border-b-2 dark:text-primary  dark:border-primary/30":
                  isActive,
              })}
              // className={`hover:text-primary transition-colors pb-2 ${
              //   isActive &&
              //   "
              // }`}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
