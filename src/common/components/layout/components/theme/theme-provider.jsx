/** @format */
"use client"
import React, { useEffect, useState } from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";
const ThemeProvider = ({ children, ...props }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {

        setMounted(true)

    }, [])
    if (!mounted) return <div />

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

export default ThemeProvider