import img0 from "../assets/icons/Image.svg";
import "../index.css";
const Projects = ({ img, id, job, data, datatittle, activeTasks, assigness, tasks }) => {
  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white shadow">
      <div className="flex items-center gap-3">
        <img src={img} alt="project" className="w-12 h-12" />
        <div>
          <h3 className="font-semibold">{job}</h3>
          <p className="text-sm text-gray-600">ID: {id}</p>
          <p className="text-xs text-gray-500">{data}</p>
          <p className="text-xs">Tasks: {activeTasks}/{tasks}</p>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="ml-[240px] pt-[50px] relative">
      <div className="flex justify-between">
        <div className="flex flex-col gap-y-5 w-[931px] absolute bottom-[300px] right-[-13px] top-[110px]">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Projects
              key={idx} // Добавили ключ
              img={img0}
              id="PN0001265"
              job="Medical App (iOS native)"
              data="Created Sep 12, 2020"
              datatittle="Project Data"
              activeTasks={2}
              assigness=""
              tasks={2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;