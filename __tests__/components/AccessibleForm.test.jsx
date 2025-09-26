import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { axe } from "vitest-axe";
import AccessibleForm from "../../app/components/AccessibleForm";
import * as matchers from "vitest-axe/matchers";
expect.extend(matchers);

describe("AccessibleForm", () => {
    it("Seharusnya merender formulir yang dapat diakses", async () => {
        // Pengujian manual
        render(<AccessibleForm />);

        // Gunakan query getByRole untuk memverifikasi elemen. Ini memastikan bahwa pembaca layar dapat menemukan tombol
        const submitButton = screen.getByRole("button", { name: /Kirim/i });
        expect(submitButton).toBeInTheDocument();

        // Ini memastikan bahwa input memiliki label yang terkait
        const nameInput = screen.getByRole("textbox", { name: /Nama/i });
        expect(nameInput).toBeInTheDocument();
    });

    it("seharusnya tidak memiliki kesalahan aksesibilitas (menggunakan vitest-axe)", async () => {
        // Pengujian otomatis menggunakan axe
        const { container } = render(<AccessibleForm />);

        // Fungsi axe akan memindai DOM dan melaporkan pelanggaran
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
