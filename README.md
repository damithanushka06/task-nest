# 🪺 TaskNest – Your Personal TaskDto Organizer

TaskNest is a clean and minimal task management app built with Angular Standalone APIs and SCSS. It helps you organize tasks by status, supports drag-and-drop UI, and runs entirely in your browser.

---

## ✨ Features

- ✅ Add, edit, delete tasks
- 🔄 Drag & drop tasks between status columns (To Do, In Progress, Done)
- 💾 LocalStorage for saving tasks
- 🎨 Responsive UI with modern SCSS styles
- 🧩 Built using Angular Standalone Components and Routing

---

src/
└── app/
├── core/                     # Core services, interfaces, constants
│   ├── models/               # TaskDto model (TypeScript interfaces)
│   │   └── task-dto.ts
│   └── services/             # App-wide services
│       └── task.service.ts   # TaskDto logic (CRUD, localStorage)
│
├── shared/                   # Reusable UI components
│   ├── button/               # Button component (reused)
│   │   └── button.component.ts / .scss / .html
│   └── modal/                # Modal dialog
│       └── modal.component.ts / .scss / .html
│
├── features/
│   └── task-board/           # Main feature: the task board UI
│       ├── task-board.component.ts / .scss / .html
│       ├── task-column/      # Each status column (To Do, In Progress, Done)
│       │   └── task-column.component.ts / .scss / .html
│       └── task-card/        # Individual draggable task card
│           └── task-card.component.ts / .scss / .html
│
├── app.routes.ts             # Standalone routes
├── app.config.ts             # Bootstrap config
└── main.ts                   # App entry point


📘 Component Overview
Component	and Purpose
task-board =>	Root of the task UI, displays all columns
task-column =>	One column per status (To Do, etc.)
task-card =>	Represents a single draggable task
button (shared) =>	Reusable button styles and behavior
modal (shared)	=> Pop-up dialog for creating/editing tasks
task.service.ts =>	Handles state management (localStorage, CRUD)
task-dto.ts =>	TypeScript interface for TaskDto object

## 🚀 Getting Started

```bash
git clone https://github.com/yourusername/task-nest.git
cd task-nest
npm install
ng serve


