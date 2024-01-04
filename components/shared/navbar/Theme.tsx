"use client";

import Image from "next/image";
import { useTheme } from "@/context/ThemeProvider";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes, defaultMode } from "@/constants/constants";

const GetCurrentTheme = (mode: string) => {
  if (typeof window !== "undefined") {
    let theme = themes.find(
      (x) =>
        x.value ===
        (localStorage.theme !== undefined ? localStorage.theme : mode)
    );
    if (theme !== undefined) {
      return theme;
    }
  }
  return defaultMode;
};

const Theme = () => {
  const { mode, setMode } = useTheme();
  const theme = GetCurrentTheme(mode);
  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Image
            src={theme.icon}
            alt={theme.alt}
            width={20}
            height={20}
            className="active-theme"
          />
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => {
            return (
              <MenubarItem
                key={theme.value}
                className="dark:focus:bg-dark-400 flex items-center gap-4 px-2.5 py-2"
                onClick={() => {
                  localStorage.theme = theme.value;
                  setMode(theme.value);
                }}
              >
                <Image
                  src={theme.icon}
                  alt={theme.value}
                  width={16}
                  height={16}
                  className={`${mode === theme.value && "active-theme"}`}
                />
                <p>{theme.label}</p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
