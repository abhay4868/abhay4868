# Abhay's Animated Banner

This is a React/Next.js project that creates an animated banner component for GitHub profiles.

## Features

- ✨ Animated typing effect with Java code
- ☕ Coffee steam animation
- 🌟 Floating code symbols
- 🌌 Constellation pattern background
- 🎨 Beautiful gradient design
- 📱 Responsive layout

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abhay4868/abhay4868.git
cd abhay4868
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deployment

#### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

#### Option 2: GitHub Pages
1. Build the project:
```bash
npm run build
npm run export
```

2. Push the `out` folder to your GitHub Pages branch

#### Option 3: Netlify
1. Build the project:
```bash
npm run build
npm run export
```

2. Drag and drop the `out` folder to Netlify

## Usage

The banner component can be used in any React application:

```jsx
import Banner2 from './components/Banner2'

function App() {
  return <Banner2 />
}
```

## Customization

You can customize the banner by editing the `components/Banner2.js` file:

- Change the typing text in the `fullText` variable
- Modify colors in the Tailwind classes
- Adjust animation timings
- Update personal information

## Technologies Used

- React 18
- Next.js 14
- Tailwind CSS
- TypeScript
- Fira Code font

## License

MIT License - feel free to use this banner for your own profile!
