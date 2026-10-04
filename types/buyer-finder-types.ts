export interface ContactPerson {
  name: string;
  title: string;
  email: string;
  phone: string;
}

export interface Approach {
  channel: string;
  timing: string;
  opener: string;
  doc: string;
}

export interface Buyer {
  companyName: string;
  city: string;
  country: string;
  companyType: string;
  website: string;
  generalEmail: string;
  phone: string;
  volume: string;
  certifications: string;
  source: string;
  platformURL: string;
  contactPerson: ContactPerson;
  whyTarget: string;
  approach: Approach;
}

export interface MarketIntel {
  marketIntelligence: string;
  certificationRequirements: string;
  outreachStrategy: string;
}