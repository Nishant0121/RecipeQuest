/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
} from "react";
import { url } from "inspector";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

export default async function Home() {
  const api = "eb3e5822181c463a8f3b263da6b357df";

  // const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.API}`;

  const data = await fetch(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api}`
  ).then((res) => res.json());

  console.log(api);

  if (!data) {
    return (
      <main className=" w-full min-h-screen ">
        <nav className="flex w-full justify-between items-center">
          <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            RecipeQuest
          </h1>
          <Button asChild className=" bg-blue-400">
            <Link href="/home">Find Recipes</Link>
          </Button>
        </nav>
        <div className=" flex flex-col items-center justify-center ">
          <h1 className="scroll-m-20 w-full text-start text-xl font-semibold tracking-tight">
            Recipes
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </ul>
        </div>
      </main>
    );
  }

  return (
    <main className=" w-full min-h-screen ">
      <nav className="flex w-full justify-between items-center">
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          RecipeQuest
        </h1>
        <Button asChild className=" bg-blue-400">
          <Link href="/home">Find Recipes</Link>
        </Button>
      </nav>
      <div className=" flex flex-col items-center justify-center ">
        <h1 className="scroll-m-20 w-full text-start text-xl font-semibold tracking-tight">
          Recipes
        </h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.results?.map(
            (recipe: {
              image: undefined;
              id: Key | null | undefined;
              title:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
            }) => (
              <li
                className=" flex flex-col items-center justify-center "
                key={recipe.id}
              >
                {recipe.title}
                <img
                  src={recipe.image}
                  className=" w-full flex items-center justify-center object-cover rounded-lg"
                  alt="recipe"
                />
              </li>
            )
          )}
        </ul>
      </div>
    </main>
  );
}
