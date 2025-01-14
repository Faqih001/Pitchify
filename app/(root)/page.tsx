import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

// Home page component that fetches all startups and displays them in a grid view
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {

  // Query for startups based on search query
  const query = (await searchParams).query;

  // Set search query as a parameter
  const params = { search: query || null };

  // Get session data for user authentication
  const session = await auth();

  // Log session ID
  console.log(session?.id);

  // Fetch all startups from Sanity Studio based on search query
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  // Return the home page component
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
