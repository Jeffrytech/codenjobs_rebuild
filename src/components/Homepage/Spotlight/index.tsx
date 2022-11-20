import moment from "moment";
import { JobResponse } from "../../../pages";

const Card = ({
  company_logo,
  company_name,
  job_title,
  job_category,
  job_id,
  job_location,
  job_salary,
  job_skills,
  job_type,
  job_published_at,
}: JobResponse) => (
  <div className="relative bg-white shadow-gg rounded-lg my-2 sm:p-6 p-5">
    <div className="absolute -top-5 sm:-translate-y-5">
      <img
        className="sm:h-[80px] sm:w-[80px] h-[48px] w-[48px] rounded-full"
        src={company_logo}
        alt=""
      />
    </div>
    <p className="ml-auto bg-primary/10 sm:w-[100px] sm:h-[40px] w-[66px] h-[26px] flex items-center justify-center rounded-full text-[10px] leading-[10px] sm:text-[15px] sm:leading-4 font-medium text-primary ">
      PREMIER
    </p>
    <div className="sm:my-8 mt-2 sm:space-y-2 my-4">
      <span className="text-base sm:text-xl sm:text-black text-[#575757]">
        {company_name}
      </span>
      <p className="sm:text-[32px] text-xl text-black/90 sm:text-black sm:leading-9 font-bold sm:pb-3 clamp-2 h-[70px] sm:h-[77px]">
        {job_title}
      </p>
    </div>

    <div className="space-y-2">
      <div className="jobs-posting sm:text-lg text-sm text-[#575757] flex flex-wrap items-center gap-2">
        <p>{job_type}</p>
        <p>{job_category}</p>
        <p>{job_location}</p>
        <p>
          <img src="/static/icons/coin.svg" alt="" />
          {job_salary}
        </p>
      </div>
      <div className="flex items-center flex-wrap gap-2">
        {job_skills.map((d) => (
          <div
            className="p-2 sm:text-base font-medium text-xs bg-[#4D4D4D1A] text-gray-500 rounded-lg"
            key={d}
          >
            {d}
          </div>
        ))}
      </div>
      <div className="text-[#575757] sm:text-base text-sm">
        {job_published_at === null
          ? moment.utc(new Date()).fromNow()
          : moment.utc(job_published_at).fromNow()}
      </div>
    </div>
  </div>
);

const Spotlight = ({ jobs }: { jobs: JobResponse[] }) => {
  return (
    <section className="bg-cover sm:space-y-16 space-y-10 sm:px-6 sm:py-16 px-5 py-10 sm:bg-[url('/static/spiral-bg.jpg')] bg-[url('/static/sm-spiral-bg.jpg')] bg-no-repeat bg-center sm:bg-fixed">
      <h3 className="font-semibold text-center  text-[35px] leading-9 tracking-[15px] sm:tracking-[21px]">
        Spotlight
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 grid-cols-1">
        {jobs.map((job) => (
          <Card {...job} key={job.job_id} />
        ))}
      </div>
    </section>
  );
};

export default Spotlight;
