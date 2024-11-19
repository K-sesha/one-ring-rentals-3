'use client'; // Marks this as a Client Component

import 'bootstrap/dist/js/bootstrap.min.js';

export default function BootstrapProvider({ children }) {
    return <>{children}</>;
}