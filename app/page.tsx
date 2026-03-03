import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryNav from "../components/CategoryNav";
import FeaturedStories from "../components/FeaturedStories";
import LatestArticles from "../components/LatestArticles";
import SpotlightReviews from "../components/SpotlightReviews";
import BrowseCategories from "../components/BrowseCategories";
import PopularTopics from "../components/PopularTopics";
import HelpfulTools from "../components/HelpfulTools";
import NewsletterCTA from "../components/NewsletterCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CategoryNav />
        <FeaturedStories />
        <LatestArticles />
        <SpotlightReviews />
        <BrowseCategories />
        <PopularTopics />
        <HelpfulTools />
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
