import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface signItemProps {
  href: string;
  label: string;
  icon: string;
}

const SignItem = ({ href, label, icon }: signItemProps) => {
  return (
    <Link href={href}>
      <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
        <Image
          src={icon}
          alt="login"
          width={20}
          height={20}
          className="invert-colors lg:hidden"
        />
        <span className="primary-text-gradient max-lg:hidden">{label}</span>
      </Button>
    </Link>
  );
};

export default SignItem;
