// middleware.js

import { withClerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Apply Clerk middleware
export default withClerkMiddleware((req) => {
  // You can add custom logic here if needed
  return NextResponse.next();
});

// Specify paths to match
export const config = {
  matcher: [
    // Protect all routes except for static files and Clerk’s own routes
    /*
      The following regex matches all routes except:
      - Paths starting with _next (Next.js internals)
      - Files with extensions like .html, .css, .js, images, fonts, etc.
      - Static assets like .ico, .csv, .docx, .xlsx, .zip, .webmanifest
    */
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    
    // Always run middleware for API routes and tRPC
    "/(api|trpc)(.*)",
  ],
};
