import BodyContent from "../../../components/BodyContent";

async function getData(slug: string) {
  const url = `https://prosecco-staging.eko.org/api/pages/${slug}.json`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await getData(slug);
  const { content } = data;

  return (
    <main>
      <BodyContent content={content} />
    </main>
  );
}
