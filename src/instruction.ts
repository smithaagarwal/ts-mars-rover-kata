const INSTRUCTIONS = ["L", "R", "M"] as const;
type instruction = (typeof INSTRUCTIONS)[number];
