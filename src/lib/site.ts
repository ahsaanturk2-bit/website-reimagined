// Organisation facts for Welfare Society for Patient Care (WSPC).
// Keep every public-facing detail here so it can be verified and updated in one place.
// Source: WSPC's own website text and LaunchGood / i-Care America pages supplied by WSPC.

import iffatPortrait from "@/assets/iffat-yazdani.jpg.asset.json";
import mariyahPortrait from "@/assets/mariyah-duggan.jpg.asset.json";
import bushraPortrait from "@/assets/bushra-mubarak.jpg.asset.json";
import ghulamPortrait from "@/assets/ghulam-mustafa-aziz.jpg.asset.json";
import fazlulPortrait from "@/assets/fazlul-rehman.jpg.asset.json";
import salmaPortrait from "@/assets/salma-usmani.jpg.asset.json";
import fectoLogo from "@/assets/logos/fecto-group.png.asset.json";
import hblLogo from "@/assets/logos/hbl.png.asset.json";
import marineLogo from "@/assets/logos/marine-group.png.asset.json";
import meezanLogo from "@/assets/logos/meezan-bank.png.asset.json";
import psoLogo from "@/assets/logos/pso.png.asset.json";
import infaqLogo from "@/assets/logos/infaq-foundation.png.asset.json";
import paklibyaLogo from "@/assets/logos/paklibya.png.asset.json";
import ublLogo from "@/assets/logos/ubl.png.asset.json";
import faysalLogo from "@/assets/logos/faysal-bank.png.asset.json";
import alfalahLogo from "@/assets/logos/bank-alfalah.png.asset.json";
import soortyLogo from "@/assets/logos/soorty.png.asset.json";
import boschLogo from "@/assets/logos/bosch.png.asset.json";
import alHabibLogo from "@/assets/logos/bank-al-habib.png.asset.json";
import pblLogo from "@/assets/logos/pakistan-beverage.png.asset.json";
import icareLogo from "@/assets/logos/icare-fund-america.png.asset.json";

export const org = {
  name: "Welfare Society for Patient Care",
  short: "WSPC",
  tagline: "Life-saving dialysis for those who need it most",
  founder: "Prof. Dr Iffat Yazdani",
  founded: "2009",
  hospital: "Clifton Kidney & General Hospital",
  address: "F-17/2 Rojhan Street, Block 5, Clifton, Karachi 75600, Pakistan",
  phone: "021-35837986",
  phoneHref: "tel:+922135837986",
  email: "connect.wspc@gmail.com",
  website: "wspc.org.pk",
  registrationNo: "PCP-2019/679",
  registrationAct: "Societies Registration Act XXI",
  auditor: "Ernst & Young",
  social: {
    facebook: "https://www.facebook.com/wspc.org.pk",
    linkedin: "https://www.linkedin.com/company/welfare-society-for-patient-care",
    instagram: "https://www.instagram.com/wspcdialysis/",
  },
} as const;

// Official WSPC social profiles, confirmed by WSPC.
export const socialLinks = [
  { network: "Instagram", handle: "@wspcdialysis", href: org.social.instagram },
  { network: "Facebook", handle: "wspc.org.pk", href: org.social.facebook },
  { network: "LinkedIn", handle: "Welfare Society for Patient Care", href: org.social.linkedin },
] as const;

export const zakatAccount = {
  bank: "United Bank Limited (UBL)",
  title: "Welfare Society for Patient Care (Zakat)",
  accountNumber: "059801053399",
  iban: "PK94 UNIL 0112 0598 0105 3399",
  branch: "Avari Tower Branch, Karachi",
  branchCode: "0598",
} as const;

// Online giving for donors outside Pakistan.
export const givingLinks = {
  usa: {
    partner: "i-Care Fund America",
    logo: icareLogo.url,
    note: "Tax-deductible in the USA through the iCare donor-advised fund.",
    url: "https://i-care-america.org/charity/welfare-society-for-patient-care-wspc/",
  },
  usaFundraiser: {
    title: "Raising Funds for 10 Dialysis Patients",
    url: "https://i-care-america.org/fundraisers/raising-funds-for-10-dialysis-patients/",
  },
  uk: {
    partner: "LaunchGood",
    title: "Your Zakat Can Save a Dialysis Patient This Ramadan",
    url: "https://www.launchgood.com/v4/campaign/your_zakat_can_save_a_dialysis_patient_this_ramadan?src=731273",
  },
} as const;

