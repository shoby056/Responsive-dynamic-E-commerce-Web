import './globals.css'; // Import global CSS styles if you have them
import { ReactNode } from 'react';

// Metadata for the application
export const metadata = {
  title: 'My Next App',
  description: 'My Next.js App with FontAwesome',
};

// Define the props interface to include children
interface RootLayoutProps {
  children: ReactNode; // Type for children
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        {/* Add Font Awesome Kit script here */}
        <script async src="https://kit.fontawesome.com/145d2a49f0.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
