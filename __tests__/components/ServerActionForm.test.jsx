// __tests__/components/ServerActionForm.test.jsx

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import ServerActionForm from "../../app/components/ServerActionForm";

// Solusi: Definisikan mock function di dalam factory.
vi.mock("../../app/lib/actions", async () => {
    // Gunakan await importActual untuk mendapatkan modul asli
    const mod = await vi.importActual("../../app/lib/actions");
    return {
        ...mod,
        submitFormAction: vi.fn(),
    };
});

describe("ServerActionForm Component", () => {
    it("seharusnya memanggil server action dengan data formulir yang benar", async () => {
        // Dapatkan mock function dari modul yang sudah dimock
        const { submitFormAction } = await import("../../app/lib/actions");

        render(<ServerActionForm />);
        const user = userEvent.setup();

        const nameInput = screen.getByLabelText("Nama:");
        await user.type(nameInput, "Dani");

        await user.click(screen.getByRole("button", { name: "Kirim" }));

        expect(submitFormAction).toHaveBeenCalled();

        const submittedFormData = submitFormAction.mock.calls[0][0];
        expect(submittedFormData).toBeInstanceOf(FormData);
        expect(submittedFormData.get("name")).toBe("Dani");
    });
});
