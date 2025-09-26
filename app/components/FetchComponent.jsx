// app/components/FetchComponent.jsx
"use client";

import { useEffect, useState } from "react";

const FetchComponent = ({ url }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    // Conditional Rendering
    if (loading) {
        return <div data-testid="loading">Memuat...</div>;
    }

    if (error) {
        return <div data-testid="error">Error: {error}</div>;
    }

    // Hanya merender ini jika data sudah tersedia
    return (
        <div data-testid="data">
            <h1>Data berhasil dimuat!</h1>
            <p>{data.title}</p>
        </div>
    );
};

export default FetchComponent;
