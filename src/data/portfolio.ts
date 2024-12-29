export interface PortfolioItem {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  category: 'commercial' | 'artistic' | 'motion';
  featured: boolean;
}

// Replace these with your actual video links and thumbnails
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Project Title",
    description: "Project description",
    thumbnailUrl: "YOUR_THUMBNAIL_URL",
    videoUrl: "YOUR_VIDEO_URL",
    category: "commercial",
    featured: true
  },
  // Add more portfolio items here
];

export const getPortfolioItems = (category?: string) => {
  if (!category) return portfolioItems;
  return portfolioItems.filter(item => item.category === category);
};