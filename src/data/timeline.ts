// Exact 24-month timeline with absolute dates (Africa/Cairo TZ)
// XPRENEURS Batch #19 dates verified from program site

export interface TimelineMilestone {
  date: string;
  label: string;
}

export interface TimelinePhase {
  phase: string;
  start: string;
  end: string;
  milestones: TimelineMilestone[];
}

export const roadmapTimeline: TimelinePhase[] = [
  {
    "phase": "Company setup & MVP groundwork",
    "start": "2025-08-19",
    "end": "2025-12-10",
    "milestones": [
      {"date": "2025-09-15", "label": "GmbH prep + Egypt office lease"},
      {"date": "2025-10-01", "label": "Order 3× Prophesee EVK4 (IMX636)"},
      {"date": "2025-11-15", "label": "MVP pipeline (Event+RGB→Edge→Portal) alpha"}
    ]
  },
  {
    "phase": "XPRENEURS Batch #19 application window",
    "start": "2025-12-11",
    "end": "2026-02-15",
    "milestones": [
      {"date": "2025-12-11", "label": "Applications open (Batch #19)"},
      {"date": "2026-01-15", "label": "Submit application + demo video"}
    ]
  },
  {
    "phase": "XPRENEURS program (Batch #19)",
    "start": "2026-03-01",
    "end": "2026-05-31",
    "milestones": [
      {"date": "2026-03-15", "label": "Pilot LOI signed"},
      {"date": "2026-05-31", "label": "Program end: Demo day"}
    ]
  },
  {
    "phase": "Pilots & first paid conversion",
    "start": "2026-06-01",
    "end": "2026-12-31",
    "milestones": [
      {"date": "2026-08-15", "label": "Pilot #1 mid-review"},
      {"date": "2026-10-15", "label": "Pilot #2 live"},
      {"date": "2026-12-01", "label": "First paid site"}
    ]
  },
  {
    "phase": "Seed raise & team expansion",
    "start": "2027-01-01",
    "end": "2027-06-30",
    "milestones": [
      {"date": "2027-02-15", "label": "Term sheet target"},
      {"date": "2027-03-15", "label": "Eng Lead hired"},
      {"date": "2027-06-30", "label": "3–5 A-level hires onboard"}
    ]
  },
  {
    "phase": "Scale & regional footprint",
    "start": "2027-07-01",
    "end": "2027-12-31",
    "milestones": [
      {"date": "2027-09-30", "label": "10+ active customers"},
      {"date": "2027-11-01", "label": "Open Dubai or London rep office"}
    ]
  }
];

export const xpreneursInfo = {
  batch19: {
    applicationOpen: "2025-12-11",
    applicationClose: "2026-02-15", 
    programStart: "2026-03-01",
    programEnd: "2026-05-31",
    source: "XPRENEURS Program Schedule"
  }
};