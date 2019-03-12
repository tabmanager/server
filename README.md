# Tabless Thursday

Tabless Thursday is an app that allows you to organize your browser tabs!

## Getting Started

The API can be found at the following url:
```
https://tab-manager.herokuapp.com/
```

### Prerequisites (for local use)

- run `yarn` in order to install all dependencies
- use the command `yarn server` to run a live server!

## Endpoints

| Method |     Endpoint         |              Requires                    |                                        Description                            |
|--------|----------------------|------------------------------------------|-------------------------------------------------------------------------------|
|  POST  | `/api/register/`     |         `username`, `password`, `email`      | Used for adding a new user to database.                                   |
|  POST  | `/api/login/`        |            `username`, `password`            | Used to log a user in. Returns a token and the user's name in its body.   |
|  GET   | `/api/users`         |              Successful Login                | Used to show all users in the database.                                   |
|  GET   | `/api/users/:id/`    |              Successful Login                | Used to show a specific user in the database.                             |
|  GET   | `/api/tabs`          |              Successful Login                | Used to show tabs in the database.                                        |
|  GET   | `/api/tabs/:user_id/`|              Successful Login                | Used to show a specific user's saved tabs in the database.                |
|  POST  | `/api/tabs/`         |              Successful Login, Data          | Used to post a new tab to the user's saved tabs in the database.          |
|  PUT   | `api/tabs/:id`       |            Successful Login, Data            | Used to edit the logged in user's tabs. **Only works on current user!**   |
| DELETE | `api/tabs/:id/`      |              Successful Login                | Used to delete the logged in user's tab. **Only works on current user!**  |

---

### User Registration


Method used: **[POST]** `/api/register/`

On Success: Returns the Id of the new user.



Parameters:

|   Name    | Type | Required |                      Notes                       |
|-----------|------|----------|--------------------------------------------------|
| username  |string|    yes   |Must be unique.                                   |
| password  |string|    yes   |Can be up to 128 characters in length.            |
|   email   |string|    no    |The email the user wishes to use.                 |

Example of what to use: 
```
{
    username: "Lambda",
    password: "testpassword",
    email: "lambda@lambda.com"
}
```
---

### User Login


Method used: **[POST]** `/api/login/`

On Success: 
Returns a token to be used to authenticate the user.


Parameters:

|  Name  | Type | Required |
|--------|------|----------|
|username|string|    yes   |
|password|string|    yes   |

Example of what to use: 
```
{
    username: "Lambda",
    password: "testpassword"
}
```

---

### Get Users

Method used: **[GET]** `/api/users/`

On Success: Returns an array of users.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### Get Specific User

Method used: **[GET]** `/api/users/:id/`

On Success: Returns an array of users matching the current params.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

---

### Get List of all Tabs

Method used: **[GET]** `/api/tabs/`

On Success: Returns an array of all tabs in database.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

---

### Get List of all Tabs saved by a specific user.

Method used: **[GET]** `/api/tabs/:user_id/`

On Success: Returns an array of all tabs in database saved by a specific user.


Parameters:

|      Name     |   Type   | Required |              Notes                |
|---------------|----------|----------|-----------------------------------|
| Authorization |**Header**|   yes    | Acquired from a successful login. |

---

### Post Tab

Method used: **[POST]** `/api/tabs/`

On Success: Adds a new tab to the database.


Parameters:

|        Name      |   Type   | Required |                   Notes                     |
|---------------   |----------|----------|---------------------------------------------|
|   Authorization  |**Header**|    yes   | Acquired from a successful login.           |
|       title      |  string  |    yes   |The name of the website being saved.         |
|      website     |  string  |    yes   |The address of the website being saved.      |
|      category    |  string  |    no    |The category the website will be saved under.|
|      favicon     |  string  |    no    |The image url of a favicon from the website. |
|      date        |  integer |    no    |The date the website was saved to tabless.   |
|short_description |  string  |    no    |A short description of the website.          |
| long_description |  string  |    no    |A long description of the website.           |

---

### Update Tabs

Method used: **[PUT]** `api/tabs/:id/`

On Success: Returns updated array.


Parameters:

|        Name      |   Type   | Required |                   Notes                     |
|---------------   |----------|----------|---------------------------------------------|
|   Authorization  |**Header**|    yes   | Acquired from a successful login.           |
|       title      |  string  |    yes   |The name of the website being saved.         |
|      website     |  string  |    yes   |The address of the website being saved.      |
|      category    |  string  |    no    |The category the website will be saved under.|
|      favicon     |  string  |    no    |The image url of a favicon from the website. |
|      date        |  integer |    no    |The date the website was saved to tabless.   |
|short_description |  string  |    no    |A short description of the website.          |
| long_description |  string  |    no    |A long description of the website.           |

---

### Delete Tab

Method used: **[DELETE]** `//api/tabs/:id`

On Success: Deletes tab for database.


Parameters:

|      Name     |   Type   | Required |                   Notes                     |
|---------------|----------|----------|---------------------------------------------|
| Authorization |**Header**|    yes   | Acquired from a successful login.           |

---