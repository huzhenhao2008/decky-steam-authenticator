import logging

LOG_PATH = "/tmp/decky-steam-auth.log"

def get_logger(name: str):
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)

    if not logger.handlers:
        fh = logging.FileHandler(LOG_PATH)
        fmt = logging.Formatter(
            "%(asctime)s [%(levelname)s] %(name)s: %(message)s"
        )
        fh.setFormatter(fmt)
        logger.addHandler(fh)

    return logger