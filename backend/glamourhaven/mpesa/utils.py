from datetime import datetime


def get_formated_timestamp():
    time_stamp = datetime.now().strftime("%Y%m%d%H%M%S")
    return time_stamp
