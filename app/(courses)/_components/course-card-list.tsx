import { CourseSummary } from "@/app/types/course-summary.interface";
import { CourseCard } from "./course-card";

async function getNewestCourses(count: number): Promise<CourseSummary[]> {
  const res = await fetch(
    `https://api.classbon.com/api/courses/newest/${count}`,
    {
      next: { revalidate: 24 * 60 * 60 },
    }
  );
  return res.json();
}
export const CourseCardList = async () => {
  const newestCourses = await getNewestCourses(4);
  return (
    <div className="flex flex-wrap justify-center xl:justify-start gap-6 mt-10">
      {newestCourses.map((course) => (
        <CourseCard key={course.id} {...course} />
      ))}
    </div>
  );
};
