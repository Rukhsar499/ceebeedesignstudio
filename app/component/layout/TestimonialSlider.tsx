"use client";
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

// Load Owl Carousel dynamically to isolate server rendering pipelines


interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  quote: string;
  videoSrc: string;
  thumbnailSrc: string;
}

const testimonialData: TestimonialItem[] = [
  {
    id: "testimonial-1",
    clientName: "Elena Rostova",
    role: "Founder, Villa Amalia",
    quote: "Compatto transformed our boutique hotel space layout with immaculate timing and unmatched luxury styling. The execution phase was seamless.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-with-swimming-pool-41617-large.mp4", 
    thumbnailSrc: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "testimonial-2",
    clientName: "Marcus Aurelius",
    role: "Director, Pantheon Estates",
    quote: "The design clarity and bespoke finishing touch allowed us to present premium architecture that exceeded all luxury investor metrics.",
    videoSrc: "https://assets.mixkit.co/videos/preview/mixkit-interior-of-a-modern-living-room-42353-large.mp4",
    thumbnailSrc: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
  }
];

export default function TestimonialSlider() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const toggleVideoPlay = async (id: string) => {
  const video = videoRefs.current[id];
  if (!video) return;

  if (playingId === id) {
    video.pause();
    setPlayingId(null);
  } else {
    Object.values(videoRefs.current).forEach((v) => {
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    });

    video.muted = false;
    await video.play();

    setPlayingId(id);
  }
};

  

  return (
    <section className="relative w-full bg-[#f9f5f0] py-24 px-4 md:px-16 lg:px-24 overflow-hidden font-sans">
      
      {/* Decorative Branding Header */}
      <div className="text-center w-full mb-16">
        <h2 
          data-aos="fade-down"
          className="text-3xl md:text-5xl font-serif text-[#5a2a42] tracking-wide"
        >
          Client Testimonials
        </h2>
      </div>

      {/* Main Slider Wrapper Container */}
    <div className="max-w-7xl mx-auto relative">
  <Swiper
    modules={[
      Navigation,
      Pagination,
      Autoplay,
      EffectCoverflow,
    ]}
    effect="coverflow"
    centeredSlides
    slidesPerView={1.2}
    spaceBetween={20}
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
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 1,
      scale: 0.85,
      slideShadows: false,
    }}
    breakpoints={{
      768: {
        slidesPerView: 1.8,
      },
      1024: {
        slidesPerView: 2.4,
      },
    }}
  >
    {testimonialData.map((item) => {
      const isCurrentPlaying = playingId === item.id;

      return (
        <SwiperSlide key={item.id}>
          <div className="relative overflow-hidden rounded-lg">

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
                  className="absolute left-1/2 top-1/2
                             -translate-x-1/2 -translate-y-1/2
                             w-20 h-20 rounded-full
                             bg-white/90
                             flex items-center justify-center"
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
  <Swiper
  modules={[
    Navigation,
    Pagination,
    Autoplay,
    EffectCoverflow,
  ]}
  effect="coverflow"
  centeredSlides
  slidesPerView={1.2}
  spaceBetween={20}
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
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 120,
    modifier: 1,
    scale: 0.85,
    slideShadows: false,
  }}
  breakpoints={{
    768: {
      slidesPerView: 1.6,
    },
    1024: {
      slidesPerView: 2.2,
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
      className="w-full h-[420px] object-cover cursor-pointer"
      playsInline
      preload="metadata"
      onClick={() => toggleVideoPlay(item.id)}
    />

    {!isCurrentPlaying && (
      <>
        <div className="absolute inset-0 bg-black/25" />

        <button
          onClick={() => toggleVideoPlay(item.id)}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                     w-16 h-16 rounded-full bg-white/80 flex items-center justify-center"
        >
          <Play size={30} />
        </button>
      </>
    )}
  </div>
</SwiperSlide>
      );
    })}
  </Swiper>
</div>

      {/* Embedded Styling Interface Enhancements to Polish Native Owl Elements */}
      <style jsx global>{`
  .swiper {
    overflow: visible;
    padding-bottom: 60px;
  }

  .swiper-slide {
    transition: all 0.4s ease;
    opacity: 0.5;
    transform: scale(0.85);
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