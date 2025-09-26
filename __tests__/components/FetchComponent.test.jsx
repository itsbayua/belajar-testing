import FetchComponent from "../../app/components/FetchComponent";
import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, vi, expect, beforeEach, afterEach } from "vitest";

describe("FetchComponent", () => {
    // Atur mock untuk fetch sebelum setiap tes
    beforeEach(() => {
        vi.spyOn(global, "fetch").mockResolvedValue({
            ok: true,
            json: async () => ({ title: "Test Post" }),
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("seharusnya menampilkan status loading saat data sedang dimuat", () => {
        // Karena kita sudah mem-mock fetch, kita bisa langsung merender komponen
        render(<FetchComponent url="https://api.example.com/posts/1" />);

        // Tes ini hanya memverifikasi status loading awal, yang terjadi secara instan
        expect(screen.getByTestId("loading")).toBeInTheDocument();
    });

    it("seharusnya menampilkan data setelah fetching berhasil", async () => {
        render(<FetchComponent url="https://api.example.com/posts/1" />);

        // Tunggu hingga fetching selesai dan UI diperbarui
        await waitFor(() => {
            expect(screen.getByTestId("data")).toBeInTheDocument();
        });

        // Verifikasi bahwa data yang benar ditampilkan
        expect(
            screen.getByRole("heading", {
                level: 1,
                name: "Data berhasil dimuat!",
            })
        );
    });

    it("seharusnya menampilkan pesan error jika fetching gagal", async () => {
        // Override mock untuk kasus ini agar gagal
        vi.spyOn(global, "fetch").mockResolvedValue({
            ok: false,
            status: 404,
        });

        render(<FetchComponent url="https://api.example.com/posts/999" />);

        // Tunggu hingga fetching selesai dan UI diperbarui
        await waitFor(() => {
            expect(screen.getByTestId("error")).toBeInTheDocument();
        });

        // Verifikasi pesan error
        expect(screen.getByText(/Error: 404/)).toBeInTheDocument();
    });
});
