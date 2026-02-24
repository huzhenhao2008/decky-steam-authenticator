import {
  definePlugin,
  PanelSection,
  PanelSectionRow
} from "@decky/ui";

import "./style.css";
import { useAccounts } from "./hooks/useAccounts";
import AccountCard from "./components/AccountCard";
import ImportMafile from "./components/ImportMafile";

function Content() {
  const { accounts, refresh } = useAccounts();

  return (
    <PanelSection title="Steam Authenticator">
      <PanelSectionRow>
        <ImportMafile onImported={refresh} />
      </PanelSectionRow>

      {accounts.map((acc) => (
        <AccountCard key={acc.steamid} account={acc} />
      ))}
    </PanelSection>
  );
}

export default definePlugin(() => ({
  title: <div>Steam Auth</div>,
  content: <Content />
}));