/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ReportSection {
  id: string;
  title: string;
  content: string | string[] | any;
  icon: string;
}

export const REPORT_CONTENT: ReportSection[] = [
  {
    id: "project-title",
    title: "Project Title",
    content: "Development of an Automated Task Tracking and Resource Allocation System for Internal Operations",
    icon: "FileText",
  },
  {
    id: "introduction",
    title: "Introduction",
    content: "This project was undertaken during the internship at the organization to streamline internal operations. As an Assistant Intern, the primary focus was on identifying bottlenecks in manual task assignment and resource tracking. The project aims to provide a centralized digital platform for monitoring progress and optimizing resource utilization within the department.",
    icon: "Info",
  },
  {
    id: "problem-statement",
    title: "Problem Statement",
    content: "The existing manual system for task assignment and resource tracking led to significant delays, miscommunication, and underutilization of resources. Lack of real-time visibility into task progress made it difficult for supervisors to manage deadlines effectively, resulting in operational inefficiencies.",
    icon: "AlertCircle",
  },
  {
    id: "objectives",
    title: "Objectives of the Project",
    content: [
      "To automate the task assignment process to reduce manual intervention.",
      "To provide real-time tracking of project milestones and individual task progress.",
      "To optimize resource allocation by identifying availability and skill sets.",
      "To generate automated performance reports for management review.",
      "To enhance team collaboration through a centralized communication channel."
    ],
    icon: "Target",
  },
  {
    id: "scope",
    title: "Scope of the Project",
    content: "The scope of this project includes the design and development of a web-based task management module. It covers user authentication, task creation, assignment, progress tracking, and basic reporting. The system is intended for internal use by the department's staff and management.",
    icon: "Maximize",
  },
  {
    id: "tools-tech",
    title: "Tools and Technologies Used",
    content: [
      "Frontend: React.js, Tailwind CSS, Framer Motion",
      "Backend: Node.js, Express.js",
      "Database: SQLite (for local development and testing)",
      "Version Control: Git",
      "Documentation: Microsoft Word, Markdown"
    ],
    icon: "Wrench",
  },
  {
    id: "architecture",
    title: "System Architecture / Workflow",
    content: "The system follows a Client-Server architecture. The React frontend communicates with the Express backend via RESTful APIs. Data is persisted in a relational database. The workflow involves: 1. Admin creates a task, 2. Task is assigned to a user, 3. User updates status, 4. System notifies supervisor, 5. Completion report is generated.",
    icon: "GitBranch",
  },
  {
    id: "roles",
    title: "Roles and Responsibilities of the Intern",
    content: [
      "Assisting in the requirement gathering phase by interviewing department heads.",
      "Developing UI components for the task dashboard using React.",
      "Implementing API endpoints for task CRUD operations.",
      "Conducting unit testing and documenting bugs.",
      "Preparing the final project report and presentation for evaluation."
    ],
    icon: "UserCheck",
  },
  {
    id: "tasks-completed",
    title: "Tasks and Assignments Completed",
    content: [
      "Designed the database schema for tasks, users, and resources.",
      "Developed a responsive dashboard for real-time task monitoring.",
      "Integrated a notification system for task deadlines.",
      "Created a resource allocation module based on availability filters.",
      "Successfully migrated manual records into the digital database."
    ],
    icon: "ClipboardList",
  },
  {
    id: "use-case",
    title: "Use Case: Task Assignment",
    content: {
      title: "Assigning a Priority Task to a Team Member",
      actors: "Project Manager (Admin), Team Member (User)",
      description: "The Project Manager assigns a high-priority task to an available team member through the system.",
      process: [
        "Manager logs into the admin dashboard.",
        "Manager selects 'Create Task' and enters details (Title, Priority, Deadline).",
        "Manager selects an available team member from the resource list.",
        "System validates availability and assigns the task.",
        "Team member receives an automated notification."
      ],
      outcome: "The task is successfully assigned, tracked, and visible on both the manager's and user's dashboards."
    },
    icon: "Users",
  },
  {
    id: "result-analysis",
    title: "Result Analysis",
    content: "Post-implementation analysis showed a 30% reduction in time spent on manual task coordination. Resource utilization efficiency improved by 15% due to better visibility. Observations indicate that team members were more accountable when deadlines were visible on a shared dashboard.",
    icon: "BarChart3",
  },
  {
    id: "vulnerability-analysis",
    title: "Vulnerability Analysis",
    content: [
      "Broken Access Control: Potential for users to access admin-level task management routes.",
      "Insecure Data Storage: Sensitive user information might be exposed if database encryption is not implemented.",
      "Cross-Site Scripting (XSS): Input fields in the task creation form could be exploited if not properly sanitized.",
      "Lack of Rate Limiting: The API might be susceptible to brute-force or DoS attacks."
    ],
    icon: "ShieldAlert",
  },
  {
    id: "remediation",
    title: "Remediation Recommendations",
    content: [
      "Implement Role-Based Access Control (RBAC) using JWT for secure route protection.",
      "Enable data encryption at rest and in transit (HTTPS).",
      "Use input validation and sanitization libraries (e.g., DOMPurify) to prevent XSS.",
      "Implement rate limiting on API endpoints to mitigate DoS risks.",
      "Conduct regular security audits and dependency updates."
    ],
    icon: "ShieldCheck",
  },
  {
    id: "expected-output",
    title: "Expected Output",
    content: "The final deliverable is a fully functional Task Management Web Application. Expected outputs include: 1. A live dashboard with task status charts, 2. Automated PDF reports for monthly performance, 3. A clean and intuitive UI for all user roles.",
    icon: "FileOutput",
  },
  {
    id: "skills-learned",
    title: "Skills Learned During Internship",
    content: [
      "Full-stack web development using the MERN stack (React, Node, Express).",
      "Agile project management methodologies.",
      "Database design and optimization techniques.",
      "Professional technical writing and documentation.",
      "Problem-solving in a real-world corporate environment."
    ],
    icon: "GraduationCap",
  },
  {
    id: "contribution",
    title: "Contribution to the Organization",
    content: "The project successfully digitized a critical operational process, reducing paperwork and improving communication efficiency. It provided the organization with a scalable tool that can be expanded to other departments, contributing to the overall digital transformation goals.",
    icon: "HeartHandshake",
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content: "The internship provided a valuable opportunity to apply academic knowledge to practical challenges. The successful development of the Task Tracking System met all initial objectives and demonstrated the intern's ability to handle end-to-end project responsibilities. The project is ready for deployment and further scaling.",
    icon: "CheckCircle2",
  },
  {
    id: "future-improvements",
    title: "Future Improvements",
    content: [
      "Integration with third-party tools like Slack or Microsoft Teams.",
      "Implementation of AI-based task prioritization and resource forecasting.",
      "Development of a mobile application for on-the-go task management.",
      "Enhanced data analytics and visualization for long-term project trends."
    ],
    icon: "Rocket",
  },
];
