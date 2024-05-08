


// Make api Secure
// The person who should have

// Concept:
// 1. Assign two token for each person (access TokenExpiredError, REfresh Token)
// 2. token contains: user indentification (email, role, etc) valid for shorter duration
// 3. refresh token is used: to recreate an access token that was expired.
// 4. if refresh is invalid then logout the user.


/**
 * 1. jwt : JSON Web Token
 * 2. generate a token by using jwt.sign
 * 3. create api set to cookie. httpOny, secure, sameSite
 * 4. from client side: asios withCredentials: true
 * 5. cors setup origin and credentials: true
 * 5. 
 */