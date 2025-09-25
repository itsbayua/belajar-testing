import PageInfo from "../../app/components/PageInfo";
import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";

vi.mock("next/navigation", () => ({
    usePathname: () => "/products/123",
    useSearchParams: () => new URLSearchParams({ query: "laptop" }),
}));

describe("PageInfo component", () => {
    it(`seharusnya menampilkan pathname dan search params yang benar`, () => {
        render(<PageInfo />);

        // Periksa apakah pathname yang di-mock sudah di-render
        expect(
            screen.getByText("Current Pathname: /products/123")
        ).toBeInTheDocument();

        // Periksa apakah search params yang di-mock sudah di-render
        expect(screen.getByText("Current Query: laptop")).toBeInTheDocument();
    });
});
