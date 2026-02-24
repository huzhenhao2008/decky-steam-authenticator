import { useEffect, useState } from "react";
import { callPluginMethod } from "../api";
import { Account } from "../types";

export function useAccounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);

  const load = async () => {
    try {
      const res = await callPluginMethod("get_accounts", {});
      setAccounts(res.result || []);
    } catch (e) {
      console.error("Failed to load accounts", e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return {
    accounts,
    refresh: load,
  };
}