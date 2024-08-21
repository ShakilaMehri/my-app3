import React from "react";
import {createRoot} from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import Shop from "./shop/shop";
import "./global.css";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = createRoot(rootElement);


 root.render(
    <QueryClientProvider client={queryClient}>
        <React.StrictMode>
        <Shop/>
        </React.StrictMode>
    </QueryClientProvider>
);
} else {
    console.error("Root element not found");
}
