import { useRouter } from 'next/navigation'; // Use next/navigation instead of next/router

export default function PortfolioItem() {
  const router = useRouter(); // Now using the correct hook from next/navigation
  const { id } = router.query; // You can now access the id from params (but this is for client-side)

  return (
    <div>
      <h1>Portfolio Item: {id}</h1>
      <p>This is a detailed page for portfolio item {id}.</p>
    </div>
  );
}
