import { useMemo, useState } from "react";

type IconProps = { className?: string; filled?: boolean };

function Icon({ name, className = "size-5", filled = false }: IconProps & { name: string }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "pin")
    return (
      <svg {...common}>
        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    );
  if (name === "search")
    return (
      <svg {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </svg>
    );
  if (name === "user")
    return (
      <svg {...common}>
        <circle cx="12" cy="8" r="4" />
        <path d="M4.5 21a7.5 7.5 0 0 1 15 0" />
      </svg>
    );
  if (name === "bag")
    return (
      <svg {...common}>
        <path d="M5 8h14l-1 13H6L5 8Z" />
        <path d="M9 9V6a3 3 0 0 1 6 0v3" />
      </svg>
    );
  if (name === "heart")
    return (
      <svg {...common}>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
      </svg>
    );
  if (name === "clock")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  if (name === "star")
    return (
      <svg {...common}>
        <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.2L5.8 21 7 14.2l-5-4.9 6.9-1L12 2Z" />
      </svg>
    );
  if (name === "arrow")
    return (
      <svg {...common}>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    );
  if (name === "close")
    return (
      <svg {...common}>
        <path d="m6 6 12 12M18 6 6 18" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
}

function Logo() {
  return (
    <a className="flex items-center gap-2.5" href="#" aria-label="foodpanda home">
      <svg className="size-9 text-[#e21b70]" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="21" r="15" fill="currentColor" />
        <circle cx="9" cy="9" r="5" fill="currentColor" />
        <circle cx="31" cy="9" r="5" fill="currentColor" />
        <ellipse cx="20" cy="23" rx="11" ry="10" fill="white" />
        <ellipse cx="15.5" cy="20.5" rx="2.2" ry="3" fill="#171717" />
        <ellipse cx="24.5" cy="20.5" rx="2.2" ry="3" fill="#171717" />
        <path
          d="M17.5 27c1.6 1.3 3.4 1.3 5 0"
          fill="none"
          stroke="#171717"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-[1.4rem] font-bold tracking-[-0.035em] text-[#e21b70]">foodpanda</span>
    </a>
  );
}

const categories = [
  { label: "All", image: "/images/hero-food.jpg" },
  { label: "Burgers", image: "/images/burger.jpg" },
  { label: "Pizza", image: "/images/pizza.jpg" },
  { label: "Sushi", image: "/images/sushi.jpg" },
  { label: "Asian", image: "/images/asian.jpg" },
  { label: "Healthy", image: "/images/fish.jpg" },
];

const restaurants = [
  {
    name: "Burger Lab",
    category: "Burgers",
    detail: "Burgers · American · Fast food",
    rating: 4.8,
    time: "20–30 min",
    delivery: "Free delivery",
    offer: "20% OFF",
    image: "/images/burger.jpg",
  },
  {
    name: "Sushi Avenue",
    category: "Sushi",
    detail: "Japanese · Sushi · Seafood",
    rating: 4.7,
    time: "25–35 min",
    delivery: "$1.49 delivery",
    offer: "POPULAR",
    image: "/images/sushi.jpg",
  },
  {
    name: "Forno Italiano",
    category: "Pizza",
    detail: "Pizza · Italian · Pasta",
    rating: 4.9,
    time: "15–25 min",
    delivery: "Free delivery",
    offer: "25% OFF",
    image: "/images/pizza.jpg",
  },
  {
    name: "Spice & Wok",
    category: "Asian",
    detail: "Asian · Thai · Rice & noodles",
    rating: 4.6,
    time: "25–40 min",
    delivery: "$0.99 delivery",
    offer: "DEAL",
    image: "/images/asian.jpg",
  },
  {
    name: "The Green Table",
    category: "Healthy",
    detail: "Healthy · Bowls · Fresh food",
    rating: 4.8,
    time: "20–30 min",
    delivery: "Free delivery",
    offer: "NEW",
    image: "/images/fish.jpg",
  },
  {
    name: "Street Buns",
    category: "Burgers",
    detail: "Burgers · Fries · Shakes",
    rating: 4.5,
    time: "30–40 min",
    delivery: "$1.49 delivery",
    offer: "15% OFF",
    image: "/images/burger.jpg",
  },
];

export default function App() {
  const [orderType, setOrderType] = useState<"Delivery" | "Pick-up">("Delivery");
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [modal, setModal] = useState<"location" | "login" | null>(null);
  const [location, setLocation] = useState("New York, 10001");
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState("");

  const cartCount = Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  const cartRestaurants = restaurants.filter((restaurant) => cartItems[restaurant.name]);

  const visibleRestaurants = useMemo(
    () =>
      restaurants.filter(
        (restaurant) =>
          (category === "All" || restaurant.category === category) &&
          `${restaurant.name} ${restaurant.detail}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [category, query],
  );

  function showToast(message: string) {
    setToast(message);
    window.setTimeout(() => setToast(""), 2200);
  }

  function toggleFavorite(name: string) {
    setFavorites((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  }

  function addToCart(name: string) {
    setCartItems((current) => ({ ...current, [name]: (current[name] ?? 0) + 1 }));
    showToast(`${name} added to cart`);
  }

  function removeFromCart(name: string) {
    setCartItems((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
    showToast(`${name} removed from cart`);
  }

  function confirmOrder() {
    const itemCount = cartCount;
    setCartItems({});
    setCartOpen(false);
    showToast(`Order confirmed with ${itemCount} item${itemCount === 1 ? "" : "s"}`);
  }

  return (
    <div className="min-h-dvh bg-white text-[#292929]">
      <header className="sticky top-0 z-40 border-b border-black/6 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 lg:px-8">
          <Logo />
          <nav className="flex items-center gap-2 sm:gap-3">
            <button
              className="hidden items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold hover:bg-[#fff0f5] sm:flex"
              onClick={() => setModal("location")}
            >
              <Icon name="pin" className="size-5 text-[#e21b70]" />
              <span className="max-w-36 truncate">{location}</span>
              <Icon name="chevron" className="size-4" />
            </button>
            <button
              className="hidden rounded-xl border border-[#e21b70] px-5 py-2.5 text-sm font-bold text-[#e21b70] transition hover:bg-[#fff0f5] sm:block"
              onClick={() => setModal("login")}
            >
              Log in
            </button>
            <button
              className="rounded-xl bg-[#e21b70] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#c91462] sm:px-5"
              onClick={() => setModal("login")}
            >
              Sign up
            </button>
            <button
              className="relative rounded-xl p-2.5 transition hover:bg-[#fff0f5]"
              aria-label={`Cart with ${cartCount} items`}
              aria-haspopup="dialog"
              onClick={() => setCartOpen(true)}
            >
              <Icon name="bag" className="size-6 text-[#e21b70]" />
              {cartCount > 0 && (
                <span className="absolute right-0 top-0 grid size-5 place-items-center rounded-full bg-[#e21b70] text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#f7f7f7]">
          <div className="absolute -left-32 -top-32 size-80 rounded-full bg-[#fce0eb]" />
          <div className="mx-auto grid min-h-[480px] max-w-[1240px] items-center gap-8 px-5 py-14 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-16">
            <div className="relative z-10 max-w-2xl">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#e21b70]">
                Your neighborhood, delivered
              </p>
              <h1 className="max-w-[640px] text-[clamp(2.6rem,5.5vw,4.65rem)] font-extrabold leading-[.98] tracking-[-0.055em] text-[#222]">
                Food you love, <span className="text-[#e21b70]">delivered fast.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#666] sm:text-lg">
                From your favorite local restaurants to the cravings you can’t ignore — it’s all
                just a few taps away.
              </p>
              <div className="mt-8 max-w-[610px] rounded-2xl bg-white p-2 shadow-[0_16px_45px_rgba(33,20,27,.14)] sm:flex">
                <button
                  className="flex min-h-14 flex-1 items-center gap-3 rounded-xl px-4 text-left transition hover:bg-[#f8f8f8]"
                  onClick={() => setModal("location")}
                >
                  <Icon name="pin" className="size-6 shrink-0 text-[#e21b70]" />
                  <span className="flex-1">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-[#999]">
                      Deliver to
                    </span>
                    <span className="block truncate text-sm font-semibold">{location}</span>
                  </span>
                </button>
                <button
                  className="mt-2 min-h-14 w-full rounded-xl bg-[#e21b70] px-7 text-sm font-bold text-white transition hover:bg-[#c91462] sm:mt-0 sm:w-auto"
                  onClick={() =>
                    document.querySelector("#restaurants")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Find food
                </button>
              </div>
            </div>
            <div className="relative hidden min-h-[400px] lg:block">
              <div className="absolute inset-2 rotate-3 overflow-hidden rounded-[44%_56%_46%_54%/52%_44%_56%_48%] bg-[#e21b70]">
                <img
                  className="h-full w-full object-cover opacity-90 mix-blend-multiply"
                  src="/images/hero-food.jpg"
                  alt="Friends enjoying a shared meal"
                />
              </div>
              <div className="absolute bottom-7 left-1 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-full bg-[#fff0f5] text-[#e21b70]">
                    <Icon name="clock" />
                  </span>
                  <span>
                    <strong className="block text-sm">Fast delivery</strong>
                    <small className="text-[#777]">At your door in 25 min</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1240px] px-5 py-12 lg:px-8 lg:py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-2 text-sm font-bold text-[#e21b70]">EXPLORE CUISINES</p>
              <h2 className="text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                What are you craving?
              </h2>
            </div>
            <div className="flex rounded-xl bg-[#f5f5f5] p-1">
              {(["Delivery", "Pick-up"] as const).map((type) => (
                <button
                  key={type}
                  className={`rounded-lg px-5 py-2.5 text-sm font-bold transition ${orderType === type ? "bg-white text-[#e21b70] shadow-sm" : "text-[#777] hover:text-[#333]"}`}
                  onClick={() => setOrderType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6 sm:gap-5">
            {categories.map((item) => (
              <button
                key={item.label}
                className={`group rounded-2xl border p-2.5 transition sm:p-3 ${category === item.label ? "border-[#e21b70] bg-[#fff5f8] shadow-[0_8px_24px_rgba(226,27,112,.12)]" : "border-[#eee] hover:-translate-y-1 hover:border-[#f4a5c7]"}`}
                onClick={() => setCategory(item.label)}
              >
                <img
                  src={item.image}
                  alt=""
                  className="mx-auto aspect-square w-full rounded-xl object-cover"
                />
                <span
                  className={`mt-2.5 block text-sm font-bold ${category === item.label ? "text-[#e21b70]" : ""}`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="restaurants" className="bg-[#f8f8f8] py-12 lg:py-16">
          <div className="mx-auto max-w-[1240px] px-5 lg:px-8">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-2 text-sm font-bold text-[#e21b70]">
                  {orderType.toUpperCase()} NEAR YOU
                </p>
                <h2 className="text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                  Popular restaurants
                </h2>
              </div>
              <label className="flex h-12 w-full items-center gap-3 rounded-xl border border-[#ddd] bg-white px-4 focus-within:border-[#e21b70] sm:w-80">
                <Icon name="search" className="size-5 text-[#777]" />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="min-w-0 flex-1 bg-transparent text-sm outline-none"
                  placeholder="Search restaurants or food"
                />
              </label>
            </div>

            {visibleRestaurants.length ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visibleRestaurants.map((restaurant) => (
                  <article
                    key={restaurant.name}
                    className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_18px_rgba(0,0,0,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(0,0,0,.11)]"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        src={restaurant.image}
                        alt={`${restaurant.name} restaurant food`}
                      />
                      <span className="absolute left-3 top-3 rounded-lg bg-[#e21b70] px-2.5 py-1.5 text-[11px] font-extrabold tracking-wide text-white">
                        {restaurant.offer}
                      </span>
                      <button
                        className={`absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white shadow-md transition hover:scale-105 ${favorites.includes(restaurant.name) ? "text-[#e21b70]" : "text-[#555]"}`}
                        aria-label={`${favorites.includes(restaurant.name) ? "Remove" : "Add"} ${restaurant.name} ${favorites.includes(restaurant.name) ? "from" : "to"} favorites`}
                        onClick={() => toggleFavorite(restaurant.name)}
                      >
                        <Icon
                          name="heart"
                          className="size-5"
                          filled={favorites.includes(restaurant.name)}
                        />
                      </button>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-extrabold">{restaurant.name}</h3>
                          <p className="mt-1 text-sm text-[#777]">{restaurant.detail}</p>
                        </div>
                        <span className="flex items-center gap-1 rounded-lg bg-[#fff4d9] px-2 py-1 text-xs font-bold">
                          <Icon name="star" className="size-3.5 fill-[#f5ad00] text-[#f5ad00]" />
                          {restaurant.rating}
                        </span>
                      </div>
                      <div className="mt-5 flex items-center justify-between border-t border-[#eee] pt-4 text-sm">
                        <span className="flex items-center gap-1.5 font-semibold">
                          <Icon name="clock" className="size-4 text-[#777]" />
                          {restaurant.time}
                        </span>
                        <span className="text-[#666]">{restaurant.delivery}</span>
                      </div>
                      <button
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#fff0f5] py-3 text-sm font-bold text-[#e21b70] transition hover:bg-[#e21b70] hover:text-white"
                        onClick={() => addToCart(restaurant.name)}
                      >
                        Add to cart <Icon name="arrow" className="size-4" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl bg-white p-12 text-center">
                <Icon name="search" className="mx-auto size-9 text-[#bbb]" />
                <h3 className="mt-4 text-lg font-bold">No restaurants found</h3>
                <p className="mt-1 text-sm text-[#777]">Try another search or cuisine.</p>
                <button
                  className="mt-5 text-sm font-bold text-[#e21b70]"
                  onClick={() => {
                    setQuery("");
                    setCategory("All");
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section className="overflow-hidden bg-[radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.16),transparent_32%),linear-gradient(120deg,#bd0f58_0%,#e21b70_52%,#a90d5f_100%)] text-white">
          <div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-7 px-5 py-14 sm:flex-row sm:items-center lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.17em] text-[#ffd2e5]">
                Everyday convenience
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Good food, right on time.
              </h2>
              <p className="mt-2 max-w-xl text-[#ffeaf3]">
                Track your order live and enjoy exclusive deals from the best spots in your city.
              </p>
            </div>
            <button
              className="shrink-0 rounded-xl bg-[#fff8fb] px-7 py-3.5 text-sm font-extrabold text-[#b30d55] shadow-[0_8px_24px_rgba(83,0,39,0.2)] ring-1 ring-white/70 transition hover:-translate-y-0.5 hover:bg-white hover:text-[#950847] hover:shadow-[0_12px_30px_rgba(83,0,39,0.28)]"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Order now
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-[#222] py-9 text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-5 px-5 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <Logo />
          <p className="text-sm text-white/55">Made for food lovers everywhere.</p>
          <div className="flex gap-6 text-sm font-semibold text-white/70">
            <a href="#restaurants" className="hover:text-white">
              Restaurants
            </a>
            <a href="#" className="hover:text-white">
              Help
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </footer>

      {cartOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-[2px]"
          role="presentation"
          onMouseDown={() => setCartOpen(false)}
        >
          <aside
            className="flex h-full w-full max-w-md flex-col bg-white shadow-[-20px_0_60px_rgba(0,0,0,.16)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#eee] px-5 py-5 sm:px-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#e21b70]">
                  Your order
                </p>
                <h2 id="cart-title" className="mt-1 text-2xl font-extrabold tracking-tight">
                  Shopping cart
                </h2>
              </div>
              <button
                className="grid size-10 place-items-center rounded-full bg-[#f6f6f6] text-[#555] transition hover:bg-[#fff0f5] hover:text-[#e21b70]"
                onClick={() => setCartOpen(false)}
                aria-label="Close cart"
              >
                <Icon name="close" />
              </button>
            </div>

            {cartRestaurants.length ? (
              <>
                <div className="flex-1 space-y-3 overflow-y-auto p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-semibold text-[#666]">
                      {cartCount} item{cartCount === 1 ? "" : "s"} in your cart
                    </p>
                    <button
                      className="text-xs font-bold text-[#777] underline decoration-[#ccc] underline-offset-4 transition hover:text-[#e21b70]"
                      onClick={() => setCartItems({})}
                    >
                      Clear all
                    </button>
                  </div>
                  {cartRestaurants.map((restaurant) => (
                    <article
                      key={restaurant.name}
                      className="flex gap-4 rounded-2xl border border-[#ececec] p-3.5"
                    >
                      <img
                        src={restaurant.image}
                        alt=""
                        className="size-20 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1 py-0.5">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="truncate font-extrabold">{restaurant.name}</h3>
                            <p className="mt-1 truncate text-xs text-[#777]">
                              {restaurant.category} · {restaurant.time}
                            </p>
                          </div>
                          <span className="shrink-0 rounded-full bg-[#fff0f5] px-2.5 py-1 text-xs font-extrabold text-[#e21b70]">
                            ×{cartItems[restaurant.name]}
                          </span>
                        </div>
                        <button
                          className="mt-3 text-xs font-bold text-[#b3261e] transition hover:text-[#7f1711]"
                          onClick={() => removeFromCart(restaurant.name)}
                          aria-label={`Remove ${restaurant.name} from cart`}
                        >
                          Remove item
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
                <div className="border-t border-[#eee] bg-[#fffafb] p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between text-sm">
                    <span className="text-[#666]">Delivery to</span>
                    <strong className="max-w-52 truncate">{location}</strong>
                  </div>
                  <button
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e21b70] py-4 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(226,27,112,.24)] transition hover:bg-[#c91462] hover:shadow-[0_12px_28px_rgba(226,27,112,.32)]"
                    onClick={confirmOrder}
                  >
                    Confirm order <Icon name="arrow" className="size-4" />
                  </button>
                </div>
              </>
            ) : (
              <div className="grid flex-1 place-items-center p-8 text-center">
                <div>
                  <span className="mx-auto grid size-20 place-items-center rounded-full bg-[#fff0f5] text-[#e21b70]">
                    <Icon name="bag" className="size-9" />
                  </span>
                  <h3 className="mt-5 text-xl font-extrabold">Your cart is empty</h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#777]">
                    Add something delicious from one of the restaurants nearby.
                  </p>
                  <button
                    className="mt-6 rounded-xl bg-[#e21b70] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#c91462]"
                    onClick={() => {
                      setCartOpen(false);
                      document
                        .querySelector("#restaurants")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Browse restaurants
                  </button>
                </div>
              </div>
            )}
          </aside>
        </div>
      )}

      {modal && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-5 backdrop-blur-sm"
          role="presentation"
          onMouseDown={() => setModal(null)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"
            role="dialog"
            aria-modal="true"
            aria-label={modal === "location" ? "Choose delivery location" : "Sign in"}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-extrabold">
                {modal === "location" ? "Where should we deliver?" : "Welcome back"}
              </h2>
              <button
                className="rounded-full p-2 hover:bg-[#f5f5f5]"
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                <Icon name="close" />
              </button>
            </div>
            {modal === "location" ? (
              <form
                className="mt-6"
                onSubmit={(event) => {
                  event.preventDefault();
                  const data = new FormData(event.currentTarget);
                  setLocation(String(data.get("location")) || location);
                  setModal(null);
                  showToast("Delivery location updated");
                }}
              >
                <label className="text-sm font-bold" htmlFor="location">
                  Address or neighborhood
                </label>
                <div className="mt-2 flex items-center gap-3 rounded-xl border border-[#ddd] px-4 focus-within:border-[#e21b70]">
                  <Icon name="pin" className="size-5 text-[#e21b70]" />
                  <input
                    id="location"
                    name="location"
                    defaultValue={location}
                    className="h-14 min-w-0 flex-1 outline-none"
                    autoFocus
                  />
                </div>
                <button className="mt-4 w-full rounded-xl bg-[#e21b70] py-3.5 text-sm font-bold text-white">
                  Use this location
                </button>
              </form>
            ) : (
              <form
                className="mt-6 space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setModal(null);
                  showToast("You’re signed in");
                }}
              >
                <div>
                  <label className="text-sm font-bold" htmlFor="email">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2 h-14 w-full rounded-xl border border-[#ddd] px-4 outline-none focus:border-[#e21b70]"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="text-sm font-bold" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="mt-2 h-14 w-full rounded-xl border border-[#ddd] px-4 outline-none focus:border-[#e21b70]"
                  />
                </div>
                <button className="w-full rounded-xl bg-[#e21b70] py-3.5 text-sm font-bold text-white">
                  Continue
                </button>
                <p className="text-center text-xs leading-5 text-[#777]">
                  By continuing, you agree to our terms and privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      <div
        className={`pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 rounded-xl bg-[#222] px-5 py-3 text-sm font-semibold text-white shadow-xl transition-all ${toast ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        role="status"
      >
        {toast}
      </div>
    </div>
  );
}
