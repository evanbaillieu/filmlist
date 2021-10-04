import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../App.css";

import FilmView from "./filmView";

const queryClient = new QueryClient();

export default function FilmList(){
    return (
    <QueryClientProvider client={queryClient}>
        <FilmView/>
      </QueryClientProvider>
    )
}