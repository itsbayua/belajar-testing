import ProductDetailPage from "../app/product/[slug]/page";
import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";

describe("ProductDetailPage", () => {
    it("seharusnya menampilkan params dan searchParams yang diberikan", () => {
        // Definisikan mock props
        const mockProps = {
            params: { slug: "iPhone-15-pro-max" },
            searchParams: { id: "12345" },
        };

        // Render komponen dengan mock props
        render(
            <ProductDetailPage
                params={mockProps.params}
                searchParams={mockProps.searchParams}
            />
        );

        // Verifikasi apakah data sudah di-render
        expect(screen.getByText("Slug: iPhone-15-pro-max")).toBeInTheDocument();
        expect(screen.getByText("ID Produk: 12345")).toBeInTheDocument();
    });
});
