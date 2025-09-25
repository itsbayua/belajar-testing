import React from "react";

export default function ProductDetailPage({ params, searchParams }) {
    return (
        <div>
            <h1>Halaman Produk</h1>
            <p>Slug: {params.slug}</p>
            <p>ID Produk: {searchParams.id || "tidak ada"}</p>
        </div>
    );
}
