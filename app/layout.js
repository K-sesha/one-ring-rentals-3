import "bootstrap/dist/css/bootstrap.min.css";
import "../public/style/style.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
