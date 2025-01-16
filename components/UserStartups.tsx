import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";

// User startups component that displays the startups created by the user
const UserStartups = async ({ id }: { id: string }) => {

  // Fetch the startups created by the user
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });

  // Return the user startups component
  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
export default UserStartups;
