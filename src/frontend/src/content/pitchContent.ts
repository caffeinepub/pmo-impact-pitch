export const successCriteria = [
  {
    id: 'data',
    title: 'Transparent & Reliable Data',
    icon: '📊',
    stories: [
      {
        title: 'Globalising Demand Review',
        situation: 'Regional PMO leads worked in silos; demand decisions were inconsistent, and PM assignments were limited to regional pools.',
        task: 'Create transparency and enable cross-regional PM allocation for optimal utilization.',
        action: 'Centralized weekly global demand review, became SPOC between regional PMO leads and portfolio managers, and facilitated combined global calls for cross-region PM assignment.',
        result: 'Cross-country PM assignment became standard, faster matching of skills to projects, and significantly better PM utilization across regions.'
      },
      {
        title: 'Best-Practice Training for PMs',
        situation: 'PMs were unaware of lifecycle processes, extension rules, and resource request procedures, leading to data inconsistencies.',
        task: 'Clean existing data and sustain data quality through PM enablement.',
        action: 'Built comprehensive KT documents, training videos, and user manuals with screenshots; trained PMs globally on best practices for resource plans, extensions, and lifecycle management.',
        result: 'Data hygiene became stable and self-sustaining; lifecycle accuracy and compliance rose significantly.'
      },
      {
        title: 'Server Data Consolidation into ITAM',
        situation: 'Server data was maintained in Excel sheets with no real-time visibility, making tracking difficult and costly.',
        task: 'Create reliable, real-time asset intelligence for leadership and operations.',
        action: 'Cleaned and corrected all server data, then populated it into ServiceNow ITAM inventory with automated dashboards for each department.',
        result: 'Leadership discovered unused assets costing significant money; major cost savings achieved; auto-population eliminated manual errors and provided real-time server visibility.'
      }
    ]
  },
  {
    id: 'governance',
    title: 'Strong Governance & Process Adherence',
    icon: '🛡️',
    stories: [
      {
        title: 'Resource-First Policy',
        situation: 'Projects were converted from demands before all resources were identified, leading to frequent on-hold status and costly ad-hoc external hiring.',
        task: 'Stop project churn and cost leakage caused by resource unavailability.',
        action: 'Introduced a hard governance rule: Qualified Demands cannot become Projects until all resources are identified and verified.',
        result: 'Zero projects went on hold due to resource issues; predictable planning enabled; reduced external hiring costs.'
      },
      {
        title: 'Formalised PM Extension Governance',
        situation: 'PM extensions were approved in 1:1 discussions with no documentation or traceability, creating audit risks.',
        task: 'Create audit-ready discipline and PMO visibility for all extensions.',
        action: 'Mandated detailed justification emails with PMO in CC, validation of dates and impact, and formal approval trails before any extension changes.',
        result: '100% traceability achieved; accurate project dates maintained; clean audit trails for future reviews.'
      },
      {
        title: 'Compliance Lift from 77% to 100%',
        situation: 'Compliance score was 77% due to lack of awareness, accountability, and understanding of importance.',
        task: 'Improve lifecycle discipline and compliance across all projects.',
        action: 'Targeted trainings for four audience types (unaware, uninformed, unaccountable, unmotivated); implemented automated email nudges; reviewed and corrected all scores before leadership reporting.',
        result: 'Reached 100% compliance before reporting to leadership; scalable governance model established.'
      }
    ]
  },
  {
    id: 'bottlenecks',
    title: 'Reduced Bottlenecks & Smoother Transitions',
    icon: '⚡',
    stories: [
      {
        title: 'VP-Level Planner Dashboard',
        situation: 'Initiatives were tracked in Excel and presented to VPs on separate days per department, causing week-long delays in seeing updates.',
        task: 'Enable real-time visibility and faster decision-making for VPs.',
        action: 'Built Microsoft Teams Planner workflow with assigned owners, due dates, and real-time update notifications for all action items.',
        result: 'VPs gained instant visibility across all departments; bottlenecks identified and resolved in real-time; no more week-long update cycles.'
      },
      {
        title: 'Weekly Agile Server Patching',
        situation: 'Servers were patched quarterly, leading to recurring vulnerabilities and reactive firefighting.',
        task: 'Build preventive operations to stay ahead of security risks.',
        action: 'Shifted from quarterly to weekly patching cadence by dividing servers into four batches and patching one batch per week.',
        result: 'Vulnerabilities dropped dramatically; proactive security posture established; rare vulnerability incidents.'
      },
      {
        title: 'Onboarding Manuals + FAQs',
        situation: 'New resource onboarding took 3-4 working days, delaying project contributions during critical times.',
        task: 'Reduce onboarding friction and enable Day-1 productivity.',
        action: 'Created detailed onboarding manuals with sequential steps, screenshots, and FAQ documents for common questions.',
        result: 'New hires became productive from Day 1; onboarding time reduced from 3-4 days to same-day readiness.'
      }
    ]
  },
  {
    id: 'reporting',
    title: 'Improved Reporting Quality & Automation',
    icon: '📈',
    stories: [
      {
        title: 'PM Availability Dashboard',
        situation: 'Regional PMO leads maintained manual trackers of PM assignments with high error risk and no system-driven data.',
        task: 'Provide accurate, system-driven PM utilization visibility for assignment decisions.',
        action: 'Created region-specific PM availability dashboards showing available FTEs, allocated FTEs, projects assigned, and visual over/under-allocation indicators; automated daily pre-call reports.',
        result: 'PM assignment decisions became data-driven; visual over/under-allocation clarity; automated reports sent day before weekly calls.'
      },
      {
        title: 'Resource Intelligence Dashboard for PMs',
        situation: 'PMs struggled to find available resources, had no visibility into skills or availability, and spent significant time chasing reporting managers.',
        task: 'Smooth resource identification and assignment for project managers.',
        action: 'Created comprehensive resource dashboard with name, availability, primary/secondary skills, reporting manager, region, and current assignments.',
        result: 'Resource assignment became smooth and fast; PMs could identify correct, available resources instantly without chasing managers.'
      },
      {
        title: 'Automated Resource-Plan Closure',
        situation: 'Resource plans were not marked completed even after project closure, causing FTE tracking errors and availability issues.',
        task: 'Ensure resource plan hygiene and accurate FTE tracking.',
        action: 'Implemented automated checks that mark resource plans as completed whenever a project is closed, following best practices.',
        result: 'Clean, correct data maintained automatically; accurate FTE tracking; no manual cleanup required.'
      }
    ]
  }
];

