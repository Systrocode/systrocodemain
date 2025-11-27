# Security Hardening Summary

This project was adjusted to better align with OWASP Top 10-2021.

- A01:2021 – Broken Access Control: Admin routes disabled; API admin routes require JWT in Authorization header; login sets HttpOnly cookie.
- A02:2021 – Cryptographic Failures: JWT requires `JWT_SECRET`; admin password requires `ADMIN_PASSWORD_HASH` (bcrypt).
- A04:2021 – Insecure Design: Rate limiting added to login; origin check for CSRF mitigation.
- A05:2021 – Security Misconfiguration: Global security headers via middleware.
- A07:2021 – Identification and Authentication Failures: Removed hard-coded credentials; require env vars; constant-time checks.
- A09:2021 – Security Logging and Monitoring Failures: Neutral error messages; no sensitive data in responses.

## Required environment variables

- `JWT_SECRET` – strong random secret (32+ chars)
- `ADMIN_EMAIL` – admin username/email
- `ADMIN_PASSWORD_HASH` – bcrypt hash of the admin password

Create a bcrypt hash (Windows PowerShell example):

```powershell
# Node one-liner to generate bcrypt hash (cost 12)
node -e "(async()=>{const b=require('bcryptjs');const p=process.argv[1]||'ChangeMe!123';console.log(await b.hash(p,12))})()" "YourStrongPasswordHere"
```

Then set in your environment or `.env.local` (not committed):

```env
JWT_SECRET=your-very-strong-secret
ADMIN_EMAIL=admin@systrocode.com
ADMIN_PASSWORD_HASH=$2a$12$...
```

## Notes

- Consider moving to server-side sessions instead of JWT for admin.
- Add real rate limiting via Redis/CDN (e.g., Vercel Edge + Upstash Redis).
- Extend CSP using `next.config.mjs` headers for stricter policies when ready.
