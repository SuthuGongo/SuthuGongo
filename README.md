# Nobesuthu Gongo

**Junior Software Engineer based in Gqeberha, South Africa.**
I build full-stack applications from the database to the user interface and deploy them to the cloud. I enjoy learning new technologies and taking on whatever a project needs, from web and mobile to cloud and security.

Gqeberha (Port Elizabeth), South Africa · open to on-site, hybrid or remote roles and to relocating

[LinkedIn](https://www.linkedin.com/in/nobesuthu-gongo) · gongonobesuthu@gmail.com

---

## Featured projects

### [StudyTrack](https://github.com/SuthuGongo/StudyTrack)
**Stops students signing in for friends who aren't in class and gives students who lose their card a digital one that campus scanners accept.**
- QR check-in code that changes every 30 seconds while GPS confirms the student is within range of the lecturer
- Offline check-in that the server validates once the connection returns
- Virtual student card with a Code 128 barcode real scanners read plus a QR code that changes every minute so copied cards fail
- Face check-in in the browser with face-api.js storing only a 128-number face descriptor
- Live group chat over WebSockets with Django Channels plus at-risk alerts and a full audit log

`React` `Vite` `Django` `Django REST Framework` `Django Channels` `JWT`

### [HustleHub+](https://github.com/SuthuGongo/HustleHub) · [Live demo](https://hustlehub-ygtq.onrender.com)
**A freelance marketplace built security-first where escrow holds the client's money until the work is confirmed.**
- Over 1,000 automated tests including a Postman API suite of 440 requests and 1,970 assertions that Newman runs against the real server on every push
- Tamper-evident audit trail that hash-chains every payment so an admin can prove no amount was edited or deleted
- Two-factor login with hashed one-time codes plus account lockout and a breached-password check that never sends the real password
- Defends every route against NoSQL injection, XSS, IDOR and forged JWTs with a strict Content Security Policy
- Real-time chat over Socket.IO authenticated exactly like the REST API
- CI/CD on GitHub Actions and CircleCI with SonarCloud quality gates and Docker smoke tests. CodeQL's first scan raised 17 alerts and all 17 were fixed

`React` `Node.js` `Express` `MongoDB` `Socket.IO` `Jest` `Postman` `Docker` `CodeQL` `SonarCloud`

### [GLMS: Global Logistics Management System](https://github.com/SuthuGongo/GLMS)
**A contract and service-request platform for a global freight company built the way enterprise systems are built.**
- Strategy pattern swaps live, cached and fixed exchange rates with one setting and refuses to charge a client without a real rate
- Observer pattern logs every contract status change to a compliance audit trail and pauses or resumes open requests automatically
- Factory Method sets priority and response times from each contract's SLA tier
- Uploads checked by content and not just by name so an .exe renamed to .pdf is rejected
- 19 CHECK constraints, 5 foreign keys and optimistic concurrency enforced in SQL Server
- 294 unit tests with xUnit and Moq, then split into a JWT-secured Web API with integration tests and Docker Compose

`C#` `ASP.NET Core` `EF Core` `SQL Server` `xUnit` `Moq` `Docker` `GitHub Actions`

### [EventEase](https://github.com/SuthuGongo/EventEase) · [Live site](https://st10545758-btcjh6h6fwe4heh3.southafricanorth-01.azurewebsites.net)
**A venue booking system for an events company running live on Microsoft Azure.**
- Deployed on Azure App Service with Azure SQL Database and Azure Blob Storage for images
- Double bookings made impossible by a unique database index plus an overlap check
- Search by event type, date range and venue availability runs as SQL in the database and lives in the URL so it can be shared
- A SQL view joins venues, events and bookings for staff while the tables stay normalised

`C#` `ASP.NET Core MVC` `EF Core` `Azure SQL` `Azure Blob Storage` `Azure App Service`

### [Shamar](https://github.com/SuthuGongo/Shamar)
**Catches the fraud that passwords and permissions miss by learning how a small business normally behaves.**
- Stops fake supplier invoices, hijacked bank details and insiders paying themselves
- Every AI action passes through one security gateway so an AI shop assistant can't be talked into an 80% discount
- In a 100-trial evaluation it stopped all 7 attack types while clearing 98.6% of 2,477 legitimate actions

`Python` `FastAPI` `React` `pytest` `Docker`

### [Own Your Shape](https://github.com/SuthuGongo/OwnYourShape) · [Live demo](https://own-your-shape.vercel.app/)
**A complete online store for gymwear and swimwear live on Vercel.**
- PIN email verification and JWT sign-in that refreshes silently so shoppers are never logged out mid-checkout
- Size and colour variants plus wishlists, reviews and promo codes
- Order emails through SendGrid and product images served from Cloudinary

`React` `Django REST Framework` `PostgreSQL` `Cloudinary` `SendGrid`

---

## Tech I use

- **Languages:** JavaScript · Python · C# · Java · SQL
- **Frontend:** React · HTML/CSS
- **Backend:** Node.js/Express · Django · ASP.NET Core (MVC & Web API) · REST APIs
- **Data:** SQL Server · Azure SQL · PostgreSQL · MySQL · MongoDB · SQLite
- **Cloud & tooling:** Azure (App Service, SQL, Blob Storage) · Git · Docker · GitHub Actions · SonarCloud · Postman · Render · Vercel

## Education

- Advanced Diploma in ICT, Rosebank International (in progress)
- Diploma in ICT: Application Development, Sol Plaatje University (2023-2025)

## Right now

Open to junior software engineering roles where I can build real systems, learn from experienced engineers and keep growing across the stack.
