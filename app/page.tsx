import { CourseCardList } from "./(courses)/_components/course-card-list";
import HomeHeroSection from "./components/home-herro-section/home-herro-section";

export default async function Home() {
  return (
    <>
      <HomeHeroSection />
      <section className="container  pt-20">
        <div className="text-center xl:text-right">
          <h2 className="text-2xl font-extrabold">تازه ترین دوره های آموزشی</h2>
          <p className="mt-3 text-lg">
            برای به‌روز موندن، یاد گرفتن نکته‌های تازه ضروری‌ه!
          </p>
        </div>
        <CourseCardList />
      </section>
    </>
  );
}
