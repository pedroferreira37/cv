import { getCurrentUser } from "@/actions/getCurrentUser";

export default async function Create({ params }) {
  const user = await getCurrentUser();

  const { id } = params;

  return <div className="">Forms</div>;
}
