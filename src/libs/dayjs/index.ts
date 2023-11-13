// Librarys
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/es'

// JSON
import es from './es'

dayjs.locale(es)
dayjs.extend(utc)
dayjs.extend(localizedFormat)

export default dayjs
