# Nous Métier

**Canadian jobs, open to everyone.**

Nous Métier is a job-seeking website that connects people with Canadian one-day, part-time and full-time work, whether they live in Canada or abroad. It is a student project built as a MERN-stack concept, and this repository contains the React front end.

---

## Use case

Finding short-term and entry-level work in Canada is hard, especially from outside the country. Most job boards bury one-day and part-time roles, and few make it clear whether a role welcomes applicants who don't live in Canada.

Nous Métier addresses this for two kinds of users:

- **Job seekers** browse openings that fit their schedule and location, filter by job type and category, see at a glance which roles are open to applicants abroad, and apply directly with their details and a resume link.
- **Employers** post a listing with the role description, requirements, pay, start date and apply-by date, and choose whether to welcome applicants from outside Canada.

---

## Features

### For job seekers
- Search jobs by keyword, location and job type (one-day, part-time, full-time)
- Browse by category: Food service, Retail, Warehouse, Hospitality, Office, Events
- Filter results by job type, category, minimum pay and "Open to applicants abroad"
- View a job's full details: description, requirements, schedule, pay, start date and apply-by date
- Save jobs and apply with name, email, country, availability, resume link and a short message
- Track submitted applications (status: Submitted, Reviewed, Accepted)

### For employers
- Post a job with title, company, location, type, category, pay, dates, description and requirements
- Mark a listing as open to applicants outside Canada

### Accounts
- Sign up as a **Job seeker** or **Employer**
- Sign in, view a dashboard with application and saved-job counts and recommended jobs
- View and edit a profile with job preferences

---

## Pages and routes

| Page | Route |
| --- | --- |
| Home | `/` |
| Find Jobs | `/jobs` |
| Job Detail | `/jobs/:id` |
| Apply | `/jobs/:id/apply` |
| About | `/about` |
| Contact | `/contact` |
| Sign Up | `/signup` |
| Sign In | `/signin` |
| Dashboard | `/dashboard` |
| My Applications | `/applications` |
| My Profile | `/profile` |
| Post a Job | `/post-job` |

The dashboard, applications, profile and post-job pages are intended for signed-in users.

---

## Tech stack

- [React](https://react.dev/) for the UI
- [React Router](https://reactrouter.com/) (`react-router-dom`) for client-side routing
- Plain CSS (`App.css`) for styling
- Vite dev server, run with Yarn

The planned full stack is **MERN**: MongoDB, Express, React and Node.js.

---

## Project structure

```
src/
  components/
    App.jsx          Router provider and global CSS
    App.css          Global styles
    Header.jsx       Site navigation (desktop and mobile)
    Layout.jsx       Header + page content (<Outlet />) + footer
  pages/
    Home.jsx
    FindJobs.jsx     Job list, plus JobDetail and ApplyJob
    About.jsx
    Contact.jsx
    SignIn.jsx
    SignUp.jsx
    Dashboard.jsx
    MyApplication.jsx
    MyProfile.jsx
    PostJob.jsx
  MainRouter.jsx     Route definitions
  main.jsx           App entry point
```

`MainRouter` wraps every route in `Layout`, so each page component renders only its own `<section>`.

---

## Getting started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS)
- [Yarn](https://yarnpkg.com/)

### Install and run

```bash
# install dependencies
yarn install

# start the development server
yarn dev
```

Then open the local URL printed in the terminal (typically `http://localhost:5173`).

---

## Project status

This is an interactive **prototype**. The screens and navigation are in place, and the content currently uses placeholder values such as `[Company name]` and `[Pay range]`.

Still to do:

- Move the shared state (jobs, signed-in user, profile, saved jobs, applications) into React, for example with a context provider
- Make search, filters, pagination, save and apply work with that state
- Guard the signed-in pages so signed-out visitors are redirected to Sign In
- Build the Node/Express API and MongoDB database for real accounts and listings
- Add a working contact form with a real submission destination
- Replace placeholder content with real listings

> Sign-in is demo-only: no real account is created, and any email and password will be accepted.

---

## Team

Crystel Hilton 
Jens Lagrolla
Ryan Baboolal
Shiori Takeda

## License

No License