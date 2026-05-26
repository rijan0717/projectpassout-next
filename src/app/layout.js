import './globals.css';

export const metadata = {
  title: 'ProjectPassout',
  description: "Nepal's #1 College Project Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}