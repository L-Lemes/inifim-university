import { Tab } from "./Tab";
import { Row } from "./Row";
import { SystemButton } from "./SystemButton";

import { X } from "@phosphor-icons/react/dist/ssr";
import { useTabsControl } from "@/hooks/useTabsControl";

export const ConfigurationTab = () => {
  const { showTabOpen } = useTabsControl();
  return (
    <Tab
      title="CONFIGURAÇÕES"
      className={!showTabOpen.configurationTabIsOpen ? "translate-y-full" : ""}
    >
      <section>
        <h3 className="text-sm font-medium">ÁUDIO</h3>
        <div className="[&>:nth-child(2n+1)]:bg-[#0000004d] mt-4 font-sm">
          <Row title="Volume Geral" value="100%" />
          <Row title="Volume de Efeitos Sonoros" value="100%" />
          <Row title="Volume da Música" value="100%" />
        </div>
      </section>
      <section>
        <h3 className="text-sm font-medium">TEXTO</h3>
        <div className="[&>:nth-child(2n+1)]:bg-[#0000004d] mt-4 font-sm">
          <Row title="Idioma" value="pt-br" />
          <Row title="Tamanho da font" value="100%" />
        </div>
      </section>
      <div className="fixed bottom-6 left-1/2 z-10 -translate-x-1/2">
        <SystemButton clicked={false}>
          <X width={22} height={22} color="#DFEAEC" />
        </SystemButton>
      </div>
    </Tab>
  );
};
