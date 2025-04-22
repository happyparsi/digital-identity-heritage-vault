# Digital Identity Heritage Vault (DHIV) Backend

A secure and feature-rich backend system for preserving and managing digital family heritage content with time-capsule capabilities.

## Features

- **User Authentication & Authorization**
  - Secure signup and signin using JWT
  - Role-based access control (admin, family_admin, member)
  - Token-based authentication middleware

- **Content Management**
  - Upload and store various media types (images, videos, audio)
  - Automatic content tagging using ML
  - Time-locked content (digital time capsules)
  - Content encryption support
  - File size limit: 50MB

- **Family Tree Management**
  - Create and manage family members
  - Hierarchical family tree structure
  - Generation-based organization

## Tech Stack

- Node.js & Express.js
- PostgreSQL with Sequelize ORM
- JWT for authentication
- Multer for file uploads
- ML-based auto-tagging (@xenova/transformers)
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/happyparsi/digital-identity-heritage-vault/tree/main>
cd dhiv

Context retrieving

Workspace

.gitignore 1-1

package.json 1-14

.env 1-15

user.model.js 1-25

family.model.js 1-27

... More ( 20 +)

I'll help you create a comprehensive README.md file for your DHIV (Digital Identity Heritage Vault) backend project and guide you through pushing it to GitHub. First, let's create the README:

```markdown
# Digital Identity Heritage Vault (DHIV) Backend

A secure and feature-rich backend system for preserving and managing digital family heritage content with time-capsule capabilities.

## Features

- **User Authentication & Authorization**
  - Secure signup and signin using JWT
  - Role-based access control (admin, family_admin, member)
  - Token-based authentication middleware

- **Content Management**
  - Upload and store various media types (images, videos, audio)
  - Automatic content tagging using ML
  - Time-locked content (digital time capsules)
  - Content encryption support
  - File size limit: 50MB

- **Family Tree Management**
  - Create and manage family members
  - Hierarchical family tree structure
  - Generation-based organization

## Tech Stack

- Node.js & Express.js
- PostgreSQL with Sequelize ORM
- JWT for authentication
- Multer for file uploads
- ML-based auto-tagging (@xenova/transformers)
- CORS enabled

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <https://github.com/happyparsi/digital-identity-heritage-vault.git>
cd dhiv
 ```
```

2. Install dependencies:
```bash
cd backend
npm install
 ```

3. Configure environment variables:
   Create a .env file in the backend directory with:
```env
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=dihv
DB_PORT=5432

JWT_SECRET=your_secure_jwt_secret

# Optional AWS Configuration
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=your_aws_region
AWS_BUCKET_NAME=your_bucket_name
 ```

4. Start the server:
```bash
npm run dev
 ```

## API Endpoints
### Authentication
- POST /api/auth/signup - Register new user
- POST /api/auth/signin - Login user
### Content Management
- POST /api/content - Create new content (with file upload)
- GET /api/content - Get all accessible content
- GET /api/content/:id - Get specific content by ID
### Family Management
- POST /api/family - Add new family member
- GET /api/family/tree - Get family tree structure
## Models
### User Model
- username (unique)
- email (unique)
- password (hashed)
- role (admin/family_admin/member)
### Content Model
- title
- description
- mediaUrl
- mediaType (image/video/audio/text)
- tags (array)
- unlockDate
- isEncrypted
- encryptionKey
### Family Model
- name
- relationship
- generation
- birthDate
- isAlive
## Development
The project uses nodemon for development:

```bash
npm run dev
 ```

## Production
For production deployment:

```bash
npm start
 ```

## Security Features
- Password hashing using bcryptjs
- JWT-based authentication
- File type validation
- Request logging
- CORS protection
- Environment variable configuration
## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
## License
ISC License

## Author
Paras Rawal