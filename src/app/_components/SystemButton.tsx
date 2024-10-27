import { HTMLAttributes } from "react";

interface ISystemButtonProps extends HTMLAttributes<HTMLButtonElement> {
  name?: string;
  children: React.ReactNode;
  clicked?: boolean;
}

export const SystemButton = ({
  name,
  children,
  clicked = false,
  ...props
}: ISystemButtonProps) => {
  return clicked ? (
    <button
      className="w-fit h-fit bg-gradient-to-br from-[#1DACC8] to-[#0A3943] p-0.5 rounded-full shadow-system-button bg-opacity-50"
      {...props}
    >
      <div className="w-fit h-fit bg-gradient-to-br from-[#000] to-[#17869C] p-1.5 rounded-full shadow-system-button-clicked">
        {children}
      </div>
    </button>
  ) : (
    <button
      type="button"
      className="w-fit h-fit bg-gradient-to-br from-[#1DACC8] to-[#0A3943] p-2 rounded-full shadow-system-button"
      {...props}
    >
      {children}
    </button>
  );
};
