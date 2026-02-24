from mafile_manager import import_mafile
from storage import load_accounts
from steam_guard import generate_code
from confirmations import fetch_confirmations, respond_confirmation

class Plugin:

    async def get_accounts(self):
        return load_accounts()

    async def import_mafile(self, content: str):
        return import_mafile(content)

    async def get_code(self, shared_secret: str):
        return generate_code(shared_secret)

    async def get_confirmations(self, account):
        return await fetch_confirmations(account)

    async def respond_confirmation(self, account, cid, key, accept):
        return await respond_confirmation(account, cid, key, accept)