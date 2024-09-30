import fs from 'fs';
import path from 'path';

const portfolioItems = [
  { id: '1', title: 'Portfolio Item 1', description: 'Description for item 1' },
  { id: '2', title: 'Portfolio Item 2', description: 'Description for item 2' },
  // Add more portfolio items here
];

// Server component function to generate static paths
export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    id: item.id,
  }));
}

// Server component to fetch portfolio item details
export default function PortfolioItemPage({ params }) {
  const portfolioItem = portfolioItems.find(item => item.id === params.id);

  if (!portfolioItem) {
    return <div>Portfolio item not found</div>;
  }

  // Pass data to the client component
  return (
    <PortfolioItem
      title={portfolioItem.title}
      description={portfolioItem.description}
    />
  );
}

// Define the client component separately
function PortfolioItem({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
