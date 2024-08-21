import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Shop from "./shop/shop";
import "./global.css";

const queryClient = new QueryClient();

export default function App () {
    return (
        <QueryClientProvider client={queryClient}>
            <Shop/>
        </QueryClientProvider>
    )
}
