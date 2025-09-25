import NavigationButton from "../../app/components/NavigationButton";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

// Mocking module "next/navigation"
const pushMock = vi.fn();
vi.mock("next/navigation", () => ({
    useRouter: () => ({
        push: pushMock,
    }),
}));

describe("NavigationButton component", () => {
    it(`seharusnya mengarahkan ke halaman "/about" saat di-klik`, async () => {
        // 1. Render komponen
        render(<NavigationButton />);
        const user = userEvent.setup();

        // 2. Temukan tombol
        const button = screen.getByRole("button", { name: "Go To About Page" });

        // 3. Simulasi klik
        await user.click(button);

        // 4. Periksa apakah mock function "push" telah dipanggil dengan benar
        expect(pushMock).toHaveBeenCalledWith("/about");
    });
});
