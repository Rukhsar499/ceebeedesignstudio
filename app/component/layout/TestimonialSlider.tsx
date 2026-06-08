"use client";

import React, { useRef, useState } from "react";
import { Play } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

interface TestimonialItem {
  id: string;
  videoSrc: string;
  thumbnailSrc: string;
}

const testimonialData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-with-swimming-pool-41617-large.mp4",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "testimonial-2",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-42353-large.mp4",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "testimonial-3",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-with-swimming-pool-41617-large.mp4",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "testimonial-4",
    videoSrc:
      "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-42353-large.mp4",
    thumbnailSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function TestimonialSlider() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const videoRefs = useRef<{
    [key: string]: HTMLVideoElement | null;
  }>({});

  const toggleVideoPlay = async (id: string) => {
    const video = videoRefs.current[id];

    if (!video) return;

    if (playingId === id) {
      video.pause();
      setPlayingId(null);
      return;
    }

    Object.values(videoRefs.current).forEach((v) => {
      if (v) {
        v.pause();
      }
    });

    try {
      video.muted = false;
      await video.play();
      setPlayingId(id);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-[42px] font-serif text-[#7d4b5d]">
          Testimonials
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto px-4">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            EffectCoverflow,
          ]}
          effect="coverflow"
          centeredSlides
          loop
          navigation
          pagination={{ clickable: true }}
          autoplay={
            !playingId
              ? {
                delay: 4000,
                disableOnInteraction: false,
              }
              : false
          }
          slidesPerView={1.2}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 1,
            scale: 0.82,
            slideShadows: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1.8,
            },
            1024: {
              slidesPerView: 2.4,
            },
            1400: {
              slidesPerView: 2.8,
            },
          }}
        >
          {testimonialData.map((item) => {
            const isCurrentPlaying = playingId === item.id;

            return (
              <SwiperSlide key={item.id}>
                <div className="relative overflow-hidden rounded-md">
                  <video
                    ref={(el) => {
                      videoRefs.current[item.id] = el;
                    }}
                    src={item.videoSrc}
                    poster={item.thumbnailSrc}
                    className="w-full h-[500px] object-cover cursor-pointer"
                    playsInline
                    preload="metadata"
                    onClick={() => toggleVideoPlay(item.id)}
                  />

                  {!isCurrentPlaying && (
                    <>
                      <div className="absolute inset-0 bg-black/30" />

                      <button
                        onClick={() => toggleVideoPlay(item.id)}
                        className={`
    absolute left-1/2 top-1/2
    -translate-x-1/2 -translate-y-1/2
    w-20 h-20 rounded-full
    bg-white/90
    flex items-center justify-center
    shadow-xl
  `}
                      >
                        <Play size={34} />
                      </button>
                    </>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper {
          overflow: visible;
          padding-bottom: 70px;
        }

        .swiper-slide {
          opacity: 0.45;
          transform: scale(0.82);
          transition: all 0.4s ease;
        }

        .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }

        .swiper-button-prev,
        .swiper-button-next {
          color: #7d4b5d;
        }

        .swiper-pagination-bullet-active {
          background: #7d4b5d;
        }
      `}</style>
    </section>
  );
}