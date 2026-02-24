import json
from storage import load_accounts, save_accounts
from logger import get_logger

logger = get_logger("mafile")

def import_mafile(mafile_json: str):
    try:
        data = json.loads(mafile_json)

        required = [
            "shared_secret",
            "identity_secret",
            "steamid"
        ]

        for r in required:
            if r not in data:
                raise Exception(f"Missing field: {r}")

        accounts = load_accounts()

        account = {
            "steamid": data["steamid"],
            "account_name": data.get("account_name", ""),
            "shared_secret": data["shared_secret"],
            "identity_secret": data["identity_secret"]
        }

        accounts.append(account)
        save_accounts(accounts)

        logger.info(f"Imported account {account['steamid']}")
        return True

    except Exception:
        logger.exception("Import failed")
        return False