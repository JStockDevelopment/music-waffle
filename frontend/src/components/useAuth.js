import {useState, useEffect} from 'react'
import axios from 'axios'

function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });

useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useStickyState("", "accessToken");
    const [refreshToken, setRefreshToken] = useStickyState("", "refreshToken");
    const [expiresIn, setExpiresIn] = useStickyState("", "expiresIn");

    useEffect(() => {
        if(!code) return
        axios.post(process.env.REACT_APP_BASE_URL + '/login' ,{
            code,
        })
        .then(res => {
            console.log(res)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, process.env.REACT_APP_BASE_URL + '/dashboard')
        })
        .catch(() => {
        })
    }, [code])

    useEffect(() => {
        if(!refreshToken || !expiresIn) return
        const interval = setInterval(() => {

        axios.post(process.env.REACT_APP_BASE_URL + '/refresh' ,{
            refreshToken,
        })
        .then(res => {
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval);
    }, [refreshToken, expiresIn])

    return accessToken;
}
