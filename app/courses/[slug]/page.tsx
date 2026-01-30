interface CoursesDetailsProps {
  params: {
    slug: string;
  };
}
export default async function CoursesDetails({ params }: CoursesDetailsProps) {
  const { slug } = await params;
  return (
    <div className="text-5xl flex justify-center items-center w-full">
      <h1>This is CoursesDetails {slug} page</h1>
    </div>
  );
}
