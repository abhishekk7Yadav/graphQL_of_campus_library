# CS543 · Web Services · GraphQL Tutorial
## A First Hands-On GraphQL Tutorial — Campus Library

### Overview
This project implements an end-to-end web application demonstrating GraphQL integration between a front-end client, a Node.js/Apollo GraphQL API, and a MySQL relational database.

- **Frontend:** Plain HTML5, CSS3, and native `fetch()`
- **Middleware / API:** Node.js, `@apollo/server`, `graphql`, `mysql2`
- **Database:** MySQL (database: `gqldemo`, tables: `authors`, `books`)

---

### Project Structure
```text
campus-library/
├── schema.sql         # MySQL database schema, tables & sample data
├── db.js              # MySQL connection pool configuration
├── server.js          # Apollo GraphQL server (typeDefs & resolvers)
├── package.json       # Project dependencies and metadata
├── package-lock.json  # Locked dependency versions
├── README.md          # Setup and run instructions
└── public/
    ├── index.html     # Client UI with GraphQL Query and Mutation
    └── style.css      # Styling for cards and forms
```

---

### Prerequisites
1. **Node.js** (v18 or newer)
2. **MySQL Community Server 8.x** running locally

---

### Step-by-Step Setup & Running

#### 1. Setup the MySQL Database
Run `schema.sql` in MySQL to create the database, tables, and initial seed rows:
```bash
mysql -u root -p < schema.sql
```
*(Enter your MySQL root password when prompted)*

#### 2. Configure Database Credentials
Open `db.js` and ensure the password matches your local MySQL root password:
```javascript
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: process.env.MYSQL_PASSWORD || '1234', // Update with your MySQL password
  database: 'gqldemo',
});
```

#### 3. Install Node.js Dependencies
Install the required packages (`@apollo/server`, `graphql`, `mysql2`):
```bash
npm install
```

#### 4. Start the GraphQL API Server
Run:
```bash
node server.js
```
The Apollo GraphQL API will be active at:
`http://localhost:4000/`

You can open `http://localhost:4000/` in a browser to explore the GraphQL Sandbox and run queries.

#### 5. Open the Frontend
- Using **VS Code Live Server**: Right-click `public/index.html` → **Open with Live Server** (runs at `http://127.0.0.1:5500`).
- Or using Python HTTP server:
  ```bash
  python -m http.server 5500 --directory public
  ```
- Or open `public/index.html` directly in your browser.

---

### GraphQL Operations

#### Query (Read Authors & Nested Books)
```graphql
query {
  authors {
    id
    name
    country
    books {
      title
      year
    }
  }
}
```

#### Mutation (Add a New Book)
```graphql
mutation {
  addBook(title: "GraphQL for Beginners", year: 2025, authorId: 2) {
    id
    title
    year
    author {
      name
    }
  }
}
```
