import { Button } from "@/components/ui/button";

export default async function Home() {
  return (
    <main className="max-w-7xl h-screen flex justify-center align-center flex-col mx-auto px-4 py-8 md:px-0">
        <h1 className="text-5xl font-bold text-center mb-5">404 Not Found</h1>
        <p className="text-center mb-5">Your visited page not found. You may go home page.</p>
        <Button className="w-min mx-auto mt-10">Back to home page</Button>
    </main>
  );
}
