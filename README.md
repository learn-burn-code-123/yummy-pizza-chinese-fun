
# Pizza Cooking Game

A fun and interactive pizza cooking game built with React and TypeScript. Learn to make pizzas by selecting the right ingredients and following recipes across multiple levels.

## Features

- **Multiple Levels**: Progress through different pizza recipes with increasing complexity
- **Drag & Drop Interface**: Intuitive ingredient selection with drag and drop functionality
- **Responsive Design**: Works on both desktop and mobile devices
- **Interactive Cooking**: Visual feedback during the cooking process
- **Chinese & English Support**: Bilingual ingredient names and interface

## Technologies Used

This project is built with modern web technologies:

- **React** - UI library for building interactive interfaces
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **shadcn/ui** - Beautiful and accessible UI components
- **React DnD** - Drag and drop functionality
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd pizza-cooking-game
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## How to Play

1. **Select a Level**: Choose from available pizza recipes
2. **Add Ingredients**: Drag and drop ingredients onto the pizza base
3. **Cook the Pizza**: Click the cook button to start the cooking process
4. **Complete Levels**: Successfully complete pizzas to unlock new levels

## Project Structure

```
src/
├── components/          # React components
├── context/            # React context providers
├── data/               # Game data and configurations
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
