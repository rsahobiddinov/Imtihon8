import "../index.css";
import WorkloadCard from "./ui/WorkloadCard";
import img from "../assets/icons/photo.svg";

const Team = () => {
  return (
    <div className="ml-[240px] pt-[50px] relative ">
      <div className="flex ">
        <div className="flex flex-col gap-y-5 w-[931px] right-[-19px] top-[100px] absolute bottom-[500px]">
          <div className="flex gap-[30px]">
            {Array.from({ length: 4 }).map((_, idx) => (
              <WorkloadCard
                img={img}
                button="Middle"
                name="Shawn Stone"
                job="UI/UX Designer"
                cardClassName="bg-[#fff]"
              />
            ))}
          </div>
          <div className="flex gap-[30px]">
            {Array.from({ length: 3 }).map((_, idx) => (
              <WorkloadCard
                img={img}
                button="Middle"
                name="Shawn Stone"
                job="UI/UX Designer"
                cardClassName="bg-[#fff]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
