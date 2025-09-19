import './globals.css'

export const metadata = {
  title: 'Abhay Tiwari - Software Engineer',
  description: 'Animated banner for GitHub profile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  )
}
