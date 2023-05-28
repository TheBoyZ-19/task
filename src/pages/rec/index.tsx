import { type NextPage } from "next";
import RecLayout from "./layout";
import RecomendationCard from "./components/RecomendationCard";
import { recomendedGroups } from "~/consts";

const Recommendation: NextPage = () => {
  return (
    <RecLayout>
      {recomendedGroups.map((group) => (
        <RecomendationCard key={group.name} group={group}/>
      ))}
    </RecLayout>
  );
};

export default Recommendation;
