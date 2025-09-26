import React from "react";

export default function AccessibleForm() {
    return (
        <form aria-label="contact form">
            <div>
                <label htmlFor="name-input">Nama</label>
                <input type="text" id="name-input" />
            </div>
            <button type="submit">Kirim</button>
        </form>
    );
}
