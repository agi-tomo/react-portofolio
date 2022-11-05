import { useEffect } from "react";
import Router from "next/router";

export default function Index404() {
    useEffect(() => {
        setTimeout(() => {
            Router.push("/");
        }, 2000);
    });
    return (
        <div>
            <h1>halaman tidak ditemukan</h1>
        </div>
    );
}
