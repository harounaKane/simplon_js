import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";

export default function Categories() {
  return (
    <div className="d-flex justify-content-around">
      {categories.map((categorie) => (
        <CategoryCard key={categorie.id} categorie={categorie} />
      ))}
    </div>
  );
}
