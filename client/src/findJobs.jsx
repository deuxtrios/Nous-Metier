import React from "react";

const pageTitleStyle = {
  color: "rgb(24, 35, 56)",
  fontWeight: 600,
  fontStyle: "normal",
  fontSize: 32,
};

const headingStyle = {
  color: "rgb(24, 35, 56)",
  fontWeight: 700,
  fontStyle: "normal",
  fontSize: 24,
};

const bodyTextStyle = {
  color: "rgb(100, 112, 132)",
  fontWeight: 400,
  fontStyle: "normal",
  fontSize: 16,
};


/* =========================================================
   Find Jobs  (list + search + filters)
   ========================================================= */
export default function FindJobs() {
  return (
    <section id="jobs" className="page active" aria-label="Find Jobs">

      <div className="pageintro">
        <span className="eyebrow">DISCOVER OPPORTUNITIES</span>
        <h1 data-template-id="jobs-title" className="canva-text" style={pageTitleStyle}>
          Find Jobs
        </h1>
        <p data-template-id="jobs-subtitle" className="canva-text" style={bodyTextStyle}>
          Find the right opportunity for your schedule and location.
        </p>
      </div>

      <form id="jobsSearch" className="searchbox card" role="search">
        <div>
          <label htmlFor="jobsKeyword">Keyword</label>
          <input id="jobsKeyword" placeholder="Job title or keyword" />
        </div>
        <div>
          <label htmlFor="jobsLocation">Location</label>
          <input id="jobsLocation" placeholder="[City]" />
        </div>
        <div>
          <label htmlFor="jobsType">Job type</label>
          <select id="jobsType">
            <option value="">All types</option>
            <option>One-day</option>
            <option>Part-time</option>
            <option>Full-time</option>
          </select>
        </div>
        <button type="submit" className="btn">Search jobs</button>
      </form>

      <div className="jobs-layout">

        <aside className="sidebar card" aria-label="Job filters">
          <h2 data-template-id="filters-heading" className="canva-text" style={headingStyle}>
            Filters
          </h2>

          <div className="filter-group">
            <strong>Job type</strong>
            <label className="checkrow"><input type="checkbox" name="filterType" value="One-day" />One-day</label>
            <label className="checkrow"><input type="checkbox" name="filterType" value="Part-time" />Part-time</label>
            <label className="checkrow"><input type="checkbox" name="filterType" value="Full-time" />Full-time</label>
          </div>

          <div className="filter-group">
            <label htmlFor="filterCategory">Category</label>
            <select id="filterCategory">
              <option value="">All categories</option>
              <option>Food service</option>
              <option>Retail</option>
              <option>Warehouse</option>
              <option>Hospitality</option>
              <option>Office</option>
              <option>Events</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filterPay">Minimum pay</label>
            <input id="filterPay" type="number" min="0" placeholder="[Minimum pay]" />
            <p className="soft text-xs mt-2">Sample listings show pay as a placeholder.</p>
          </div>

          <div className="filter-group">
            <label className="checkrow"><input id="filterAbroad" type="checkbox" />Open to applicants abroad</label>
            <button type="button" id="clearFilters" className="linkbtn">Clear filters</button>
          </div>
        </aside>

        <div className="results">
          <div className="sectionhead mt-0">
            <h2 id="resultCount" aria-live="polite">[X] jobs found</h2>
          </div>

          <div id="resultsGrid" className="jobgrid"></div>
          <p id="noResults" className="card p-7 soft" hidden>No matching jobs. Try clearing your filters.</p>

          <div className="pagination">
            <button type="button" id="prevPage">Previous</button>
            <span id="pageIndicator" aria-live="polite">1 / 1</span>
            <button type="button" id="nextPage">Next</button>
          </div>
        </div>

      </div>
    </section>
  );
}


/* =========================================================
   Job Detail  (suggested route: /jobs/:id)
   ========================================================= */
