import React from "react";
import { handleMultiFieldForm } from "../lib/actions";

export default function MultiFieldForm() {
    return (
        <form action={handleMultiFieldForm}>
            <label htmlFor="name-input">Nama:</label>
            <input type="text" id="name-input" name="name" />

            <label htmlFor="email-input">Email:</label>
            <input type="email" id="email-input" name="email" />

            <label htmlFor="product-select">Pilih Produk:</label>
            <select name="product" id="product-select">
                <option value="laptop">Laptop</option>
                <option value="mouse">Mouse</option>
                <option value="keyboard">Keyboard</option>
            </select>

            <button type="submit">Pesan Sekarang</button>
        </form>
    );
}
