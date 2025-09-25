import { render, screen, waitFor } from "@testing-library/react";
import PostsList from "../../app/components/PostsList";
import { describe, it, expect } from "vitest";

describe("PostsList component", () => {
    it("Seharusnya menampilkan daftar posting setelah data dimuat", async () => {
        render(<PostsList />);

        // 1. Pastikan pesan loading muncul di awal
        expect(screen.getByText("Loading....")).toBeInTheDocument();

        // 2. Tunggu hingga elemen loading hilang
        await waitFor(() => {
            expect(screen.queryByText("Loading....")).not.toBeInTheDocument();
        });

        // 3. Verifikasi data yang di-mock sudah di-render
        expect(screen.getByText("Mock Post Title 1")).toBeInTheDocument();
        expect(screen.getByText("Mock Post Title 2")).toBeInTheDocument();
        expect(screen.getByText("Mock Post Title 3")).toBeInTheDocument();
    });
});