export function JobDetail() {
  return (
    <section id="detail" className="page active" aria-label="Job detail">

      <button type="button" className="back" data-route="/jobs">← Back to jobs</button>

      <div className="detail-layout">

        <article className="card detail-main">
          <div className="flex gap-4 items-center">
            <div className="company-icon" aria-hidden="true">[C]</div>
            <div>
              <h1 id="detailTitle" className="text-3xl mb-1"></h1>
              <p id="detailCompany" className="soft mb-0"></p>
            </div>
          </div>

          <p id="detailLocation" className="soft mt-4"></p>
          <div id="detailTags" className="tags"></div>
          <p id="abroadBadge" className="tag blue inline-block mt-4" hidden>Open to applicants outside Canada</p>

          <section>
            <h2 data-template-id="about-job-heading" className="canva-text" style={headingStyle}>
              About the job
            </h2>
            <p id="detailDescription"></p>
          </section>

          <section>
            <h2 data-template-id="requirements-heading" className="canva-text" style={headingStyle}>
              Requirements
            </h2>
            <p id="detailRequirements"></p>
          </section>

          <section>
            <h2 data-template-id="schedule-heading" className="canva-text" style={headingStyle}>
              Schedule
            </h2>
            <p id="detailSchedule"></p>
          </section>
        </article>

        <aside className="card detail-side">
          <span className="eyebrow">JOB OVERVIEW</span>
          <h2 id="detailPay" className="mt-3"></h2>

          <div className="profile-row">
            <strong>Start date</strong>
            <span id="detailStart"></span>
          </div>
          <div className="profile-row">
            <strong>Apply-by date</strong>
            <span id="detailDeadline"></span>
          </div>

          <button type="button" id="applyButton" className="btn">Apply now</button>
          <button type="button" id="saveButton" className="btn secondary" aria-pressed="false">
            <span id="saveText">Save job</span>
          </button>
        </aside>

      </div>
    </section>
  );
}


/* =========================================================
   Apply  (suggested route: /jobs/:id/apply)
   ========================================================= */
export function ApplyJob() {
  return (
    <section id="apply" className="page active" aria-label="Apply">

      <button type="button" className="back" id="applyBack">← Back to job</button>

      <div className="pageintro">
        <h1 data-template-id="apply-title" className="canva-text" style={pageTitleStyle}>
          Apply for this job
        </h1>
        <p data-template-id="apply-subtitle" className="canva-text" style={bodyTextStyle}>
          Share your details with the employer.
        </p>
      </div>

      <div className="form-layout">

        <form id="applyForm" className="card formcard">
          <div className="fields">
            <div className="field">
              <label htmlFor="appName">Full name</label>
              <input id="appName" required placeholder="[Full name]" autoComplete="name" />
            </div>
            <div className="field">
              <label htmlFor="appEmail">Email</label>
              <input id="appEmail" type="email" required placeholder="[Email address]" autoComplete="email" />
            </div>
            <div className="field">
              <label htmlFor="appCountry">Country you live in</label>
              <input id="appCountry" required placeholder="[Country]" />
            </div>
            <div className="field">
              <label htmlFor="appAvailable">Available from</label>
              <input id="appAvailable" type="date" required />
            </div>
            <div className="field full">
              <label htmlFor="appResume">Resume link</label>
              <input id="appResume" type="url" required placeholder="https://[resume-link]" />
            </div>
            <div className="field full">
              <label htmlFor="appMessage">Message</label>
              <textarea id="appMessage" required placeholder="Briefly introduce yourself"></textarea>
            </div>
          </div>

          <label className="checkrow">
            <input type="checkbox" id="appConsent" required />
            I confirm that my information may be shared with this job's employer to review my application.
          </label>
          <button type="submit" className="btn mt-4">Submit application</button>
        </form>

        <aside className="card help">
          <span className="eyebrow">YOU'RE APPLYING TO</span>
          <h2 id="applyJobTitle" className="mt-3"></h2>
          <p id="applyJobCompany" className="soft"></p>
          <div id="applyJobTags" className="tags"></div>
        </aside>

      </div>
    </section>
  );
}