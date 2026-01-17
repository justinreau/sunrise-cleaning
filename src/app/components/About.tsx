import React from 'react';
import { Section, Container, Grid } from "@/app/components/layout/Layout";
import content from "@/data/content.json";
import { SectionHeader, CardHeading, BodyText } from "@/app/components/ui/Typography"; // <--- THE SYSTEM

export function About() {
  return (
    <Section className="!py-0">
      <Container>
        <SectionHeader>About Us</SectionHeader>
      </Container>

      <Container className="pb-[clamp(60px,8vw,120px)]">
        <Grid className="items-center">
          <div className="hidden md:block col-span-5">
            <div className="aspect-[3/4] rounded-[60px] rotate-[-3deg] overflow-hidden border-4 border-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1556579573-1629c871d914?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover" alt="About" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col gap-8">
            {/* Using System Components */}
            <CardHeading>{content.about.description}</CardHeading>
            <BodyText>
              We believe a clean home is the foundation of a happy life. Our team is dedicated to bringing sunshine into your space with eco-friendly solutions and meticulous attention to detail.
            </BodyText>
          </div>
        </Grid>
      </Container>
    </Section>
  );
}