// Figures from WSPC's 2026 LaunchGood appeal (GBP).
export const givingTiers = [
  { amount: "£50", label: "1 week of dialysis + medicines" },
  { amount: "£200", label: "1 month of dialysis + medicines" },
  { amount: "£600", label: "3 months of dialysis + medicines" },
  { amount: "£1,250", label: "6 months of dialysis + medicines" },
  { amount: "£2,500", label: "1 year of dialysis + medicines" },
  { amount: "£7,000", label: "1 dialysis machine" },
] as const;

export const certifications = [
  "PCP certified",
  "Shahrah certified",
  "ISO certified",
  "Sindh Health Care registered",
  "Tax exempted",
  "Registered society",
] as const;

export const board = [
  { name: "Prof. Dr Iffat Yazdani", role: "Founder & CEO" },
  { name: "Dr Mariyah Duggan", role: "Director of Medical Affairs" },
  { name: "Dr Bushra Mubarak", role: "General Secretary" },
  { name: "Mr Ghulam Mustafa Aziz", role: "Treasurer" },
  { name: "Mr Fazlul Rehman", role: "Trustee" },
  { name: "Mr Salik Nazir Ahmed", role: "Trustee" },
  { name: "Mr John Corea", role: "Trustee" },
  { name: "Mrs Begum Salma Usmani", role: "Trustee" },
] as const;

// Original portraits from WSPC's website, matched to the supplied board screenshots.
export const boardPortraits: Readonly<Partial<Record<(typeof board)[number]["name"], string>>> = {
  "Prof. Dr Iffat Yazdani": iffatPortrait.url,
  "Dr Mariyah Duggan": mariyahPortrait.url,
  "Dr Bushra Mubarak": bushraPortrait.url,
  "Mr Ghulam Mustafa Aziz": ghulamPortrait.url,
  "Mr Fazlul Rehman": fazlulPortrait.url,
  "Mrs Begum Salma Usmani": salmaPortrait.url,
};

// Supporter and partner logos supplied by WSPC.
export const supporters = [
  { name: "Meezan Bank", logo: meezanLogo.url },
  { name: "Pakistan State Oil", logo: psoLogo.url },
  { name: "HBL", logo: hblLogo.url },
  { name: "UBL", logo: ublLogo.url },
  { name: "Bank Alfalah", logo: alfalahLogo.url },
  { name: "Faysal Bank", logo: faysalLogo.url },
  { name: "Bank AL Habib", logo: alHabibLogo.url },
  { name: "PakLibya", logo: paklibyaLogo.url },
  { name: "INFAQ Foundation", logo: infaqLogo.url },
  { name: "Fecto Group", logo: fectoLogo.url },
  { name: "Marine Group", logo: marineLogo.url },
  { name: "Soorty", logo: soortyLogo.url },
  { name: "Bosch", logo: boschLogo.url },
  { name: "Pakistan Beverage Limited", logo: pblLogo.url },
] as const;

export const testimonials = [
  {
    quote:
      "Very thankful for the humble doctors and staff here. Everyone knows their job well and they've taken outstanding care of my mother.",
    name: "Ulfet Fatima",
  },
  {
    quote:
      "The environment is very good, hygiene protocols are properly followed, and the doctors do their job really professionally. They know how to motivate their patients, and never let them lose hope.",
    name: "Umer Rehman",
  },
  {
    quote:
      "The services that I receive from Clifton Kidney Hospital are excellent. Dr. Yazdani and the staff are friendly and ensure that I am properly informed about my health and care. I would have no qualms in recommending them to family and friends.",
    name: "Jamshed Jalil",
  },
] as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "What We Do" },
  { to: "/about", label: "Who We Are" },
  { to: "/team", label: "Our Board" },
  { to: "/stories", label: "Feedback" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const impactStats = [
  { value: "100+", label: "Patients on free dialysis" },
  { value: "~190", label: "Sessions funded by last year's UK appeal" },
  { value: "24/7", label: "Emergency medical service" },
  { value: "Since 2009", label: "Serving patients in Karachi" },
] as const;
