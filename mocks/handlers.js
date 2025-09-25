import { http, HttpResponse } from "msw";

export const handlers = [
    // Handler untuk users
    http.get("https://api.example.com/users", () => {
        return HttpResponse.json([
            { id: 1, name: "alice" },
            { id: 2, name: "bob" },
        ]);
    }),

    // Handler untuk posts
    http.get("https://jsonplaceholder.typicode.com/posts", () => {
        return HttpResponse.json([
            { id: 1, title: "Mock Post Title 1" },
            { id: 2, title: "Mock Post Title 2" },
            { id: 3, title: "Mock Post Title 3" },
        ]);
    }),
];
