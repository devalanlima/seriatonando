declare global {
  interface CertificationsRegionContent {
    "certification": string;
    "meaning": string;
    "order": number;
  }
  interface CertificationsRegion {
    [key: string]: Array<CertificationsRegionContent>;
  }
  interface Certifications {
    "certifications": CertificationsRegion;
  }



  interface DisplayPriorities {
    [key: string]: number;
  }
  interface Provider {
    "display_priorities": DisplayPriorities;
    "display_priority": number;
    "logo_path": string;
    "provider_id": number;
    "provider_name": string;
  }
  interface StreamingProviders {
    "results": Array<Provider>;
  }



  interface WatchProvidersRegionContent {
    "logo_path": string;
    "provider_id": number;
    "provider_name": string;
    "display_priority": number;
  }
  interface WatchProvidersResults {
    [key: string]: {
      "link": string;
      "flatrate"?: Array<WatchProvidersRegionContent>;
      "buy"?: Array<WatchProvidersRegionContent>;
      "rent"?: Array<WatchProvidersRegionContent>;
    }
  }
  interface WatchProviders {
    "id": number;
    "results": WatchProvidersResults;
  }



  interface Genre {
    "id": number;
    "name": string;
  }
  interface Genres {
    "genres": Array<Genre>;
  }
}
export { };

