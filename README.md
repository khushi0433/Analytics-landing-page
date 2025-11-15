# Topic Website

A modern, responsive React-based website showcasing analytics, dashboards, and reports with interactive charts and statistics.

## Features

- **Dashboard Overview**: Real-time metrics with mini charts for key performance indicators
- **Advanced Analytics**: Comprehensive analytics with bar charts and trend visualizations
- **Reports & Insights**: Business intelligence and performance metrics
- **Responsive Design**: Built with Tailwind CSS for mobile-first responsive layouts
- **Interactive Components**: Animated charts and statistics with smooth transitions

## Tech Stack

- **Frontend**: React 19.2.0
- **Routing**: React Router DOM 7.9.5
- **Styling**: Tailwind CSS 3.4.18
- **Build Tool**: Create React App
- **Testing**: Jest with React Testing Library

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/khushi0433/Analytics-landing-page
cd topic-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000).

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Project Structure

```
src/
├── components/
│   ├── ui/
│   │   ├── Minichart.jsx    # Mini chart component for dashboard cards
│   │   └── stats.jsx        # Animated bar chart component
│   ├── common/
│   │   ├── navbar.jsx       # Navigation component
│   │   ├── hero.jsx         # Hero section
│   │   └── Footer.jsx       # Footer component
│   ├── Analytics.jsx        # Analytics section with charts
│   ├── dashboard.jsx        # Dashboard overview
│   ├── reports.jsx          # Reports and insights
│   └── contact.jsx          # Contact section
├── App.js                   # Main application component
└── index.js                 # Application entry point
```

## Components

### MiniChart
A canvas-based line chart component that renders mini charts with gradient fills for dashboard metrics.

### Stats
An animated bar chart component using Intersection Observer API for scroll-triggered animations.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
