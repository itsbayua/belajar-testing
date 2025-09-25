import Counter from "../../app/components/Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("Counter component", () => {
    it("Seharusnya mereneder dengan nilai awal 0", () => {
        render(<Counter />);
        expect(screen.getByText("Count: 0")).toBeInTheDocument();
    });
});
