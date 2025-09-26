import React from "react";
import { submitFormAction } from "../lib/actions";

export default function ServerActionForm() {
    return (
        <form action={submitFormAction}>
            <label htmlFor="name-input">Nama:</label>
            <input type="text" id="name-input" name="name" />
            <button type="submit">Kirim</button>
        </form>
    );
}
