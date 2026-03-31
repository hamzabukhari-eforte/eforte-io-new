import React from "react";
import Container from "@/components/atoms/Container";
import FormSection from "./FormSection";

export default function BForm() {
  return (
    <Container>
      <div className="w-full relative bg-black/90 lg:px-0 flex items-center justify-center">
        <FormSection />
      </div>
    </Container>
  );
}

