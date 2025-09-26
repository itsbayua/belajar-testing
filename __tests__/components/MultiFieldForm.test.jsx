import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import MultiFieldForm from "../../app/components/MultiFieldForm";

// Mock server Action
vi.mock("../../app/lib/actions", async () => {
    const mod = await vi.importActual("../../app/lib/actions");
    return {
        ...mod,
        handleMultiFieldForm: vi.fn(),
    };
});

describe("MultiFieldForm Component", () => {
    it("seharusnya memanggil server action dengan semua data formulir yang benar", async () => {
        const { handleMultiFieldForm } = await import("../../app/lib/actions");

        render(<MultiFieldForm />);
        const user = userEvent.setup();

        // Dapatkan elemen formulir
        const nameInput = screen.getByLabelText("Nama:");
        const emailInput = screen.getByLabelText("Email:");
        const productSelect = screen.getByLabelText("Pilih Produk:");
        const submitButton = screen.getByRole("button", {
            name: "Pesan Sekarang",
        });

        // Simulasikan interaksi pengguna
        await user.type(nameInput, "John Doe");
        await user.type(emailInput, "pX7Q5@example.com");
        await user.selectOptions(productSelect, "laptop");

        // Kirim formulir
        await user.click(submitButton);

        // Verifikasi bahwa mock action dipanggil
        expect(handleMultiFieldForm).toHaveBeenCalled();

        // Verifikasi argumen FormData
        const submittedFormData = handleMultiFieldForm.mock.calls[0][0];
        expect(submittedFormData).toBeInstanceOf(FormData);

        // Verifikasi setiap nilai di FormData sudah benar
        expect(submittedFormData.get("name")).toBe("John Doe");
        expect(submittedFormData.get("email")).toBe("pX7Q5@example.com");
        expect(submittedFormData.get("product")).toBe("laptop");
    });
});