export const impactStatements = [
  {
    before: 'Regional silos with inconsistent demand decisions',
    after: 'Global transparency with cross-regional PM allocation'
  },
  {
    before: 'PM assignment guesswork and regional limitations',
    after: 'Data-driven utilization with optimal skill matching'
  },
  {
    before: 'Untracked extensions with zero traceability',
    after: '100% governance traceability with audit trails'
  },
  {
    before: '77% compliance score',
    after: '100% compliance achievement'
  },
  {
    before: 'Excel inventory with outdated, costly server data',
    after: 'Real-time ITAM intelligence with major cost savings'
  },
  {
    before: 'Quarterly patching with recurring vulnerabilities',
    after: 'Weekly risk-prevention model with rare incidents'
  },
  {
    before: 'Week-late VP updates causing delayed decisions',
    after: 'Real-time decision visibility across departments'
  },
  {
    before: 'Inconsistent PM processes and data quality issues',
    after: 'Globally standardized onboarding, training, and documentation'
  },
  {
    before: 'Inaccurate resource plans and FTE tracking errors',
    after: 'Automated hygiene with accurate FTE tracking'
  },
  {
    before: 'Manual multi-region coordination with high friction',
    after: 'Structured, scalable workflows with low friction'
  },
  {
    before: 'Firefighting mode with reactive problem-solving',
    after: 'Preventive lifecycle discipline with structural solutions'
  },
  {
    before: 'Projects on hold due to resource unavailability',
    after: 'Predictable execution with resource-first governance'
  }
];

export const roadmapPhases = [
  {
    title: 'Days 1–30: Assess & Map',
    icon: '🔍',
    items: [
      'Assess lifecycle integrity, data quality, and governance pain points across all regions',
      'Identify systemic bottlenecks at the structural level, not just process symptoms',
      'Map all cross-regional handover friction points and communication gaps',
      'Interview key stakeholders (PMO leads, PMs, portfolio managers, VPs) to understand current challenges',
      'Document existing workflows, data sources, and reporting mechanisms'
    ]
  },
  {
    title: 'Days 31–60: Redesign & Standardize',
    icon: '🔧',
    items: [
      'Redesign lifecycle control points to be scalable, repeatable, and enforceable',
      'Standardize demand → project → resource flow with clear governance gates',
      'Define automated validation gates for compliance, extensions, and resource plans',
      'Build cross-regional playbook with best practices and training materials',
      'Establish data quality standards and automated hygiene checks'
    ]
  },
  {
    title: 'Days 61–90: Deploy & Enable',
    icon: '🚀',
    items: [
      'Build dashboards for traceability, utilization, and lifecycle health visibility',
      'Deploy cross-regional playbook and conduct global training sessions',
      'Establish structural mechanisms that prevent recurrence, not temporary patches',
      'Implement automated reporting and real-time notification systems',
      'Measure early wins, gather feedback, and iterate on governance model'
    ]
  }
];
