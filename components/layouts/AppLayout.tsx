import React, { ReactNode } from "react";
import Navbar from "../customs/Navbar";
import Footer from "../customs/Footer";

const AppLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header Navbar */}
            <Navbar />

            {/* Main Content */}
            {children}

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AppLayout;
