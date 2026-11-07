// Organisation facts for Welfare Society for Patient Care (WSPC).
// Keep every public-facing detail here so it can be verified and updated in one place.

export const org = {
  name: "Welfare Society for Patient Care",
  short: "WSPC",
  tagline: "Life-saving kidney care for those who cannot afford it",
  founder: "Prof. (Dr.) Iffat Yazdani",
  founded: "2010",
  hospital: "Clifton Kidney & General Hospital",
  address: "F-17/2 Rojhan Street, Block 5, Clifton, Karachi, Pakistan",
  phone: "021-35837986",
  phoneHref: "tel:+922135837986",
  email: "connect.wspc@gmail.com",
  website: "wspc.org.pk",
  social: {
    facebook: "https://facebook.com/wspc.org.pk",
    linkedin: "https://pk.linkedin.com/company/welfare-society-for-patient-care",
    instagram: "https://instagram.com/wspcdialysis",
  },
} as const;

export const zakatAccount = {
  bank: "United Bank Limited (UBL)",
  title: "Welfare Society for Patient Care (Zakat)",
  accountNumber: "059801053399",
  iban: "PK94 UNIL 0112 0598 0105 3399",
  branch: "Avari Tower Branch, Karachi",
  branchCode: "0598",
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "What We Do" },
  { to: "/stories", label: "Stories" },
  { to: "/team", label: "Team" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

// Historical, publicly reported figures — refresh with current numbers when WSPC confirms them.
export const impactStats = [
  { value: "100+", label: "Regular dialysis patients" },
  { value: "700+", label: "Dialysis sessions a month" },
  { value: "10–82", label: "Ages of patients we've treated" },
  { value: "Since 2010", label: "Serving Karachi and beyond" },
] as const;
