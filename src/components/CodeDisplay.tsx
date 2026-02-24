import { useAuthCode } from "../hooks/useAuthCode";

export default function CodeDisplay({ account }) {
  const { code, secondsLeft } = useAuthCode(account);

  return (
    <div className="code-display">
      <div>{code || "-----"}</div>
      <div style={{ fontSize: "12px", opacity: 0.6 }}>
        refresh in {secondsLeft}s
      </div>
    </div>
  );
}