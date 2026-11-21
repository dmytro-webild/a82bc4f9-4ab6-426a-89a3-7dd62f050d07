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
          navItems={[
            {
              name: "Services",
              href: "#cta"
            },
            {
              name: "FAQ",
              href: "#faq"
            }
          ]}
          primaryButton={{
            text: "Contact us",
            href: "mailto:acshomes@gmail.com"
          }}
          introDelay={1.7}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="default" data-pattern="none">
        <Outlet />
      </main>
      <footer id="contact" data-webild-section="Footer" data-section="footer">
        <FooterLimeWordmark
          description="Ready to discuss your custom build or home addition in Mansfield? Reach out to our team to start planning your dream home."
          primaryButton={{
            text: "Get in touch",
            href: "mailto:acshomes@gmail.com"
          }}
          columns={[
            {
              title: "Pages",
              links: [
                {
                  text: "Home",
                  href: "#hero"
                },
                {
                  text: "Builds & Renovations",
                  href: "#cta"
                },
                {
                  text: "FAQ",
                  href: "#faq"
                }
              ]
            },
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
                }
              ]
            }
          ]}
          wordmark="ACS HOMES INC"
          city="Mansfield, MA"
          timeZone="America/New_York"
          copyright="©2026 ACS Homes Inc. All rights reserved."
        />
      </footer>
    </div>
  );
}
