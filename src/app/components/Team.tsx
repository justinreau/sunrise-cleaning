import React from 'react';
import content from "@/data/content.json";
import { Section, Container, Grid } from "@/app/components/layout/Layout";
import { SectionHeader, CardHeading, BodyText, Label } from "@/app/components/ui/Typography"; // <--- THE SYSTEM

export function Team() {
   const featured = content.team[0];

   return (
      <Section className="!py-0">
         <Container>
            <SectionHeader>Our Team</SectionHeader>
         </Container>

         <Container className="pb-[clamp(60px,8vw,120px)]">
            <Grid>
               <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 justify-center">
                  <div>
                     <Label>Our Expert</Label>
                     <CardHeading className="mb-4">{featured.name}</CardHeading>
                     <BodyText>{featured.description}</BodyText>
                  </div>
               </div>

               <div className="col-span-12 lg:col-span-8">
                  <div className="aspect-[16/9] rounded-[60px] overflow-hidden border-2 border-slate-100 shadow-xl">
                     <img src={featured.image} className="w-full h-full object-cover" alt={featured.name} />
                  </div>
               </div>
            </Grid>
         </Container>
      </Section>
   );
}