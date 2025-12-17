"use client"

import { ThemeProvider } from "next-themes"

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"   // adds "dark" class to <html>
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}
