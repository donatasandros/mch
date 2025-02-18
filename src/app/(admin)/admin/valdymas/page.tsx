import { getUser } from "@/actions/auth";

export default async function ValdymasPage() {
  const user = await getUser();

  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}
