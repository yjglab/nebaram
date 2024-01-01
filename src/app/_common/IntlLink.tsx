"use client";

import { AppPathnames } from "@/config";
import { Link } from "@/navigation";
import classNames from "classnames";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";

export default function IntlLink<Pathname extends AppPathnames>({
  href,
  ...rest
}: ComponentProps<typeof Link<Pathname>>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={classNames(
        "relative duration-200 text-sm flex items-center",
        isActive
          ? "text-white md:border-b-2 md:border-b-indigo-400"
          : "text-gray-400 hover:text-gray-200"
      )}
      href={href}
      {...rest}
    />
  );
}
