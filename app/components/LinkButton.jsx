import Link from "next/link";
import React from "react";

export default function LinkButton() {
    return (
        <Link data-testid="link" href={"/dashboard"}>
            Go to Dashboard
        </Link>
    );
}
