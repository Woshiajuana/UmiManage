
import curl  from 'src/api/curl'

export const doUserLogin = data => curl('oauth/token/union', {
    ...data,
    grant_type: 'password',
}, { loading: true, method: 'get' });
