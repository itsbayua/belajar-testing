"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function NavigationButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push("/about");
    };

    return <button onClick={handleClick}>Go To About Page</button>;
}
