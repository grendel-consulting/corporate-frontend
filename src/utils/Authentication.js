import auth0 from "auth0-js"

export const isBrowser = typeof window !== "undefined"

const tokens = {
  idToken: false,
  accessToken: false,
}

let user = {}

export const isAuthenticated = () => {
  return tokens.idToken !== false
}

const auth = isBrowser
  ? new auth0.WebAuth({
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_CALLBACK,
      responseType: "token id_token",
      scope: "openid profile email",
    })
  : {}

export const login = () => {
  if (!isBrowser) {
    return
  }

  auth.authorize()
}

export const logout = () => {
  tokens.accessToken = false
  tokens.idToken = false
  user = {}
  localStorage.setItem("isLoggedIn", false)

  auth.logout({
    returnTo: process.env.AUTH0_LOGOUT,
  })
}

const setSession = (cb = () => {}) => (err, authResult) => {
  if (err && err.error === "login_required") {
      login()
  }

  if (authResult && authResult.accessToken && authResult.idToken) {
    tokens.idToken = authResult.idToken
    tokens.accessToken = authResult.accessToken

    auth.client.userInfo(tokens.accessToken, (_err, userProfile) => {
      user = userProfile

      localStorage.setItem("isLoggedIn", true)

      cb()
    })
  }
}

export const checkSession = callback => {
  const isLoggedIn = localStorage.getItem("isLoggedIn")

  if (isLoggedIn === "false" || isLoggedIn === null) {
    handleAuthentication()
    callback()
    return
  }
  auth.checkSession({}, setSession(callback))
}

export const handleAuthentication = () => {
  if (!isBrowser) {
    return
  }

  auth.parseHash(setSession())
}

export const getProfile = () => {
  return user
}
