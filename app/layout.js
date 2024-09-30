import './globals.css'; // Global CSS for the entire app
import NavBar from './components/NavBar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />  {/* Include NavBar on every page */}
        <main>{children}</main>
      </body>
    </html>
  );
}
