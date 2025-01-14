# stylee

A graduation project for MEAN stack diploma provided by NTI, under the supervision of MCIT, Egypt.
-
<br> Notes:

- Hashing Problem, the hash function was returning undefined rather than a hash value.
- logical problem some __user types__ can be added even if they aren't in the database. (not fixed yet!)
- `lean()` a powerful method in mongoose the decreases the __TTFB__ *(Time to first byte)*, there are multiple ways
  to improve the performance, `lean()` method is used to improve the performance of the
  query by returning plain JavaScript objects instead of Mongoose documents
- `req.user = jwt.verify(isValidToken, secretKey); next()`, by using the `verify()` method, we can decode the access
  token back to its original payload to extract data.
- When you send a request via Postman, you should include the token as you copy it once it gets generated and copy it to
  the header section.
- In front-end, application automatically includes the token in the Authorization header of the HTTP request.
- Token Expiry and Refresh: If the token expires, the front-end application can handle token refresh by requesting a new
  token from the backend
  using a refresh token or prompting the user to log in again.
- 403 is a better status code for unauthorized access 'forbidden'
- Role-base access control (RBAC), is the mechanism of configuring the authorization
- `netstat -ano | findstr : PORT_NUMBER` (This command can explore the running processes over a specific port),
    - you can find the PID, then terminate the process that uses the port to use it. `taskkill /PID <PID> /F`
- As a best practice the status code `204` is the best one to send in your `delete` requests
- When you deal with "multer", it's proper to create the directory that you will interact with before sending the
  request
  that will save the data in this directory
-
- 
