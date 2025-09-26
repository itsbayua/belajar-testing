import React from "react";
import { useAuth } from "../context/AuthContext";

export default function UserProfile() {
    const { name, isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return (
            <div data-testid="guest-profile">
                Selamat datang, Tamu! Silakan masuk.
            </div>
        );
    }

    return <div data-testid="user-profile">Halo, {name}!</div>;
}
