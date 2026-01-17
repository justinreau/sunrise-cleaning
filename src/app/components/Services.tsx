import React from 'react';
import content from "@/data/content.json";
import { ArrowUpRight } from "lucide-react";
import { Section, Container } from "@/app/components/layout/Layout";
import { SectionHeader, CardHeading } from "@/app/components/ui/Typography"; // <--- THE SYSTEM

export function Services() {
  return (
    <Section className="!py-0">
      <Container>
        <SectionHeader>Services</SectionHeader>
      </Container>

      <Container className="pb-[clamp(60px,8vw,120px)]">
        <div className="flex flex-col gap-6 items-center w-full">
          {content.services.map((service, index) => (
            <div key={index} className="w-full group cursor-pointer">
              <div className="w-full bg-slate-50 border border-slate-100 p-6 md:p-10 rounded-full flex justify-between items-center transition-all hover:bg-white hover:shadow-lg hover:border-[#00BBA7]/30">
                <span className="font-bold text-xl text-slate-300 group-hover:text-[#00BBA7] transition-colors">0{index + 1}</span>

                {/* Using System Component */}
                <CardHeading className="text-center w-full group-hover:text-[#00BBA7] transition-colors">
                  {service.title}
                </CardHeading>

                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#00BBA7] group-hover:border-[#00BBA7] transition-all">
                  <ArrowUpRight className="text-slate-400 group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}