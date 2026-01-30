interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

export default async function BlogDetails({ params }: BlogDetailsProps) {
  const { slug } = await params;
  return (
    <div className="text-5xl flex justify-center items-center w-full">
      <h1>{slug}</h1>
    </div>
  );
}
