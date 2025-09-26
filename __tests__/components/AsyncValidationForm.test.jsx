import { screen, render, waitFor } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";
import userEvent from "@testing-library/user-event";
import AsyncValidationForm from "../../app/components/AsyncValidationForm";

describe("AsyncValidationForm component", () => {
    let user;
    let usernameInput;
    let submitButton;

    // Ini akan dijalankan sebelum setiap tes
    beforeEach(() => {
        render(<AsyncValidationForm />);
        user = userEvent.setup();
        usernameInput = screen.getByLabelText("Nama Pengguna:");
        submitButton = screen.getByRole("button", { name: "Kirim" });
    });

    it("seharusnya menampilkan pesan sukses untuk nama pengguna yang tersedia", async () => {
        // Simulasikan pengetikan nama pengguna
        await user.type(usernameInput, "pengguna-baru");
        expect(usernameInput).toHaveValue("pengguna-baru");

        // Simulasikan klik tombol
        await user.click(submitButton);

        // Verifikasi status loading
        expect(
            screen.getByRole("button", { name: "Memeriksa...." })
        ).toBeInTheDocument();

        // Tunggu hingga status sukses muncul
        await waitFor(() => {
            expect(
                screen.getByText(/Nama pengguna tersedia!/i)
            ).toBeInTheDocument();
        });

        // Verifikasi tombol kembali ke status "Kirim"
        expect(
            screen.getByRole("button", { name: "Kirim" })
        ).toBeInTheDocument();
    });

    it("seharusnya menampilkan pesan eror untuk nama pengguna yang tidak tersedia", async () => {
        // Simulasikan pengetikan nama pengguna yang tidak valid
        await user.type(usernameInput, "admin");

        // Simulasikan pengiriman
        await user.click(submitButton);

        // Verifikasi status loading
        expect(
            screen.getByRole("button", { name: "Memeriksa...." })
        ).toBeInTheDocument();

        // Tunggu hingga status error muncul
        await waitFor(() => {
            expect(
                screen.getByText(/Nama pengguna sudah digunakan./i)
            ).toBeInTheDocument();
        });
    });
});
