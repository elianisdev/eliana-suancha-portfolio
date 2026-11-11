export type ArchitecturePatternId = "cleanArchitecture" | "atomicDesign";

export type LayerMarker = "number" | "dot";

export type ArchitecturePattern = {
  id: ArchitecturePatternId;
  marker: LayerMarker;
  highlightedLayers: number[];
};

export type ArchitectureLayerContent = {
  name: string;
  detail: string;
};

export type ArchitecturePatternTranslation = {
  eyebrow: string;
  title: string;
  description: string;
  layers: ArchitectureLayerContent[];
};

export type SkillGroupId = "core" | "stateAndData" | "architecture" | "quality" | "ai" | "alsoWith";

export type SkillGroup = {
  id: SkillGroupId;
  skills: string[];
};
