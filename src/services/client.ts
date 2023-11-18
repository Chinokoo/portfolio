import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "r8pw9hh8",
  dataset: "production",
  apiVersion: "2023-11-14",
  useCdn: true,
  token:
    "skiJDV3SWXGGN31FQu20S4TQPnyeQGgjYdImjj3bOakPxorGuEHHZDEv8fvqaY9HzXB9YjJe3CduWws1H11ixbOdEmF0wns4jh72TTZJKArp6abHP8BfuH1vKRr0os0QdTUWvYfNECSomf8vrD8oPBNXIPLCBbguR0298hZIsNhFLUYZx7w7",
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
