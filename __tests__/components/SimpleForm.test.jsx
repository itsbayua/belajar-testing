import SimpleForm from "../../app/components/SimpleForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, describe, expect } from "vitest";

describe("SimpleForm component", () => {
    it("seharusnya menampilkan pesan sambutan setelah pengiriman formulir", async () => {
        render(<SimpleForm />);
        const user = userEvent.setup();

        // Temukan elemen-elemen form
        const nameInput = screen.getByLabelText("Nama:");
        const submitButton = screen.getByRole("button", { name: "Kirim" });

        // Simulasikan pengguna mengetik di input
        await user.type(nameInput, "Budi");

        // Verifikasi bahwa nilai input telah berubah
        expect(nameInput).toHaveValue("Budi");

        // Simulasikan pengguna mengetik tombol
        await user.click(submitButton);

        // Verifikasi bahwa pesan sambutan muncul di layar
        expect(screen.getByText("Halo, Budi!")).toBeInTheDocument();

        // Verifikasi bahwa input dikosongkan setelah pengiriman
        expect(nameInput).toHaveValue("");
    });

    it("Seharusnya menampilkan pesan error jika input nama kosong", async () => {
        render(<SimpleForm />);
        const user = userEvent.setup();

        // Simulasikan pengiriman tanpa mengisi input
        const submitButton = screen.getByRole("button", { name: "Kirim" });
        await user.click(submitButton);

        // Verifikasi bahwa pesan error muncul di layar
        const errorMessage = screen.getByTestId("error");
        expect(errorMessage).toBeInTheDocument();

        // Verifikasi pesan sambutan tidak muncul
        expect(screen.queryByText(/Halo,/)).not.toBeInTheDocument();
    });
});
