import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

function convertUTCToSystemTimezone(utcDate) {
  return dayjs.utc(utcDate).tz(dayjs.tz.guess()).format('YYYY-MM-DD HH:mm:ss');
}

export default convertUTCToSystemTimezone;