import React, { useEffect, useState } from "react";
import "./Sts.css";
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation } from "react-router-dom";
import Marquee from "react-fast-marquee";
const Sts = () => {
  const { pathname } = useLocation();
  const [sites, setSites] = useState([
    {
      id: 1,
      name: "Nike",
      category: "Sports",
      offers: ["Best Discounts", "Free Shipping"],
      link: "https://www.nike.com",
      logo: `./logos/1.png`,
    },
    {
      id: 2,
      name: "Adidas",
      category: "Sports",
      offers: ["Best Discounts"],
      link: "https://www.adidas.com",
      logo: `./logos/2.png`,
    },
    {
      id: 3,
      name: "Amazon",
      category: "General",
      offers: ["Prime Deals", "Flash Sales"],
      link: "https://www.amazon.com",
      logo: `./logos/3.png`,
    },
    {
      id: 4,
      name: "Flipkart",
      category: "General",
      offers: ["Big Billion Days", "Free Shipping"],
      link: "https://www.flipkart.com",
      logo: `./logos/4.png`,
    },
    {
      id: 5,
      name: "Zara",
      category: "Fashion",
      offers: ["Summer Sale", "New Arrivals"],
      link: "https://www.zara.com",
      logo: `./logos/5.png`,
    },
    {
      id: 6,
      name: "Walmart",
      category: "General",
      offers: ["Everyday Low Prices", "Free Shipping"],
      link: "https://www.walmart.com",
      logo: `./logos/6.png`,
    },
    {
      id: 7,
      name: "Etsy",
      category: "Crafts",
      offers: ["Handmade Items", "Unique Gifts"],
      link: "https://www.etsy.com",
      logo: `./logos/7.png`,
    },
    {
      id: 8,
      name: "Best Buy",
      category: "Electronics",
      offers: ["Tech Deals", "Free Shipping"],
      link: "https://www.bestbuy.com",
      logo: `./logos/8.png`,
    },
    {
      id: 9,
      name: "ASOS",
      category: "Fashion",
      offers: ["Fashion Week", "Designer Brands"],
      link: "https://www.asos.com",
      logo: `./logos/9.png`,
    },
    {
      id: 10,
      name: "Home Depot",
      category: "Home Improvement",
      offers: ["DIY Supplies", "Appliance Sale"],
      link: "https://www.homedepot.com",
      logo: `./logos/10.png`,
    },
    {
      id: 11,
      name: "eBay",
      category: "General",
      offers: ["Auctions", "Buy It Now"],
      link: "https://www.ebay.com",
      logo: `./logos/11.png`,
    },
    {
      id: 12,
      name: "Macy's",
      category: "Fashion",
      offers: ["Summer Clearance", "Free Shipping"],
      link: "https://www.macys.com",
      logo: `./logos/12.png`,
    },
    {
      id: 13,
      name: "Lululemon",
      category: "Sports",
      offers: ["Athletic Wear", "Yoga Gear"],
      link: "https://www.lululemon.com",
      logo: `./logos/13.png`,
    },
    {
      id: 14,
      name: "IKEA",
      category: "Home Furniture",
      offers: ["Affordable Furniture", "Kitchen Deals"],
      link: "https://www.ikea.com",
      logo: `./logos/14.png`,
    },
    {
      id: 15,
      name: "Target",
      category: "General",
      offers: ["Target Circle", "RedCard Savings"],
      link: "https://www.target.com",
      logo: `./logos/15.png`,
    },
    {
      id: 16,
      name: "Under Armour",
      category: "Sports",
      offers: ["Performance Gear", "Fitness Apparel"],
      link: "https://www.underarmour.com",
      logo: `./logos/16.png`,
    },
    {
      id: 17,
      name: "Crate & Barrel",
      category: "Home Decor",
      offers: ["Furniture Sale", "Home Accessories"],
      link: "https://www.crateandbarrel.com",
      logo: `./logos/17.png`,
    },
    {
      id: 18,
      name: "Sephora",
      category: "Beauty",
      offers: ["Beauty Insider", "Makeup Deals"],
      link: "https://www.sephora.com",
      logo: `./logos/18.png`,
    },
    {
      id: 19,
      name: "GAP",
      category: "Fashion",
      offers: ["Summer Styles", "Kids' Clothing"],
      link: "https://www.gap.com",
      logo: `./logos/19.png`,
    },
    {
      id: 20,
      name: "Overstock",
      category: "Home Decor",
      offers: ["Home Clearance", "Outdoor Furniture"],
      link: "https://www.overstock.com",
      logo: `./logos/20.png`,
    },
    {
      id: 21,
      name: "Sony",
      category: "Electronics",
      offers: ["TV Deals", "Audio Products"],
      link: "https://www.sony.com",
      logo: `./logos/21.png`,
    },
    {
      id: 22,
      name: "Puma",
      category: "Sports",
      offers: ["Athletic Shoes", "Sportswear"],
      link: "https://www.puma.com",
      logo: `./logos/22.png`,
    },
    {
      id: 23,
      name: "Epic Games",
      category: "Gaming",
      offers: ["Game Store", "Free Games"],
      link: "https://www.epicgames.com",
      logo: `./logos/23.png`,
    },
    {
      id: 24,
      name: "Ulta Beauty",
      category: "Beauty",
      offers: ["Beauty Rewards", "Skincare"],
      link: "https://www.ulta.com",
      logo: `./logos/24.png`,
    },
    {
      id: 25,
      name: "Nordstrom",
      category: "Fashion",
      offers: ["Designer Brands", "Anniversary Sale"],
      link: "https://www.nordstrom.com",
      logo: `./logos/25.png`,
    },
    {
      id: 26,
      name: "Columbia Sportswear",
      category: "Sports",
      offers: ["Outdoor Gear", "Hiking Apparel"],
      link: "https://www.columbia.com",
      logo: `./logos/26.png`,
    },
    {
      id: 27,
      name: "Wayfair",
      category: "Home Decor",
      offers: ["Furniture Deals", "Home Renovation"],
      link: "https://www.wayfair.com",
      logo: `./logos/27.png`,
    },
    {
      id: 28,
      name: "Sunglass Hut",
      category: "Fashion",
      offers: ["Designer Sunglasses", "Summer Styles"],
      link: "https://www.sunglasshut.com",
      logo: `./logos/28.png`,
    },
    {
      id: 29,
      name: "PlayStation Store",
      category: "Gaming",
      offers: ["Game Discounts", "PS Plus"],
      link: "https://store.playstation.com",
      logo: `./logos/29.png`,
    },
    {
      id: 30,
      name: "Office Depot",
      category: "Office Supplies",
      offers: ["Office Essentials", "Back to School"],
      link: "https://www.officedepot.com",
      logo: `./logos/30.png`,
    },
  ]);

  const [filteredSites, setFilteredSites] = useState([...sites]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedOffer, setSelectedOffer] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const availableCategories = [
    "Choose Available Offer ",
    ...new Set(sites.map((site) => site.category)),
  ];
  const availableOffers = [
    "Choose Available Offer ",
    ...new Set(sites.flatMap((site) => site.offers)),
  ];

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    filterSites(category, selectedOffer, searchQuery);
  };

  const handleOfferChange = (e) => {
    const offer = e.target.value;
    setSelectedOffer(offer);
    filterSites(selectedCategory, offer, searchQuery);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterSites(selectedCategory, selectedOffer, query);
  };

  const filterSites = (category, offer, query) => {
    const filtered = sites.filter((site) => {
      const isCategoryMatch = category === "All" || site.category === category;
      const isOfferMatch = offer === "All" || site.offers.includes(offer);
      const isNameMatch = site.name.toLowerCase().includes(query);

      return isCategoryMatch && isOfferMatch && isNameMatch;
    });

    setFilteredSites(filtered);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="ecommerce-sites">
        <div  className="marquee">
    <Marquee speed={150}>
        Save Upto 80% on International Shipping • Exciting Discounts on Premium Plans • Get Your Virtual Indian Address
    </Marquee>
    <div>
      <img className="image-shop" src="/home/fest-1.png" />
    </div>
    </div>
      <div className="side-filt-container">
        <div className="side-filt">
          <div className="search-d">
            <SearchIcon />
            <input
              className="search-p"
              type="text"
              placeholder="Search by site name"
              onChange={handleSearch}
              value={searchQuery}
            />
          </div>
        </div>
        <div className="side-filt mt-2">
          {/* <h3>Offers</h3> */}
          {/* Apply "side-filt" class to the select element */}
          <select
            className="select-s side-filt"
            onChange={handleOfferChange}
            value={selectedOffer}
          >
            {availableOffers.map((offer) => (
              <option key={offer} value={offer}>
                {offer}
              </option>
            ))}
          </select>
        </div>
        <div className="side-filt">
          <span id="linn">-------------------------------------</span>
          <h3>Category</h3>

          {/* Apply "side-filt" class to labels and checkboxes */}
          {availableCategories.map((category) => (
            <label key={category} className="side-filt-cb">
              <input
                type="radio"
                value={category}
                checked={selectedCategory === category}
                onChange={handleCategoryChange}
              />
              <span className="ctgr">{category}</span>
            </label>
          ))}
        </div>
        <span id="linn">-------------------------------------</span>
      </div>
      {/* <Link to="/disp-plan" className="content-1">
        <img src="/banner/banner.png" alt="no img" />
      </Link> */}

      <div className="site-grid">
        {filteredSites.map((site) => (
          <div key={site.id} className="site">
            <a href={site.link} target="_blank" rel="noopener noreferrer">
              <img className="s-img" src={site.logo} alt={site.name} />
            </a>
          </div>
        ))}
      </div>
      {/* <div className="content2"></div> */}
    </div>
  );
};

export default Sts;
