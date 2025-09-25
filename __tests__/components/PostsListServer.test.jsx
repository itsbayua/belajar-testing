import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import PostsListServer from "../../app/components/PostsListServer";

describe("PostsListServer Component", () => {
    it("seharusnya menampilkan daftar posting dari server", async () => {
        // Merender komponen Server. Data sudah "ada" saat komponen dirender.
        render(await PostsListServer());

        // Verifikasi data yang kita mock sudah dirender
        expect(screen.getByText("Mock Post Title 1")).toBeInTheDocument();
        expect(screen.getByText("Mock Post Title 2")).toBeInTheDocument();
        expect(screen.getByText("Mock Post Title 3")).toBeInTheDocument();
    });
});
