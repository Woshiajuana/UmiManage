
import curl  from 'src/api/curl'

export const doUserLogin = data => curl('', data, { loading: true });
