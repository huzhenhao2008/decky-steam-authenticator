import { Button } from "@decky/ui";
import { useConfirmations } from "../hooks/useConfirmations";

export default function ConfirmationList({ account }) {
  const { confirmations, refresh, respond } =
    useConfirmations(account);

  if (!confirmations.length) {
    return (
      <div style={{ opacity: 0.6, fontSize: "12px" }}>
        No pending confirmations
      </div>
    );
  }

  return (
    <div style={{ marginTop: "8px" }}>
      {confirmations.map((c) => (
        <div
          key={c.id}
          style={{
            background: "rgba(255,255,255,0.03)",
            padding: "6px",
            borderRadius: "8px",
            marginBottom: "6px",
          }}
        >
          <div style={{ fontSize: "12px" }}>
            {c.description || "Trade Confirmation"}
          </div>

          <div style={{ display: "flex", gap: "6px", marginTop: "4px" }}>
            <Button onClick={() => respond(c, true)}>
              Approve
            </Button>
            <Button onClick={() => respond(c, false)}>
              Deny
            </Button>
          </div>
        </div>
      ))}

      <Button onClick={refresh} style={{ marginTop: "6px" }}>
        Refresh
      </Button>
    </div>
  );
}