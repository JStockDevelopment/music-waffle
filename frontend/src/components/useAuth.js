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
        console.log("attempting to login")
        axios.post('https://music-waffle-o5gf4.ondigitalocean.app/login' ,{
            code,
        })
        .then(res => {
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
        
            console.log("redirecting to dashboard")
            window.history.pushState({}, null, "/dashboard")
        })
        .catch(() => {
                // window.location ='/'
        })
    }, [code])

    useEffect(() => {
        console.log("checking refresh")
        console.log(refreshToken)
        console.log(expiresIn)
        if(!refreshToken || !expiresIn) return
        console.log("refrshing token")
        const interval = setInterval(() => {

        axios.post('https://music-waffle-o5gf4.ondigitalocean.app/refresh' ,{
            refreshToken,
        })
        .then(res => {
            setAccessToken(res.data.accessToken)
            setExpiresIn(res.data.expiresIn)
        })
        .catch(() => {
                // window.location ='/'
        })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval);
    }, [refreshToken, expiresIn])

    return accessToken;
}
