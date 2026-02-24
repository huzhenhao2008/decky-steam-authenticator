import CodeDisplay from "./CodeDisplay";
import ConfirmationList from "./ConfirmationList";
import StatusBadge from "./StatusBadge";

export default function AccountCard({ account }) {
  return (
    <div className="steam-auth-card">
      <div className="header">
        <b>{account.account_name || account.steamid}</b>
        <StatusBadge />
      </div>

      <CodeDisplay account={account} />
      <ConfirmationList account={account} />
    </div>
  );
}