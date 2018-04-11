define({ "api": [
  {
    "type": "get",
    "url": "/api",
    "title": "Get available API versions",
    "version": "1.0.0",
    "name": "api_versions",
    "description": "<p><strong>No authorisation required.</strong> This endpoint returns the list of available API versions. Each API version is accessed through</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"currentVersion\": 1,\n  \"availableVersions\": [1]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "currentVersion",
            "description": "<p>The most recent version of the API.</p>"
          },
          {
            "group": "Success 200",
            "type": "number[]",
            "optional": false,
            "field": "availableVersions",
            "description": "<p>All available API versions.</p>"
          }
        ]
      }
    },
    "group": "API_Info",
    "filename": "lib/BaseRouter.js",
    "groupTitle": "API_Info"
  },
  {
    "type": "post",
    "url": "/api/v1/auth/staff-login",
    "title": "Generate staff access token",
    "version": "1.0.0",
    "group": "v1_Auth",
    "name": "auth_staff_token",
    "description": "<p>Authenticate a test user using a username and a password.</p>",
    "parameter": {
      "fields": {
        "POST parameters": [
          {
            "group": "POST parameters",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": ""
          },
          {
            "group": "POST parameters",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"accessToken\": \"12345678910\",\n  \"userData\": {\n    \"userId\": \"12345678910\",\n    \"firstName\": \"John\",\n    \"lastName\": \"Smith\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Fizzyo API access token needed for subsequent requests.</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "user",
            "description": "<p>Basic user data</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.userId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.firstName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "user.lastName",
            "description": ""
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": {\n    \"status\": 400,\n    \"name\": \"BadRequestError\",\n    \"message\": \"Parameter validation error: \\\"username\\\" is required.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/v1/routers/AuthRouter.js",
    "groupTitle": "v1_Auth"
  }
] });
