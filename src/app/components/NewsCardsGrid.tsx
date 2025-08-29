import Image from "next/image";
import React from "react";

export default function NewsCardsGrid() {
  const newsArticles = [
    {
      id: 1,
      image:
       "/view.png",
      category: "Company",
      title: "Credbevy raises unknown amount in undisclosed round",
      description:
        "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......",
    },
    {
      id: 2,
      image:
       "/view.png",
      category: "Company",
      title: "Credbevy raises unknown amount in undisclosed round",
      description:
        "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......",
    },
    // {
    //   id: 3,
    //   image:
    //     "https://images.unsplash.com/photo-1494790108755-2616c88ca2c5?w=400&h=250&fit=crop&q=80",
    //   category: "Company",
    //   title: "Credbevy raises unknown amount in undisclosed round",
    //   description:
    //     "News related to Credbevy all around the world gathered here. News related to Credbevy all around the world gathered hereNews related to Credbevy all around the world gathered here.......",
    // },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-1"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <Image
                height={400}
                width={400}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Category Tag */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full uppercase tracking-wide">
                    {article.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors duration-200 flex items-center gap-1 group-hover:gap-2">
                    Read more
                    <span className="transition-all duration-200">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
