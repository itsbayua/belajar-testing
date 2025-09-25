import LinkButton from "../../app/components/LinkButton";
import { screen, render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";

describe("LinkButton Component", () => {
    it('seharusnya mengarahkan ke halaman "/dashboard" saat diklik', () => {
        render(<LinkButton />);
        const link = screen.getByTestId("link");

        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute("href", "/dashboard");
        expect(link).toHaveTextContent(/Go to Dashboard/);
    });
});
