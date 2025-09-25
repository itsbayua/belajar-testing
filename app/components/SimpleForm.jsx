"use client";

import React, { useState } from "react";

export default function SimpleForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        if (name.trim() === "") {
            setError("Nama tidak boleh kosong.");
            setMessage("");
            return;
        }

        setMessage(`Halo, ${name}!`);
        setName("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name-input">Nama:</label>
            <input
                id="name-input"
                type="text"
                typeof="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit">Kirim</button>
            {error && (
                <p role="alert" data-testid="error">
                    {error}
                </p>
            )}
            {message && <p role="alert">{message}</p>}
        </form>
    );
}
