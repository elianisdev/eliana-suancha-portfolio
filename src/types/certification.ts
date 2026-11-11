export type CertificationId =
  | "frontendReact"
  | "reactTypeScript"
  | "githubFoundations"
  | "githubActions"
  | "claudeCode"
  | "mcpAdvanced";

export type CertificationArea = "development" | "ai";

export type Certification = {
  id: CertificationId;
  title: string;
  issuer: string;
  issuerInitials: string;
  issuedAt: string;
  area: CertificationArea;
  credentialUrl?: string;
};

export type Education = {
  degree: string;
  detail: string;
};
