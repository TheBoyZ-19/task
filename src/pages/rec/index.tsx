import { type NextPage } from "next";
import RecLayout from "./layout";
import RecomendationCard from "./components/RecomendationCard";
import { recomendedGroups } from "./mockdata";

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
