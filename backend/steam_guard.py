import base64
import hmac
import struct
import time
import hashlib

CHARS = "23456789BCDFGHJKMNPQRTVWXY"

def generate_code(shared_secret: str, timestamp=None):
    if timestamp is None:
        timestamp = int(time.time())

    time_buffer = struct.pack(">Q", int(timestamp / 30))
    key = base64.b64decode(shared_secret)

    hmac_hash = hmac.new(key, time_buffer, hashlib.sha1).digest()
    start = hmac_hash[19] & 0x0F
    code_int = struct.unpack(">I", hmac_hash[start:start+4])[0] & 0x7fffffff

    code = ""
    for _ in range(5):
        code += CHARS[code_int % len(CHARS)]
        code_int //= len(CHARS)

    return code