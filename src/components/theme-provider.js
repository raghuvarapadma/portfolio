"use client";
import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeProvider({
  children,
  ...props
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true) // This ensures the theme is only rendered after the component is mounted on the client
  }, [])

  // If not mounted, return nothing to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
