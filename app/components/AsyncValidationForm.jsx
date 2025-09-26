"use client";

import React, { useState } from "react";

function checkUsernameAvailability(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username.toLowerCase() === "admin") {
                reject(new Error("Nama pengguna sudah digunakan."));
            } else {
                resolve("Nama pengguna tersedia!");
            }
        }, 500);
    });
}

export default function AsyncValidationForm() {
    const [username, setUsername] = useState("");
    const [status, setStatus] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("");
        setIsLoading(true);

        try {
            const result = await checkUsernameAvailability(username);
            setStatus(result);
        } catch (error) {
            setStatus(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username-input">Nama Pengguna:</label>
            <input
                type="text"
                id="username-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Memeriksa...." : "Kirim"}
            </button>
            {status && <p role="status">{status}</p>}
        </form>
    );
}
