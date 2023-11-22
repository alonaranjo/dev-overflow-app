import { SidebarLink } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface menuItemProps {
  item: SidebarLink;
  isActive: boolean;
}

const MenuItem = ({ item, isActive }: menuItemProps) => {
  return (
    <Link
      href={item.route}
      className={`${
        isActive
          ? "primary-gradient rounded-lg text-light-900"
          : "text-dark300_light900"
      } flex items-center justify-start gap-4 bg-transparent p-4`}
    >
      <Image
        src={item.imgURL}
        alt="item.label"
        width={20}
        height={20}
        className={`${isActive ? "" : "invert-colors"}`}
      />
      <p className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}>
        {item.label}
      </p>
    </Link>
  );
};

export default MenuItem;
