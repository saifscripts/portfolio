export default function Page({ params }: { params: { slug: string } }) {
  console.log(params);
  return <div className="mt-[64px]">Slug: {params.slug}</div>;
}
