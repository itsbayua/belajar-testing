import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useAuth } from "../../app/context/AuthContext";
import UserProfile from "../../app/components/UserProfile";

// Mock hook useAuth untuk mengisolasi tes
vi.mock("../../app/context/AuthContext", () => ({
    __esModule: true,
    default: vi.fn(),
    useAuth: vi.fn(),
}));

// Dapatkan mock function-nya
const mockUseAuth = vi.mocked(useAuth);

describe("UserProfile component", () => {
    it("seharusnya menampilkan pesan selamat datang untuk pengguna yang sudah masuk", () => {
        mockUseAuth.mockReturnValue({ isLoggedIn: true, name: "Jokowi" });

        render(<UserProfile />);

        expect(screen.getByTestId("user-profile")).toBeInTheDocument();
        expect(screen.getByText(/Halo, Jokowi!/i)).toBeInTheDocument();
    });

    it("seharusnya menampilkan pesan untuk tamu jika pengguna belum masuk", () => {
        mockUseAuth.mockReturnValue({ isLoggedIn: false, name: null });

        render(<UserProfile />);

        expect(screen.getByTestId("guest-profile")).toBeInTheDocument();
        expect(
            screen.getByText(/Selamat datang, Tamu! Silakan masuk./i)
        ).toBeInTheDocument();
    });
});
