import { render, screen, waitFor } from "@testing-library/react";
import UsersList from "../../app/components/UsersList";
import { describe, it, expect } from "vitest";

describe("UsersList component", () => {
    it("seharusnya menampilkan daftar pengguna setelah data dimuat", async () => {
        render(<UsersList />);

        // 1. Periksa apakah pesan "Loading...." muncul
        expect(screen.getByText("Loading....")).toBeInTheDocument();

        // 2. Tunggu hingga data selesai dimuat (loading hilang)
        await waitFor(() => {
            expect(screen.queryByText("Loading....")).not.toBeInTheDocument();

            // 3. Periksa data yang di-mock (dari MSW) muncul di layar
            expect(screen.getByText("alice")).toBeInTheDocument();
            expect(screen.getByText("bob")).toBeInTheDocument();
        });
    });
});
