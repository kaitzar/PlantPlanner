export type Type = "all" | "Vine" | "Tree" | "Succulent" | "Shrub" | "Herb" | "Grass" | "Fern";
export type SunsetZones = "all" | "desert" | "coast" | "mountains";
export type SummerIrrigation = "all" | "Keep Moist" | "1x/month" | "2x/month" | "3x/month" | "Never"; 
export type EaseOfCare = "all" | "Very Easy" | "Moderately Easy" | "Fairly Difficult";
export type Sun = "all" | "Full Shade" | "Mixed Shade/Sun" | "Full Sun";

export type FilterSettings = {
    type: Array<Type>;
    sunset_zones: Array<SunsetZones>;
    summer_irrigation: Array<SummerIrrigation>;
    ease_of_care: Array<EaseOfCare>;
    sun: Array<Sun>;
};