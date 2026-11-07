import { describe, expect, it } from "vitest";
import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";

import { routeTree } from "@/routeTree.gen";
import { org, zakatAccount } from "@/lib/site";

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

  it.each(["/about", "/services", "/stories", "/team", "/gallery", "/donate", "/contact"])(
    "has a page at %s",
    (path) => {
      const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
      expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
    },
  );
});
