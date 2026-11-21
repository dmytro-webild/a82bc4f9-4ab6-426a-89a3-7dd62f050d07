import { Outlet } from "react-router-dom";
import NavbarBoxLinks from "@/components/navbars/NavbarBoxLinks";
import FooterLimeWordmark from "@/components/sections/footer/FooterLimeWordmark";
import AcsLogo from "@/components/ui/AcsLogo";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="default" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarBoxLinks
          brand="ACS Homes Inc"
          logo={<AcsLogo />}
          navItems={[]}
          introDelay={1.7}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="default" data-pattern="none">
        <Outlet />
      </main>
      <footer id="contact" data-webild-section="Footer" data-section="footer">
        <FooterLimeWordmark
          description="Reach out to our team to start planning your dream home."
          columns={[
            {
              title: "Contact & Location",
              links: [
                {
                  text: "Mansfield, MA",
                  href: "#faq"
                },
                {
                  text: "acshomes@gmail.com",
                  href: "mailto:acshomes@gmail.com"
                },
                {
                  text: "+1 508 397 3011",
                  href: "tel:+15083973011"
                },
                {
                  text: "Facebook Link",
                  href: "https://www.facebook.com/TheACSHomes",
                  underline: true
                }
              ]
            }
          ]}
          wordmark="ACS HOMES INC"
          copyright="©2026 ACS Homes Inc. All rights reserved."
        />
      </footer>
    </div>
  );
}
