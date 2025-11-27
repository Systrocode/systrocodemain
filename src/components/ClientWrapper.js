"use client";
import { useEffect, useState } from 'react';

export default function ClientWrapper({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Prevent hydration mismatch by showing loading state until client is ready
  if (!isClient) {
    return (
      <div suppressHydrationWarning>
        {children}
      </div>
    );
  }

  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  );
}
