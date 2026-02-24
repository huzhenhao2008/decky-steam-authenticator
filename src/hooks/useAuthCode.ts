import { useEffect, useState } from "react";
import { callPluginMethod } from "../api";

export function useAuthCode(account) {
  const [code, setCode] = useState<string>("-----");
  const [secondsLeft, setSecondsLeft] = useState<number>(30);

  const tick = async () => {
    const now = Math.floor(Date.now() / 1000);
    const remain = 30 - (now % 30);
    setSecondsLeft(remain);

    try {
      const res = await callPluginMethod("get_code", {
        shared_secret: account.shared_secret,
      });
      setCode(res.result);
    } catch (e) {
      console.error("Code fetch failed", e);
    }
  };

  useEffect(() => {
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [account.shared_secret]);

  return { code, secondsLeft };
}