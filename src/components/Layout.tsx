import { Outlet } from "react-router-dom";
import NavbarBoxLinks from "@/components/navbars/NavbarBoxLinks";
import FooterLimeWordmark from "@/components/sections/footer/FooterLimeWordmark";

export default function Layout() {
  return (
    <div className="relative isolate min-h-svh flex flex-col bg-background text-foreground" data-button="default" data-card="default" data-pattern="none">
      <header data-webild-section="Header">
        <NavbarBoxLinks
          brand="ACS Homes Inc"
          navItems={[
            {
              name: "Portfolio",
              href: "#gallery"
            },
            {
              name: "Pricing",
              href: "#pricing"
            },
            {
              name: "Reviews",
              href: "#testimonial"
            },
            {
              name: "FAQ",
              href: "#faq"
            }
          ]}
          primaryButton={{
            text: "Start your build",
            href: "#contact"
          }}
          introDelay={1.7}
        />
      </header>
      <main className="flex-grow" data-button="default" data-card="default" data-pattern="none">
        <Outlet />
      </main>
      <footer data-webild-section="Footer" data-section="footer">
        <FooterLimeWordmark
          description="Ready to discuss your custom build or home addition in Mansfield? Reach out to our team to start planning your dream home."
          primaryButton={{
            text: "Get in touch",
            href: "#contact"
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
                  text: "Portfolio",
                  href: "#gallery"
                },
                {
                  text: "Builds & Renovations",
                  href: "#cta"
                },
                {
                  text: "Testimonials",
                  href: "#testimonial"
                },
                {
                  text: "FAQ",
                  href: "#faq"
                },
                {
                  text: "Contact",
                  href: "#contact"
                }
              ]
            },
            {
              title: "Contact & Location",
              links: [
                {
                  text: "124 N Main St, Mansfield, MA 02048",
                  href: "#contact"
                },
                {
                  text: "info@acshomesinc.com",
                  href: "mailto:info@acshomesinc.com"
                },
                {
                  text: "Mon-Fri: 7:00 AM - 5:00 PM",
                  href: "#contact"
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
