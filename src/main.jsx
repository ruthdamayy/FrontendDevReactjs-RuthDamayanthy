import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowLeft, Eye, EyeOff, LogOut, MapPin, Search, Star } from "lucide-react";
import "./styles.css";

const credentials = {
  email: "ruthdamayy@dummy.project",
  password: "developer123",
};

const restaurants = [
  {
    id: "luna-table",
    name: "Luna Table Bistro",
    cuisine: "Italian",
    category: "Italian",
    rating: 4,
    price: "$$",
    isOpen: true,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Veteran No. 12, Malang",
    description:
      "A calm neighborhood bistro with handmade pasta, simple seasonal plates, and warm evening service.",
  },
  {
    id: "nori-house",
    name: "Nori House",
    cuisine: "Japanese",
    category: "Japanese",
    rating: 4,
    price: "$$$",
    isOpen: false,
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Ijen No. 9, Malang",
    description:
      "Fresh sushi rolls, donburi, and quiet counter seating for lunch or late dinner reservations.",
  },
  {
    id: "green-spoon",
    name: "Green Spoon Kitchen",
    cuisine: "American",
    category: "American",
    rating: 3,
    price: "$",
    isOpen: true,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Semeru No. 30, Malang",
    description:
      "Casual bowls, brunch staples, coffee, and fresh juice served in a bright all-day dining room.",
  },
  {
    id: "el-camino",
    name: "El Camino",
    cuisine: "Mexican",
    category: "Mexican",
    rating: 5,
    price: "$$$",
    isOpen: true,
    image:
      "https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Bandung No. 18, Malang",
    description:
      "Tacos, smoky grilled corn, and house salsa with a laid-back dining room for small groups.",
  },
  {
    id: "blue-crab",
    name: "Blue Crab Seafood",
    cuisine: "Seafood",
    category: "Seafood",
    rating: 4,
    price: "$$",
    isOpen: false,
    image:
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Soekarno Hatta No. 40, Malang",
    description:
      "Grilled fish, crab platters, and simple coastal dishes with clean, fast service.",
  },
  {
    id: "saffron-lane",
    name: "Saffron Lane",
    cuisine: "Thai",
    category: "Thai",
    rating: 4,
    price: "$$$$",
    isOpen: true,
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Kawi No. 7, Malang",
    description:
      "Thai curries, bright salads, and fragrant rice dishes made for sharing.",
  },
  {
    id: "ember-steak",
    name: "Ember Steakhouse",
    cuisine: "Steakhouses",
    category: "Steakhouses",
    rating: 3,
    price: "$$",
    isOpen: true,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Dieng No. 21, Malang",
    description:
      "Charcoal-grilled cuts, sauces, sides, and a compact wine list in a focused steakhouse setting.",
  },
  {
    id: "roots-cafe",
    name: "Roots Cafe",
    cuisine: "Cafe",
    category: "Cafe",
    rating: 4,
    price: "$",
    isOpen: true,
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Wilis No. 5, Malang",
    description:
      "Coffee, pastries, sandwiches, and quiet tables for work-friendly mornings.",
  },
  {
    id: "terra-vegan",
    name: "Terra Vegan",
    cuisine: "Healthy",
    category: "Healthy",
    rating: 5,
    price: "$$",
    isOpen: false,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Bromo No. 14, Malang",
    description:
      "Plant-based mains, salads, and desserts prepared with local vegetables and light seasoning.",
  },
  {
    id: "harbor-noodle",
    name: "Harbor Noodle Bar",
    cuisine: "Asian",
    category: "Asian",
    rating: 4,
    price: "$",
    isOpen: true,
    image:
      "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Borobudur No. 3, Malang",
    description:
      "Fast noodle bowls, broth, dumplings, and small plates for a quick comfort meal.",
  },
  {
    id: "mesa-grill",
    name: "Mesa Grill",
    cuisine: "American",
    category: "American",
    rating: 3,
    price: "$$$",
    isOpen: true,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Ahmad Yani No. 8, Malang",
    description:
      "Burgers, grilled chicken, fries, and milkshakes with a simple family-friendly menu.",
  },
  {
    id: "olive-room",
    name: "The Olive Room",
    cuisine: "Italian",
    category: "Italian",
    rating: 4,
    price: "$$$",
    isOpen: false,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    address: "Jl. Tidar No. 16, Malang",
    description:
      "A small dinner restaurant serving pizza, pasta, and rustic desserts.",
  },
];

const reviews = [
  {
    name: "Dinda Rahma",
    rating: 5,
    text: "Makanannya konsisten enak dan pelayanannya cepat. Tempatnya juga nyaman untuk ngobrol lama.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Bima Prakoso",
    rating: 4,
    text: "Porsi pas, rasa oke, dan informasi open hours di aplikasi membantu banget sebelum datang.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Nadia Putri",
    rating: 4,
    text: "Suka pilihan menunya. Harga masih masuk akal untuk kualitas yang ditawarkan.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
];

function App() {
  const [session, setSession] = useState(() => localStorage.getItem("restaurant_session") === "active");
  const [route, setRoute] = useState(() => window.location.hash.replace("#/", "") || "");

  React.useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash.replace("#/", "") || "");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  if (!session) {
    return <Login onSuccess={() => setSession(true)} />;
  }

  const detailId = route.startsWith("restaurant/") ? route.split("/")[1] : null;
  const selected = restaurants.find((restaurant) => restaurant.id === detailId);

  return (
    <>
      <header className="topbar">
        <a className="brand" href="#/">
          Restaurant Finder
        </a>
        <button
          className="icon-text"
          onClick={() => {
            localStorage.removeItem("restaurant_session");
            setSession(false);
          }}
          type="button"
        >
          <LogOut size={16} />
          Logout
        </button>
      </header>
      {selected ? <DetailView restaurant={selected} /> : <RestaurantList />}
    </>
  );
}

