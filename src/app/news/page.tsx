import { redirect } from "next/navigation";

// Redirect legacy /news route to the unified /programs-events page
export default function NewsPage() {
  redirect("/programs-events");
}
