"use client";
import { Navigation } from "@/components/layout/navigation";
import { HeaderLogo } from "@/components/layout/header-logo";
import { AuthButtons } from "@/components/layout/auth-buttons";
import { WelcomeMsg } from "@/components/layout/welcome-msg";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-indigo-700 to-indigo-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <AuthButtons />
        </div>
        <WelcomeMsg />
      </div>
    </header>
  );
};
