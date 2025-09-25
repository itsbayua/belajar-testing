import "@testing-library/jest-dom";
import { server } from "./mocks/server";
import { afterAll, afterEach, beforeAll } from "vitest";

// Start server sebelum semua tes dijalankan
beforeAll(() => server.listen());

// Reset handler setelah setiap tes selesai
afterEach(() => server.resetHandlers());

// Tutup server setelah semua tes selesai
afterAll(() => server.close());
