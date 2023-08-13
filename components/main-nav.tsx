"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isMenuOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const menuToggleButton = document.getElementById("menu-toggle")

      if (menuToggleButton && !menuToggleButton.contains(target)) {
        closeMenu()
      }
    }

    document.addEventListener("click", handleOutsideClick)

    return () => {
      document.removeEventListener("click", handleOutsideClick)
    }
  }, [])

  return (
    <div className="flex md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.myLogo /* className="h-5 w-5 fill-current" */ />
      </Link>
      <div className="md:hidden">
        {/* Ícone do menu para abrir o menu lateral */}
        <div
          className={buttonVariants({
            size: "sm",
            variant: "ghost",
          })}
        >
          <button
            id="menu-toggle"
            className="flex items-center space-x-2"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <Icons.menuIcon />
          </button>
        </div>
      </div>

      <nav className="hidden md:flex gap-6 font-bold times">
        <div className="flex gap-6">
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Link
              href="#"
              className={cn("flex items-center text-muted-foreground text-lg")}
            >
              home
            </Link>
          </div>
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Link
              href="#portfolio"
              className={cn("flex items-center text-muted-foreground text-lg")}
            >
              portfolio
            </Link>
          </div>
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Link
              href="#arts"
              className={cn("flex items-center text-muted-foreground text-lg")}
            >
              arts
            </Link>
          </div>
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Link
              href="#about"
              className={cn("flex items-center text-muted-foreground text-lg")}
            >
              about
            </Link>
          </div>
          <div
            className={buttonVariants({
              size: "sm",
              variant: "ghost",
            })}
          >
            <Link
              href="/critics"
              className={cn("flex items-center text-muted-foreground text-lg")}
            >
              critics
            </Link>
          </div>
        </div>
      </nav>

      {/* <nav className="hidden md:flex gap-6 font-bold times">
        {items?.map(
          (item, index) =>
            item.href && (
              <div className="flex gap-6" key={index}>
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                  })}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center text-muted-foreground text-lg",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                </div>
              </div>
            )
        )}
      </nav> */}

      {/* Menu lateral */}
      <div className="relative">
        {/* Camada de sobreposição escura com desfoque */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-20 backdrop-filter backdrop-blur"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            onClick={closeMenu}
          />
        )}

        <div
          className={`md:hidden fixed left-0 top-0 bottom-0 border-r bg-background z-30 w-64 overflow-y-auto transition-transform duration-300 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-end pr-4 pt-4">
            {/* Ícone de fechar para fechar o menu */}
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <button onClick={closeMenu} aria-label="Fechar menu">
                <Icons.closeIcon />
              </button>
            </div>
          </div>
          <nav className="flex flex-col gap-6 font-bold times pl-6 pt-6">
            <div className="flex flex-col gap-6 items-start">
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Link
                  href="#"
                  className={cn(
                    "flex items-center text-muted-foreground text-lg"
                  )}
                >
                  home
                </Link>
              </div>
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Link
                  href="#portfolio"
                  className={cn(
                    "flex items-center text-muted-foreground text-lg"
                  )}
                >
                  portfolio
                </Link>
              </div>
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Link
                  href="#arts"
                  className={cn(
                    "flex items-center text-muted-foreground text-lg"
                  )}
                >
                  arts
                </Link>
              </div>
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Link
                  href="#about"
                  className={cn(
                    "flex items-center text-muted-foreground text-lg"
                  )}
                >
                  about
                </Link>
              </div>
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Link
                  href="/critics"
                  className={cn(
                    "flex items-center text-muted-foreground text-lg"
                  )}
                >
                  critics
                </Link>
              </div>
            </div>
          </nav>
          {/* <nav className="flex flex-col gap-6 font-bold times pl-6 pt-6">
            {items?.map(
              (item, index) =>
                item.href && (
                  <div className="flex gap-6" key={index}>
                    <div
                      className={buttonVariants({
                        size: "sm",
                        variant: "ghost",
                      })}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center text-muted-foreground text-lg",
                          item.disabled && "cursor-not-allowed opacity-80"
                        )}
                      >
                        {item.title}
                      </Link>
                    </div>
                  </div>
                )
            )}
          </nav> */}
        </div>
      </div>
    </div>
  )
}
