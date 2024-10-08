import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/try",
  "/topics",
  "/company",
  "/compare",
  "/search",
  "/profile/null",
  "/allmyquestions",
  "/addquestion"
  ,
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});
