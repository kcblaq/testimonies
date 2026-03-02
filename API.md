# Testimonies API

## Overview

- **Anyone** can submit a testimony (no login).
- **Only admins** can log in, approve/reject testimonies, and delete them.

## Base URL

- Local: `http://localhost:3000`
- Swagger UI: `http://localhost:3000/api`

## Endpoints

### Public (no auth)

#### Submit a testimony

```http
POST /testimonies
Content-Type: application/json
```

**Body:**

| Field        | Type   | Required | Constraints                          |
|-------------|--------|----------|--------------------------------------|
| title       | string | yes      | 5–200 characters                     |
| content     | string | yes      | 20–5000 characters                   |
| authorName  | string | yes      | 2–100 characters                     |
| authorEmail | string | yes      | Valid email                          |

**Example:**

```json
{
  "title": "How this service changed my life",
  "content": "I am grateful for the support I received. It made a real difference in my daily routine.",
  "authorName": "Kelechi Ugwu",
  "authorEmail": "kelechi@example.com"
}
```

**Responses:**

- `201` – Testimony created (status `PENDING` until admin approval).
- `400` – Validation error (invalid or missing fields).
- `500` – Server error.

#### List all testimonies

```http
GET /testimonies
```

Returns all testimonies (any status).

#### List approved testimonies

```http
GET /testimonies/approved
```

Returns only testimonies with status `APPROVED`. Use this for public display.

#### List rejected testimonies

```http
GET /testimonies/rejected
```

Returns only testimonies with status `REJECTED`.

#### List pending testimonies

```http
GET /testimonies/pending
```

Returns only testimonies awaiting admin review (status `PENDING`).

#### Get one testimony

```http
GET /testimonies/:id
```

- `200` – Testimony.
- `404` – Not found.

---

### Admin auth (no prior auth)

#### Register first admin

Only works when there are **no admins** in the database. Use this once to create the first admin. The admin must **verify their email** (see Verify email below) before they can log in.

```http
POST /admin/register
Content-Type: application/json
```

**Body:**

| Field    | Type   | Required | Constraints   |
|----------|--------|----------|---------------|
| name     | string | yes      | 2–100 chars   |
| email    | string | yes      | Valid email   |
| password | string | yes      | Min 6 chars   |

**Response `201`:** `{ "email", "message", "verificationToken" }`. Use the `verificationToken` in `POST /admin/verify-email` to complete sign-up. (In production you would send this token by email instead of returning it.)

**Responses:** `201` created, `400` admins already exist, `409` email already used.

#### Verify email

Required for every new admin (first-time register or when added by another admin). Call this with the token received after registration or when an admin was added.

```http
POST /admin/verify-email
Content-Type: application/json
```

**Body:** `{ "token": "<verificationToken>" }`

**Responses:** `200` verified (admin can now log in), `400` token missing, `401` invalid or expired token.

#### Admin login

Use this to get a JWT for protected admin routes. **Email must be verified first** (see Verify email).

```http
POST /admin/login
Content-Type: application/json
```

**Body:** `{ "email", "password" }`

**Response `200`:**

```json
{ "access_token": "<JWT>" }
```

Use this value as: `Authorization: Bearer <access_token>` on admin-only endpoints.

**Responses:** `200` success, `401` invalid email/password or email not verified.

---

### Admin only (JWT required)

Admin routes require a valid JWT from `POST /admin/login`. Send it as `Authorization: Bearer <access_token>`.

#### Add admin (admin only)

Creates a new admin (name, email, password). The new admin receives a verification token (returned in the response); they must call `POST /admin/verify-email` with that token before they can log in. Share the token or a verification link with them.

```http
POST /admin/add
Authorization: Bearer <token>
Content-Type: application/json
```

**Body:** `{ "name", "email", "password" }` (same as register).

**Response `201`:** `{ "email", "message", "verificationToken" }`.

#### List admins (admin only)

Returns all admins with `email`, `name`, and `emailVerified` status.

```http
POST /admin/list
Authorization: Bearer <token>
```

**Response `200`:** `[{ "email", "name", "emailVerified" }, ...]`

#### Approve or reject a testimony

```http
PATCH /testimonies/:id
Authorization: Bearer <token>
Content-Type: application/json
```

**Body:**

| Field  | Type   | Required | Description                    |
|--------|--------|----------|--------------------------------|
| status | string | no       | `APPROVED` or `REJECTED`      |

**Responses:**

- `200` – Updated testimony.
- `401` – Not authenticated.
- `403` – Not an admin.
- `404` – Testimony not found.

#### Delete a testimony

```http
DELETE /testimonies/:id
Authorization: Bearer <token>
```

- `204` – Deleted.
- `401` – Not authenticated.
- `403` – Not an admin.
- `404` – Not found.

---

## Running the app

1. Set in `.env`:
   - `DATABASE_URL` (PostgreSQL)
   - `JWT_SECRET` (any long random string; used to sign admin JWTs)
2. Run migrations: `npx prisma migrate deploy`
3. Start: `npm run start:dev`
4. Open Swagger: http://localhost:3000/api
5. **First time:** (1) Create the first admin with `POST /admin/register` (include `name`, `email`, `password`). (2) Call `POST /admin/verify-email` with the returned `verificationToken`. (3) Use `POST /admin/login` to get a JWT and call other admin endpoints with `Authorization: Bearer <token>`.
6. **Adding more admins:** An existing admin calls `POST /admin/add` with `name`, `email`, `password`. Share the returned `verificationToken` with the new admin so they can call `POST /admin/verify-email`, then they can log in with their email and password.

## Schema note

- New testimonies are created with `status: PENDING`.
- `updatedByEmail` is optional and set when an admin approves or rejects.
- Admins have `name`, `emailVerified`, and email verification token fields. Login is allowed only when `emailVerified` is true (after calling verify-email).
