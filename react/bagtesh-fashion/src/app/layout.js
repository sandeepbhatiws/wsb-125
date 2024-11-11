// import "./globals.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import "../../public/frontend/css/style.css";
import "../../public/frontend/css/responsive.css";

import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";

export const metadata = {
  title: "Wedding Jodhpuri Suit, Tuxedo, Nehru Jacket, Sherwani, Baggy Breeches, Mojari, Saree, Suits, Lehenga from India",
  description: "Buy Indian Wedding Groom Jodhpuri Suits, Indowestern Sherwani, Equestrian Jodhpurs Breeches, Nehru waistcoat, Men Party Tuxedos, Traditional Turbans, Wedding Mojari and Exclusive Collection of Indian Sarees, Bridal Lehenga Choli, Eid Salwar Kameez Online from Bagtesh Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
