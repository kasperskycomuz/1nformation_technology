"use client";

import type { ReactNode } from "react";
import { LanguageToggle } from "./LanguageToggle";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="site-frame">
      <LanguageToggle />
      {children}
    </div>
  );
}
