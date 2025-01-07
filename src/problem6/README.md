# Live Scoreboard System

## Overview

A real-time scoring system that maintains a live leaderboard of top 10 users with secure score updates and WebSocket-based live updates.

## Core Components

### 1. API Gateway

- Central entry point for all client requests
- Handles request routing and authentication
- Implements rate limiting
- Routes score updates to Score Service

### 2. Auth Service

- Handles user authentication
- Validates JWT tokens
- Manages user authorization

### 3. Score Service

- Processes score updates
- Maintains score integrity
- Updates database
- Triggers cache invalidation
- Publishes updates to Message Queue

### 4. Cache Service

- Stores top 10 leaderboard
- Handles cache invalidation
- Recalculates top 10 scores when needed

### 5. WebSocket Service

- Maintains real-time connections with clients
- Consumes updates from Message Queue
- Broadcasts score updates to connected clients

### 6. Message Queue (BullMQ)

- Handles asynchronous communication
- Ensures reliable message delivery
- Manages retry logic for failed updates

### 7. Rate Limiting Service

- Prevents abuse of the scoring system
- Implements per-user and global rate limits

## API Endpoints

### Score Update

```http
PUT /api/scores
Authorization: Bearer <jwt_token>
Content-Type: application/json

{
    "userId": "string",
    "action": "string",
}
```

### Retrieve Top 10 Scores

```http
GET /api/scores/top
Authorization: Bearer <jwt_token>
```

### Get User Score

```http
GET /api/scores/user/<userId>
Authorization: Bearer <jwt_token>
```

## Security Measures

- JWT-based authentication
- Rate limiting per user
- Request validation
- Action signature verification

## Error Handling

- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 429: Too Many Requests
- 500: Internal Server Error
