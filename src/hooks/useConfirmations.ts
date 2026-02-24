import { useEffect, useState } from "react";
import { callPluginMethod } from "../api";

export function useConfirmations(account) {
  const [confirmations, setConfirmations] = useState<any[]>([]);

  const load = async () => {
    try {
      const res = await callPluginMethod("get_confirmations", {
        account,
      });
      setConfirmations(res.result || []);
    } catch (e) {
      console.error("Failed to fetch confirmations", e);
    }
  };

  const respond = async (conf, accept: boolean) => {
    try {
      await callPluginMethod("respond_confirmation", {
        account,
        cid: conf.id,
        key: conf.key,
        accept,
      });
      load();
    } catch (e) {
      console.error("Respond failed", e);
    }
  };

  useEffect(() => {
    load();
  }, [account.steamid]);

  return {
    confirmations,
    refresh: load,
    respond,
  };
}