import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const { data } = await axios.get(
        "https://portfolio-backend-91np.onrender.com/api/v1/project/getall",
        { withCredentials: true }
      );
      setProjects(data.projects);
    };
    getProjects();
  }, []);
  return (
    <div>
      <h1 className="overflow-x-hidden text-[2rem] sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem]  font-semibold letter-spaced  dark:text-gray-100">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ml-4">
        {viewAll
          ? projects &&
            projects.map((element) => {
              return (
                <Link
                  to={`/project/${element._id}`}
                  key={element._id}
                  className=" my-8 sm:my-16"
                >
                  <img
                    src={element.projectBanner && element.projectBanner.url}
                    alt={element.title}
                    className="bg-gray-100 p-2 sm:p-3  h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px] track"
                  />
                  <p className="text-muted-foreground text-center mt-2">
                    {element.title}
                  </p>
                </Link>
              );
            })
          : projects &&
            projects.slice(0, 9).map((element) => {
              return (
                <Link
                  to={`/project/${element._id}`}
                  key={element._id}
                  className="my-8 sm:my-16"
                >
                  <img
                    src={element.projectBanner && element.projectBanner.url}
                    alt={element.title}
                    className="bg-gray-100 p-1  "
                  />
                  <p className="text-muted-foreground text-center mt-2 text-gray-600 dark:text-gray-300">
                    {element.title}
                  </p>
                </Link>
              );
            })}
      </div>
      {projects && projects.length > 9 && (
        <div className="w-full text-center my-9">
          <Button className="w-52" onClick={() => setViewAll(!viewAll)}>
            {viewAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
