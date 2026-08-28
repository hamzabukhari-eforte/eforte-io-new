"use client";

import Container from "@/components/atoms/Container";
import CapabilityStudioFeatureBlock from "./CapabilityStudioFeatureBlock";
import type { StudioAccentId, StudioFeature } from "@/data/capabilities/types";

type CapabilityStudioFeaturesProps = {
  accent: StudioAccentId;
  features: StudioFeature[];
};

type FeatureGroup =
  | { type: "single"; feature: StudioFeature; index: number }
  | { type: "pair"; features: [StudioFeature, StudioFeature]; index: number };

function groupFeatures(features: StudioFeature[]): FeatureGroup[] {
  const groups: FeatureGroup[] = [];
  let i = 0;

  while (i < features.length) {
    const current = features[i];
    const next = features[i + 1];

    if (current.layout === "half" && next?.layout === "half") {
      groups.push({
        type: "pair",
        features: [current, next],
        index: i,
      });
      i += 2;
      continue;
    }

    groups.push({ type: "single", feature: current, index: i });
    i += 1;
  }

  return groups;
}

export default function CapabilityStudioFeatures({
  accent,
  features,
}: CapabilityStudioFeaturesProps) {
  const groups = groupFeatures(features);

  return (
    <section className="bg-white py-16">
      <Container>
        <div className="flex flex-col gap-4 md:gap-5">
          {groups.map((group) => {
            if (group.type === "pair") {
              return (
                <div
                  key={`${group.features[0].id}-${group.features[1].id}`}
                  className="grid gap-4 md:grid-cols-2 md:gap-5"
                >
                  {group.features.map((feature, pairIndex) => (
                    <CapabilityStudioFeatureBlock
                      key={feature.id}
                      accent={accent}
                      feature={feature}
                      index={group.index + pairIndex}
                    />
                  ))}
                </div>
              );
            }

            return (
              <CapabilityStudioFeatureBlock
                key={group.feature.id}
                accent={accent}
                feature={group.feature}
                index={group.index}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}
