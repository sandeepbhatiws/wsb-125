
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from "./MainLayout";

export const metadata = {
  title: "MayBell - Online furniture store",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <MainLayout>
        {children}
        </MainLayout>
      </body>
    </html>
  );
}
