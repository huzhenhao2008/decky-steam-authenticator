import { Button } from "@decky/ui";
import { callPluginMethod } from "../api";

export default function ImportMafile({ onImported }) {
  const handleImport = async () => {
    try {
      // Steam Deck Chromium 支持
      // @ts-ignore
      const picker = await window.showOpenFilePicker({
        types: [
          {
            description: "Steam mafile",
            accept: { "application/json": [".mafile"] },
          },
        ],
      });

      const file = await picker[0].getFile();
      const text = await file.text();

      await callPluginMethod("import_mafile", {
        content: text,
      });

      onImported?.();
    } catch (e) {
      console.error("Import failed", e);
    }
  };

  return <Button onClick={handleImport}>Import mafile</Button>;
}