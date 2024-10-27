import Image from "next/image";

import { useTabsControl } from "@/hooks/useTabsControl";
import { SystemButton } from "./SystemButton";

import { Gear, List, UserCircle } from "@phosphor-icons/react/dist/ssr";

export const Header = () => {
  const { showTabOpen, handleToggleTabs } = useTabsControl();

  return (
    <div className="flex items-center justify-between mb-[5.5rem]">
      <Image src="/logo.svg" width={48} height={36} alt="logo da init"></Image>
      <div className="flex gap-7">
        <SystemButton
          name="config"
          onClick={() => handleToggleTabs("configurationTabIsOpen")}
          clicked={showTabOpen.configurationTabIsOpen}
        >
          <Gear width={22} height={22} color="#DFEAEC" />
        </SystemButton>
        <SystemButton
          name="config"
          onClick={() => handleToggleTabs("userTabIsOpen")}
          clicked={showTabOpen.userTabIsOpen}
        >
          <UserCircle width={22} height={22} color="#DFEAEC" />
        </SystemButton>
        <SystemButton
          name="config"
          onClick={() => handleToggleTabs("navigationTabIsOpen")}
          clicked={showTabOpen.navigationTabIsOpen}
        >
          <List width={22} height={22} color="#DFEAEC" />
        </SystemButton>
      </div>
    </div>
  );
};
