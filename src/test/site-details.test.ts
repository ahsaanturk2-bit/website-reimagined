import { describe, expect, it } from "vitest";
import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";
import { board, givingLinks, org, zakatAccount } from "@/lib/site";

describe("WSPC published details", () => {
  it("shows the UBL Zakat account number and IBAN", () => {
    expect(zakatAccount.accountNumber).toBe("059801053399");
    expect(zakatAccount.iban).toBe("PK94 UNIL 0112 0598 0105 3399");
    expect(zakatAccount.branchCode).toBe("0598");
  });

  it("lists the Clifton contact details", () => {
    expect(org.phone).toBe("021-35837986");
    expect(org.email).toBe("connect.wspc@gmail.com");
  });

  it("links to WSPC's official Instagram, Facebook and LinkedIn pages", () => {
    expect(org.social.instagram).toBe("https://www.instagram.com/wspcdialysis/");
    expect(org.social.facebook).toBe("https://www.facebook.com/wspc.org.pk");
    expect(org.social.linkedin).toBe(
      "https://www.linkedin.com/company/welfare-society-for-patient-care",
    );
  });

  it("shows the registration number and founding year", () => {
    expect(org.registrationNo).toBe("PCP-2019/679");
    expect(org.founded).toBe("2009");
  });

  it("sends US donors to i-Care America and UK donors to LaunchGood", () => {
    expect(givingLinks.usa.url).toBe(
      "https://i-care-america.org/charity/welfare-society-for-patient-care-wspc/",
    );
    expect(givingLinks.usaFundraiser.url).toBe(
      "https://i-care-america.org/fundraisers/raising-funds-for-10-dialysis-patients/",
    );
    expect(givingLinks.uk.url).toBe(
      "https://www.launchgood.com/v4/campaign/your_zakat_can_save_a_dialysis_patient_this_ramadan?src=731273",
    );
  });

  it("lists all eight board members with the founder first", () => {
    expect(board).toHaveLength(8);
    expect(board[0]).toEqual({ name: "Prof. Dr Iffat Yazdani", role: "Founder & CEO" });
  });

  it.each(["/about", "/services", "/stories", "/team", "/gallery", "/donate", "/contact"])(
    "has a page at %s",
    (path) => {
      const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
      expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
    },
  );
});
