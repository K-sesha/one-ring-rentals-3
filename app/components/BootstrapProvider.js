'use client'; // Marks this as a Client Component

import dynamic from 'next/dynamic';

const BootstrapJS = dynamic(() => import('bootstrap/dist/js/bootstrap.min.js'), { ssr: false });

export default function BootstrapProvider({ children }) {
    return (
        <>
            <BootstrapJS />
            {children}
        </>
    );
}
