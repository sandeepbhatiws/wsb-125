"use client";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import Menu from "./Components/Common/Menu";
import { Provider } from "react-redux";
import { store } from "./Redux ToolKit/store";

// export const metadata = {
//   title: "MayBell - Online furniture store",
//   description: "",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Provider store={ store }>
          <Header/>
          <Menu/>
          {children}
          <Footer/>
        </Provider>
      </body>
    </html>
  );
}
