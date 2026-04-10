import Navbar from "./navbar";
import Footer from "./footer";

function Pricing() {
  const plans = [
    {
      name: "Basic",
      subtitle: "For beginners",
      price: "₹999",
      period: "/month",
      features: [
        "✔ Access to 5 courses",
        "✔ Recorded video lessons",
        "✔ Community support",
        "✖ Certificates"
      ],
      highlight: false,
      buttonText: "Get Started"
    },
    {
      name: "Pro",
      subtitle: "Best for career growth",
      price: "₹2,499",
      period: "/month",
      features: [
        "✔ Access to all courses",
        "✔ Live classes & recordings",
        "✔ Certificates",
        "✔ Project reviews"
      ],
      highlight: true,
      badge: "Most Popular",
      buttonText: "Start Learning"
    },
    {
      name: "Premium",
      subtitle: "For professionals",
      price: "₹4,999",
      period: "/month",
      features: [
        "✔ 1-on-1 mentor support",
        "✔ Career guidance",
        "✔ Resume & interview prep",
        "✔ Job assistance"
      ],
      highlight: false,
      buttonText: "Go Premium"
    }
  ];

  return (
    <>
      <Navbar />

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Simple & Affordable Pricing
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Choose a plan that fits your learning goals and get full access
              to expert-led courses.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

            {plans.map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 text-center ${
                  plan.highlight
                    ? "border-2 border-blue-600 shadow-lg scale-105"
                    : "border shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {plan.name}
                </h3>

                <p className="text-gray-500 mt-2">{plan.subtitle}</p>

                <p
                  className={`text-4xl font-bold mt-6 ${
                    plan.highlight ? "text-blue-600" : "text-gray-800"
                  }`}
                >
                  {plan.price}
                  <span className="text-lg font-normal text-gray-600">
                    {plan.period}
                  </span>
                </p>

                <ul className="mt-6 space-y-3 text-gray-600 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <button
                  className={`mt-8 w-full py-3 rounded-lg transition ${
                    plan.highlight
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Pricing;