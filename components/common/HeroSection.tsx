import Image from "next/image";
import React from "react";
import {
  ArrowBigLeftIcon,
  GlobeIcon,
  PlayCircle,
  TriangleIcon,
} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="bg-background min-h-screen" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content - Right side on desktop */}
          <div className="lg:col-span-6 space-y-8 text-right relative">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                طوّر مهاراتك
                <br />
                <span className="relative">
                  بلا حدود
                  <svg
                    className="absolute -bottom-2 left-0 w-32 h-3 text-secondary"
                    viewBox="0 0 120 12"
                    fill="currentColor"
                  >
                    <path
                      d="M2 8c20-4 40-6 60-4s40 8 60 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-md mr-auto">
                منصة التعلم الرائدة في تونس، نوفر لك أفضل الدروس التعليمية مع
                أساتذة متخصصين لتطوير مهاراتك المدرسية والأكاديمية
              </p>
            </div>

            <div className="flex items-center gap-4 justify-end">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-ring transition-colors duration-200 flex items-center gap-2">
                استكشف الدروس
                <ArrowBigLeftIcon />
              </button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  320K
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  تلميذ
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  100%
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  تقييم إيجابي
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  980
                </div>
                <div className="text-muted-foreground text-sm md:text-base">
                  أستاذ
                </div>
              </div>
            </div>
          </div>
          {/* Image Section - Left side on desktop */}
          <div className="lg:col-span-6 relative">
            {/* Decorative background */}
            <div className="absolute -top-4 -right-2 w-full h-full bg-secondary/20 rounded-2xl transform rotate-2"></div>

            {/* Main image container */}
            <div className="relative bg-card p-2 rounded-2xl shadow-xl transform transition-transform duration-500 hover:scale-105">
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/learning.png"
                  width={698}
                  height={1080}
                  alt="learning online"
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <button className="p-4 rounded-full bg-card/90 hover:bg-card transition-colors duration-200 transform hover:scale-110">
                    <PlayCircle className="w-12 h-12 text-primary" />
                  </button>
                </div>
              </div>

              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-4 bg-card p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center">
                    <GlobeIcon />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      طلاب من جميع أنحاء تونس
                    </p>
                    <p className="font-semibold text-primary">+10 ولايات</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
