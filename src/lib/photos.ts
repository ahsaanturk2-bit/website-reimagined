// Real WSPC photos supplied by the organisation, hosted as CDN assets.
// Pages import from here so a photo can be swapped in one place.

import childOnDialysis from "@/assets/photos/child-on-dialysis.jpg.asset.json";
import patientDialysisWard from "@/assets/photos/patient-dialysis-ward.jpg.asset.json";
import wspcTeamHospital from "@/assets/photos/wspc-team-hospital.jpg.asset.json";
import medicalTeam from "@/assets/photos/medical-team.jpg.asset.json";
import worldKidneyDayWalk from "@/assets/photos/world-kidney-day-walk.jpg.asset.json";
import worldCancerDayCamp from "@/assets/photos/world-cancer-day-camp.jpg.asset.json";
import supportersVisit from "@/assets/photos/supporters-visit.jpg.asset.json";
import freeHealthCamp from "@/assets/photos/free-health-camp.jpg.asset.json";
import posterCancer from "@/assets/photos/poster-world-cancer-day-2025.jpg.asset.json";
import posterKidney from "@/assets/photos/poster-world-kidney-day-2025.jpg.asset.json";
import posterHypertension from "@/assets/photos/poster-world-hypertension-day-2025.jpg.asset.json";
import posterDiabetes from "@/assets/photos/poster-world-diabetes-day-2025.jpg.asset.json";
import registrationCertificate from "@/assets/photos/registration-certificate.jpg.asset.json";
import donateUsa from "@/assets/photos/donate-usa.jpg.asset.json";
import donateUk from "@/assets/photos/donate-uk.jpg.asset.json";

export type Photo = { src: string; alt: string; w: number; h: number };

export const photos = {
  childOnDialysis: {
    src: childOnDialysis.url,
    alt: "A young patient smiling during his dialysis session",
    w: 1544,
    h: 868,
  },
  patientDialysisWard: {
    src: patientDialysisWard.url,
    alt: "A patient resting during dialysis treatment",
    w: 1280,
    h: 960,
  },
  wspcTeamHospital: {
    src: wspcTeamHospital.url,
    alt: "WSPC doctors and staff at Clifton Kidney & General Hospital",
    w: 1280,
    h: 851,
  },
  medicalTeam: {
    src: medicalTeam.url,
    alt: "WSPC's doctors and nursing team",
    w: 569,
    h: 339,
  },
  worldKidneyDayWalk: {
    src: worldKidneyDayWalk.url,
    alt: "Students and staff at a World Kidney Day awareness walk",
    w: 1504,
    h: 1002,
  },
  worldCancerDayCamp: {
    src: worldCancerDayCamp.url,
    alt: "WSPC team at the World Cancer Day 2025 free screening camp",
    w: 1569,
    h: 1003,
  },
  supportersVisit: {
    src: supportersVisit.url,
    alt: "Supporters and doctors visiting the dialysis centre",
    w: 1600,
    h: 942,
  },
  freeHealthCamp: {
    src: freeHealthCamp.url,
    alt: "A free blood pressure check at a community health camp",
    w: 960,
    h: 720,
  },
  posterCancer: {
    src: posterCancer.url,
    alt: "World Cancer Day 2025 camp poster",
    w: 720,
    h: 1280,
  },
  posterKidney: {
    src: posterKidney.url,
    alt: "World Kidney Day 2025 camp poster",
    w: 899,
    h: 1599,
  },
  posterHypertension: {
    src: posterHypertension.url,
    alt: "World Hypertension Day 2025 poster",
    w: 585,
    h: 1040,
  },
  posterDiabetes: {
    src: posterDiabetes.url,
    alt: "World Diabetes Day 2025 poster",
    w: 666,
    h: 1040,
  },
  registrationCertificate: {
    src: registrationCertificate.url,
    alt: "WSPC's certificate of registration under the Societies Registration Act XXI of 1860",
    w: 852,
    h: 1362,
  },
  donateUsa: { src: donateUsa.url, alt: "New York skyline and the Statue of Liberty", w: 800, h: 450 },
  donateUk: { src: donateUk.url, alt: "Westminster and Big Ben in London", w: 830, h: 554 },
} satisfies Record<string, Photo>;

export const galleryPhotos: (Photo & { caption: string; tag: "Patients" | "Team" | "Events" })[] = [
  { ...photos.childOnDialysis, caption: "Smiles during treatment", tag: "Patients" },
  { ...photos.wspcTeamHospital, caption: "Our team at Clifton Kidney & General Hospital", tag: "Team" },
  { ...photos.worldCancerDayCamp, caption: "World Cancer Day 2025 screening camp", tag: "Events" },
  { ...photos.patientDialysisWard, caption: "Care in the dialysis ward", tag: "Patients" },
  { ...photos.posterKidney, caption: "World Kidney Day 2025", tag: "Events" },
  { ...photos.medicalTeam, caption: "Our doctors and nurses", tag: "Team" },
  { ...photos.worldKidneyDayWalk, caption: "World Kidney Day awareness walk", tag: "Events" },
  { ...photos.freeHealthCamp, caption: "Free health checks for the community", tag: "Events" },
  { ...photos.posterCancer, caption: "World Cancer Day 2025", tag: "Events" },
  { ...photos.supportersVisit, caption: "Supporters visiting the centre", tag: "Team" },
  { ...photos.posterHypertension, caption: "World Hypertension Day 2025", tag: "Events" },
  { ...photos.posterDiabetes, caption: "World Diabetes Day 2025", tag: "Events" },
];
