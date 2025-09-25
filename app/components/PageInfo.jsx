"use client";

import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

export default function PageInfo() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "no query";

    return (
        <div>
            <h1>Page Information</h1>
            <p>Current Pathname: {pathname}</p>
            <p>Current Query: {query}</p>
        </div>
    );
}
