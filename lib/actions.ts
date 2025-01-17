"use server";

import { auth } from "@/auth";
import { parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

// Function for creating a pitch and returning the result with the title, description, category, link, and slug with the current value and the author with the reference and the pitch with the pitch value
export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string,
) => {

  // Function for authenticating the session and returning the session
  const session = await auth();

  // If there is no session, return the server action response with the error message "Not signed in" and the status "ERROR"
  if (!session)
    return parseServerActionResponse({
      error: "Not signed in",
      status: "ERROR",
    });

  // Destructure the title, description, category, and link from the form
  const { title, description, category, link } = Object.fromEntries(
    Array.from(form).filter(([key]) => key !== "pitch"),
  );

  // Create a slug from the title with the lower and strict options
  const slug = slugify(title as string, { lower: true, strict: true });

  // Try to create the startup with the title, description, category, link, slug with the current value, author with the reference, and pitch with the pitch value
  try {
    const startup = {
      title,
      description,
      category,
      image: link,
      slug: {
        _type: slug,
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session?.id,
      },
      pitch,
    };

    // Write the startup to the database and return the result with the startup
    const result = await writeClient.create({ _type: "startup", ...startup });

    // Return the server action response with the result and the status "SUCCESS"
    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.log(error);

    // Return the server action response with the error message and the status "ERROR"
    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
