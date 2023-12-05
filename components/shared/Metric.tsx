import Image from "next/image";
import Link from "next/link";
interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  isAuthor?: boolean;
  textStyles: string;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  isAuthor,
  textStyles,
}: MetricProps) => {
  const MetricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href && "rounded-full"}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`snall-regular line-clamp-1 ${
            isAuthor && "max-sm:hidden"
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );
  if (href) {
    return (
      <Link href={href} className="flex-center gap-1">
        {MetricContent}
      </Link>
    );
  } else {
    return <div className="flex-center flex-wrap gap-1">{MetricContent}</div>;
  }
};
export default Metric;
