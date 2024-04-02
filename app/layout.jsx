import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Mobi AI | Empowering Healthcare Research with AI-Driven Analytics",
  description:
    "MobiAI was created to give researchers a secure, easy-to-use platform for data analysis. We believe this will speed up healthcare research and ultimately lead to better discoveries and improved lives.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
