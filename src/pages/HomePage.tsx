import HeroColumnGrid from "@/components/sections/hero/HeroColumnGrid";
import CtaPlusBand from "@/components/sections/statement/CtaPlusBand";
import PricingGlyphPlans from "@/components/sections/pricing/PricingGlyphPlans";
import TestimonialDeepCoverflow from "@/components/sections/testimonial/TestimonialDeepCoverflow";
import FaqGlyphRows from "@/components/sections/faq/FaqGlyphRows";
import ContactColumnWindow from "@/components/sections/contact/ContactColumnWindow";
import LoaderHairlineColumns from "@/components/loaders/LoaderHairlineColumns";

export default function HomePage() {
  return (
    <>
      <LoaderHairlineColumns
        brand="ACS Homes Inc"
      />

      <div id="hero" data-webild-section="HeroColumnGrid" data-webild-section-id="HeroColumnGrid-1" data-section="hero" data-scene>
        <HeroColumnGrid
          title="Custom homes and luxury rebuilds in Mansfield"
          description="ACS Homes Inc builds custom homes, seamless additions, and high-end renovations built to last generations."
          primaryButton={{
            text: "Start your project",
            href: "#contact"
          }}
          imageSrc="https://img.b2bpic.net/free-photo/vertical-low-angle-shot-stone-metal-building-blue-sky_181624-7605.jpg"
          imageAlt="modern stone and metal building"
          introDelay={1.7}
        />
      </div>

      <div id="cta" data-webild-section="CtaPlusBand" data-webild-section-id="CtaPlusBand-1" data-section="cta">
        <CtaPlusBand
          label="Start Building"
          title="Ready to build your dream home in Mansfield?"
          primaryButton={{
            text: "Request Quote",
            href: "#contact"
          }}
          secondaryButton={{
            text: "View Investment Tiers",
            href: "#pricing"
          }}
        />
      </div>

      <div id="pricing" data-webild-section="PricingGlyphPlans" data-webild-section-id="PricingGlyphPlans-1" data-section="pricing">
        <PricingGlyphPlans
          label="Investment Tiers"
          title="Transparent build and remodeling plans"
          description="Every home in Mansfield receives tailored engineering, precision craftsmanship, and dedicated project management."
          items={[
            {
              title: "Luxury Remodeling",
              price: "From $50,000",
              description: "Full-scope kitchen, bathroom, and interior room transformations.",
              features: [
                "Custom cabinetry & layout",
                "Permit management & filings",
                "Premium material selection"
              ],
              button: {
                text: "Start a project",
                href: "#contact"
              }
            },
            {
              title: "Custom Additions",
              price: "From $120,000",
              description: "Expand your living space with seamless structural additions.",
              features: [
                "Architectural planning",
                "Foundation & framing",
                "Full exterior integration"
              ],
              button: {
                text: "Plan addition",
                href: "#contact"
              }
            },
            {
              title: "New Home Builds",
              price: "From $450,000",
              description: "Ground-up luxury home builds custom designed for your land.",
              features: [
                "Turnkey general contracting",
                "Site prep & foundation",
                "10-year warranty included"
              ],
              button: {
                text: "Build custom home",
                href: "#contact"
              }
            }
          ]}
        />
      </div>

      <div id="testimonial" data-webild-section="TestimonialDeepCoverflow" data-webild-section-id="TestimonialDeepCoverflow-1" data-section="testimonial">
        <TestimonialDeepCoverflow
          title="Word from your neighbors"
          description="Feedback from homeowners in Mansfield and nearby towns."
          items={[
            {
              name: "Callum Patel",
              role: "Homeowner in Mansfield",
              quote: "ACS Homes turned our dated layout into a modern structure. The site stayed clean every day.",
              imageSrc: "https://img.b2bpic.net/free-photo/modern-man-talking-phone_23-2148560385.jpg",
              imageAlt: "Modern man talking over phone"
            },
            {
              name: "Megan Kelly",
              role: "Homeowner in Mansfield",
              quote: "Reliable and precise. Our structural addition finished ahead of schedule with zero hassle.",
              imageSrc: "https://img.b2bpic.net/free-photo/side-view-elder-woman-posing-kitchen-holding-tablet_23-2148419311.jpg",
              imageAlt: "Side view of elder woman posing in the kitchen and holding tablet"
            },
            {
              name: "Nathan Bennett",
              role: "Homeowner in Mansfield",
              quote: "Clear budget updates and great trim carpentry work. The team made the entire build effortless.",
              imageSrc: "https://img.b2bpic.net/free-photo/amorous-gay-couple-posing-kitchen_23-2147744698.jpg",
              imageAlt: "Amorous gay couple posing in kitchen"
            },
            {
              name: "Olivia Carter",
              role: "Homeowner in Mansfield",
              quote: "The kitchen and open floor layout came out even better than the architectural render.",
              imageSrc: "https://img.b2bpic.net/free-photo/beautiful-young-woman-making-selfie-by-her-phone-smiling-while-sitting-big-chair-home_231208-13907.jpg",
              imageAlt: "Beautiful young woman making selfie by her phone and smiling while sitting in big chair at home"
            },
            {
              name: "Ryan Okafor",
              role: "Homeowner in Mansfield",
              quote: "Solid craftsmanship throughout. They handled permitting without a single hitch from start to end.",
              imageSrc: "https://img.b2bpic.net/free-photo/happy-man-taking-keys-from-realtor-woman-standing-indoors_259150-58367.jpg",
              imageAlt: "Happy man taking keys from realtor woman standing indoors"
            }
          ]}
        />
      </div>

      <div id="faq" data-webild-section="FaqGlyphRows" data-webild-section-id="FaqGlyphRows-1" data-section="faq">
        <FaqGlyphRows
          label="Details"
          title="Before you build"
          description="Common questions about process, permits, and planning."
          button={{
            text: "Contact us",
            href: "#contact"
          }}
          items={[
            {
              title: "Where are you located?",
              description: "We are based at 124 N Main St, Mansfield, MA 02048, serving Mansfield and surrounding towns."
            },
            {
              title: "Do you provide estimates?",
              description: "Yes, we provide itemized cost breakdowns following an initial site consultation and plan review."
            },
            {
              title: "What types of projects do you take on?",
              description: "We handle custom home builds, structural additions, interior gut remodels, and exterior renovations."
            },
            {
              title: "How are permits managed in Mansfield?",
              description: "Our team coordinates with local zoning and building departments to handle all permits and inspections."
            },
            {
              title: "How long does a custom home build take?",
              description: "Most custom residential builds take eight to twelve months from architectural sign-off through final inspection."
            },
            {
              title: "Can we bring our own architectural plans?",
              description: "Yes, we collaborate directly with your architect or provide complete plan review and pre-construction guidance."
            }
          ]}
        />
      </div>

      <div id="contact" data-webild-section="ContactColumnWindow" data-webild-section-id="ContactColumnWindow-1" data-section="contact">
        <ContactColumnWindow
          title="Discuss Your Custom Build"
          submitText="Send Message"
          successText="Thank you. We will reply within one business day."
          images={[
            {
              imageSrc: "https://img.b2bpic.net/free-photo/low-angle-smiley-man-showing-approval_23-2148269276.jpg",
              imageAlt: "Low angle smiley man showing approval"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/view-modern-construction-site_23-2151317367.jpg",
              imageAlt: "interior of house under construction"
            },
            {
              imageSrc: "https://img.b2bpic.net/free-photo/empty-modern-room-with-furniture_23-2149178337.jpg",
              imageAlt: "Empty modern room with furniture"
            }
          ]}
          labels={{
            name: "Full Name",
            company: "Town or Location",
            email: "Email Address",
            message: "Project Details"
          }}
        />
      </div>
    </>
  );
}
