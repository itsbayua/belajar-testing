import useFetch from "../../app/hooks/useFetch";
import { renderHook, waitFor } from "@testing-library/react";
import { describe, vi, it, expect, beforeEach, afterEach } from "vitest";

describe("useFetch", () => {
    // Mock API fetch sebelum setiap tes
    beforeEach(() => {
        vi.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            json: async () => ({ id: 1, title: "Test Post" }),
        });
    });

    // Reset mock setelah setiap tes, karena kita melakukan override
    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("seharusnya dapat mengambil data yang benar dan mengubah status loading", async () => {
        const { result } = renderHook(() =>
            useFetch("https://api.example.com/posts/1")
        );

        // Verifikasi status awal
        expect(result.current.loading).toBe(true);
        expect(result.current.data).toBe(null);
        expect(result.current.error).toBe(null);

        // Tunggu hingga fetching selesai
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        // Verifikasi status akhir
        expect(result.current.data).toEqual({ id: 1, title: "Test Post" });
        expect(result.current.error).toBe(null);
    });

    it("seharusnya mengambil status error jika fetching gagal", async () => {
        // Override mock untuk kasus ini agar gagal
        vi.spyOn(global, "fetch").mockResolvedValue({
            ok: false,
            status: 404,
        });

        const { result } = renderHook(() =>
            useFetch("https://api.example.com/posts/999")
        );

        // Tunggu hingga fetching selesai
        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        // Verifikasi status error
        expect(result.current.error).toBe("Error: 404");
        expect(result.current.data).toBe(null);
    });
});
