import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface ITabProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: ReactNode;
}

export const Tab = ({ title, children, className }: ITabProps) => {
  return (
    <div
      className={cn(
        "absolute top-[7.75rem] left-0 w-full h-[calc(100%-7.75rem)] bg-[rgba(3,17,22,0.5)] backdrop-blur-[80px] p-6 rounded-t-3xl duration-500",
        className
      )}
    >
      <header className="w-fit px-7 pb-[1.125rem] mx-auto border-b border-[#DFEAEC] mb-14">
        <h2 className="text-lg font-semibold">{title}</h2>
      </header>
      <main className="flex flex-col gap-12">{children}</main>
    </div>
  );
};
