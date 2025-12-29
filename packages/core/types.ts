export type OSINTCategory = 'social' | 'network' | 'corporate' | 'crypto' | 'leak';

export interface OSINTResult {
  id: string;
  source: string;
  type: string;
  data: any;
  confidence: number; // 0 to 1
  metadata: {
    timestamp: string;
    url?: string;
    country?: string;
  };
}

export interface OSINTModule {
  id: string;
  name: string;
  category: OSINTCategory;
  supportedRegions: string[]; // ISO codes like ['FR', 'US'] or ['GLOBAL']
  execute: (query: string) => Promise<OSINTResult[]>;
}
