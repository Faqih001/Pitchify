import StartupForm from "@/components/StartupForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

// Enable PPR for this page to test experimental feature
const Page = async () => {

  // Session check to restrict access to the page if user is not logged in
  const session = await auth();

  // If user is not logged in, redirect to home page
  if (!session) redirect("/");

  // Return the page with the fetched data
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Startup</h1>
      </section>

      <StartupForm />
    </>
  );
};

export default Page;
