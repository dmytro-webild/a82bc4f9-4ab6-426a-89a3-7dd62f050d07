import HeroColumnGrid from "@/components/sections/hero/HeroColumnGrid";
import FaqGlyphRows from "@/components/sections/faq/FaqGlyphRows";
import LoaderHairlineColumns from "@/components/loaders/LoaderHairlineColumns";

export default function HomePage() {
  return (
    <>
      <LoaderHairlineColumns
        brand="ACS Homes Inc"
      />

      <div id="hero" data-webild-section="HeroColumnGrid" data-webild-section-id="HeroColumnGrid-1" data-section="hero" data-scene>
        <HeroColumnGrid
          title="Custom Homes And Quality Remodeling"
          description=""
          primaryButton={{
            text: "Start your project",
            href: "mailto:acshomes@gmail.com"
          }}
          imageSrc="https://storage.googleapis.com/webild/users/user_3MQlVB3qfyl983V9ddFQF7LiGU6/uploaded-1795300158825-5mtbhdyk.jpg"
          imageAlt="ACS Homes Inc Logo"
          introDelay={1.7}
        />
      </div>

      <div id="faq" data-webild-section="FaqGlyphRows" data-webild-section-id="FaqGlyphRows-1" data-section="faq">
        <FaqGlyphRows
          label="Details"
          title="Before you build"
          description=""
          button={{
            text: "Contact us",
            href: "mailto:acshomes@gmail.com"
          }}
          items={[
            {
              title: "Where are you located?",
              description: "We are located in Mansfield, MA, serving Mansfield and surrounding towns."
            },
            {
              title: "Do you provide FREE estimates",
              description: "Yes, we provide itemized cost breakdowns following an initial site consultation and plan review."
            },
            {
              title: "What types of projects do you take on?",
              description: "We handle custom home builds, structural additions, interior gut remodels, and exterior renovations."
            }
          ]}
        />
      </div>
    </>
  );
}
