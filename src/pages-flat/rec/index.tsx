import { type NextPage } from "next";
import { RecLayout } from "./layout";
import RecomendationCard from "./ui/RecomendationCard";
import { recomendedGroups } from "~/consts";

export const Recommendation: NextPage = () => {
  return (
    <RecLayout>
      {recomendedGroups.map((group) => (
        <RecomendationCard key={group.name} group={group} />
      ))}
    </RecLayout>
  );
};