function Login({ onSuccess }) {
  const [email, setEmail] = useState(credentials.email);
  const [password, setPassword] = useState(credentials.password);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (email === credentials.email && password === credentials.password) {
      localStorage.setItem("restaurant_session", "active");
      onSuccess();
      return;
    }
    setError("Email atau password belum sesuai.");
  }

  return (
    <main className="login-shell">
      <form className="login-panel" onSubmit={handleSubmit}>
        <p className="eyebrow">DUMMY PROJECT</p>
        <h1>Restaurants</h1>
        <label>
          Email
          <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
        </label>
        <label>
          Password
          <span className="password-field">
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type={showPassword ? "text" : "password"}
            />
            <button
              aria-label={showPassword ? "Hide password" : "Show password"}
              onClick={() => setShowPassword((value) => !value)}
              type="button"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        <button className="primary-button" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}

function RestaurantList() {
  const [openOnly, setOpenOnly] = useState(false);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [visibleCount, setVisibleCount] = useState(8);

  const categories = useMemo(
    () => Array.from(new Set(restaurants.map((restaurant) => restaurant.category))).sort(),
    [],
  );

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      const matchesOpen = !openOnly || restaurant.isOpen;
      const matchesPrice = !price || restaurant.price === price;
      const matchesCategory = !category || restaurant.category === category;
      return matchesOpen && matchesPrice && matchesCategory;
    });
  }, [openOnly, price, category]);

  const visibleRestaurants = filteredRestaurants.slice(0, visibleCount);

  function clearFilters() {
    setOpenOnly(false);
    setPrice("");
    setCategory("");
    setVisibleCount(8);
  }

  return (
    <main>
      <section className="hero">
        <h1>Restaurants</h1>
        <p>
          Discover places for lunch, dinner, coffee, or a quick bite with simple filters for availability,
          price, and cuisine.
        </p>
      </section>

      <section className="filters" aria-label="Restaurant filters">
        <span>Filter By:</span>
        <label className="checkbox-filter">
          <input checked={openOnly} onChange={(event) => setOpenOnly(event.target.checked)} type="checkbox" />
          Open Now
        </label>
        <select value={price} onChange={(event) => setPrice(event.target.value)} aria-label="Filter by price">
          <option value="">Price</option>
          <option value="$">$</option>
          <option value="$$">$$</option>
          <option value="$$$">$$$</option>
          <option value="$$$$">$$$$</option>
        </select>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          aria-label="Filter by category"
        >
          <option value="">Categories</option>
          {categories.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
        <button className="secondary-button" type="button" onClick={clearFilters}>
          Clear All
        </button>
      </section>

      <section className="content">
        <div className="section-title">
          <h2>All Restaurants</h2>
          <p>{filteredRestaurants.length} places found</p>
        </div>
        {visibleRestaurants.length ? (
          <div className="restaurant-grid">
            {visibleRestaurants.map((restaurant) => (
              <RestaurantCard restaurant={restaurant} key={restaurant.id} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Search size={28} />
            <p>No restaurant matches the selected filters.</p>
          </div>
        )}
        {visibleCount < filteredRestaurants.length ? (
          <button className="load-button" type="button" onClick={() => setVisibleCount((count) => count + 4)}>
            Load More
          </button>
        ) : null}
      </section>
    </main>
  );
}

function RestaurantCard({ restaurant }) {
  return (
    <article className="restaurant-card">
      <img src={restaurant.image} alt={restaurant.name} />
      <h3>{restaurant.name}</h3>
      <Rating value={restaurant.rating} />
      <div className="meta-row">
        <span>
          {restaurant.cuisine} · {restaurant.price}
        </span>
        <span className={restaurant.isOpen ? "status open" : "status closed"}>
          {restaurant.isOpen ? "Open Now" : "Closed"}
        </span>
      </div>
      <a className="primary-button" href={`#/restaurant/${restaurant.id}`}>
        Learn More
      </a>
    </article>
  );
}

function DetailView({ restaurant }) {
  return (
    <main className="detail-page">
      <a className="back-link" href="#/">
        <ArrowLeft size={18} />
        Back to restaurants
      </a>
      <section className="detail-hero">
        <img src={restaurant.image} alt={restaurant.name} />
        <div>
          <p className="eyebrow">{restaurant.cuisine}</p>
          <h1>{restaurant.name}</h1>
          <Rating value={restaurant.rating} />
          <p>{restaurant.description}</p>
          <div className="detail-meta">
            <span className={restaurant.isOpen ? "status open" : "status closed"}>
              {restaurant.isOpen ? "Open Now" : "Closed"}
            </span>
            <span>{restaurant.price}</span>
            <span>
              <MapPin size={16} />
              {restaurant.address}
            </span>
          </div>
        </div>
      </section>

      <section className="map-band">
        <MapPin size={22} />
        <div>
          <h2>Map</h2>
          <p>{restaurant.address}</p>
        </div>
      </section>

      <section className="reviews">
        <h2>Reviews</h2>
        <div className="review-list">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <img src={review.image} alt={review.name} />
              <div>
                <h3>{review.name}</h3>
                <Rating value={review.rating} />
                <p>{review.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function Rating({ value }) {
  return (
    <div className="rating" aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={17} fill={index < value ? "currentColor" : "none"} />
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
