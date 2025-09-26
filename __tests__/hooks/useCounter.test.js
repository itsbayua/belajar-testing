import useCounter from "../../app/hooks/useCounter";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach } from "vitest";

describe("useCounter", () => {
    let result;

    beforeEach(() => {
        ({ result } = renderHook(() => useCounter()));
    });

    it("seharusnya memiliki nilai awal 0", () => {
        expect(result.current.count).toBe(0);
    });

    it("seharusnya menambahkan nilai saat increment dipanggil", () => {
        act(() => {
            result.current.increment();
        });

        expect(result.current.count).toBe(1);
    });

    it("seharusnya mengurangi nilai saat decrement dipanggil", () => {
        act(() => {
            result.current.decrement();
        });

        expect(result.current.count).toBe(-1);
    });
});
