# Tabless Thrusday

# What is this API?
- api for Tabless Thursday app, an app that allows you to organize your browser tabs
- api contains collection of tab lists and users
- users can add, remove, and update tabs

# How to download and use Tabless Thursday
- fork and clone repo
- `yarn install` and `yarn start`
- server up and running
- listening on port 4000
- user resources `/api/user-access/`
- tabs resources `/api/tab-collection/`
- tab resource `/api/tab/`
- url for endpoints baseurl + resource + action
- example  base `http://localhost:4000` or `https://.herokuapp.com`
- example full endpoint url `https://herokuapp.com/`

# get method endpoints
get method `https://herokuapp.com`
  - retrive list of tabss from database

get method `https://.herokuapp.com`
  - retrive information for selected tab id

get method `https://.herokuapp.com`
  - retive list of users from database

# user endpoints for login and registration

post method `https://.herokuapp.com`
  - login through this endpoint
  - schema {`username`, `password`}

post method `https://.herokuapp.com` 
  - register a new user through this endpoint
  - schema {`username`, `password`}

delete method `https://herokuapp.com/`
  - delete a tab

put method `https://.herokuapp.com/`
  - edit a tab
  - schema required { `title`, `website` }
  - schema optional { `date`, `favicon`, `short_description`, `full_description` }

# routes
  - `/api/user-access/`
  - `/api/rab-collection/`
  - `/api/tab/`