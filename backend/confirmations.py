from logger import get_logger

logger = get_logger("confirmations")

async def fetch_confirmations(account):
    # TODO: 接入 Steam WebAPI
    return []

async def respond_confirmation(account, conf_id, key, accept: bool):
    logger.info(
        f"{'Accepted' if accept else 'Denied'} confirmation {conf_id}"
    )
    return True