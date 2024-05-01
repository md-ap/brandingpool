'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import { ParallaxProvider } from "react-scroll-parallax";
import { Arrow, LogoWhite, LogoBlack, XV } from '@/components/svgs';
import CustomGraphic from "@/components/CustomGraphic";
import CustomGraphic2 from "@/components/CustomGraphic2";
import ModalCta from '@/components/ModalCta';
import Video, { YouTubeProps } from 'react-youtube';
import Contact from '@/components/contact';
import { PrevArrow, NextArrow} from '@/components/Carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import getPortfolioItems from '@/utils/getPortfolioItems';
const content = {
  hero: {
    title: '15<br />years<br />of<br />branding'
  },
  ctaText: 'Book a call',
  copyright: '© 2024 Branding Pool',
  about: {
    richText1: '<h2>We´re deeply rooted in <br class="hidden xl:inline-block" />the power of purpose and bringing brands to life.</h2><p>Since 2008, we’re a strategic brand agency specialized in creative consulting, leading our clients to create, grow and expand their business by building strong, authentic and inevitably attractive brands.</p>',
    richText2: '<p>We are proud to say that our work has helped shape the future. With enjoyable, reliable experiences, and inspiring stories to tell. Thanks to our team of hardworking individuals, and our approach to branding, we have been able to create brands that can, and will thrive in the long run, as well as to serve greater purposes.</p><h2 class="uppercase">Brands with a future</h2>',
    graphicText: 'Making waves<br />since 2008',
  },
  portfolio: {
    title: 'BRAND STRATEGY, CREATIVE CONSULTING AND DESIGN OFFICE.',
    subtitle: 'STRATEGY - LED BRANDING',
    richText: '<h2 class="acumin-light xl:px-24">Full-on branding for brands that work from the inside out.</h2><p class="">At Branding Pool, we believe that strong foundations and adaptability are key to a healthy, sustainable branding. That’s why our approach centers in finding the true value of each project, to develop relevant and clear statements to create genuine human connections.</p>',
    graphic: {
      texts: [
        {
          title: 'Strategy',
          subtitle: 'BRAND CLARITY AND POSITIONING',
        },
        {
          title: 'Design',
          subtitle: 'Brand experience',
        },
        {
          title: 'Communication',
          subtitle: 'BRAND EXPRESSION',
        }
      ],
    }
  }
}

const  scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const Home = ()  => {
  const [videoHeight, setVideoHeight] = useState('');
  const [portfolioItems, setPortfolioItems] = useState<any>([]);
  const videoEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items: string[][] = await getPortfolioItems();
        const filteredItems = items.map((item: string[]) => {
          if (window.innerWidth < 800) {
              return item.filter((fileName: string) => !fileName.endsWith('.webp'));
          } else {
              return item.filter((fileName: string) => !fileName.endsWith('.gif'));
          }
        });
        setPortfolioItems(filteredItems);
      } catch (error) {
        console.error('Error fetching portfolio items:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (videoEl.current) {
      const width = videoEl.current.clientWidth;
      const height = (42.5 * width) / 100;
      setVideoHeight(`${height}px`);
    }
  }, []);

  const videoOpts = {
    width: '100%',
    height: videoHeight,
  };

  const videoId = 'FZpbfD55EGQ';

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  return (
    <ParallaxProvider>
      <main className=" bg-black text-[#EBEBEB] flex items-center flex-col">

        <a href="https://www.instagram.com/branding.pool/" target="_blank" className="instagram absolute top-10 md:top-20 right-4 md:right-8 lg:right-16 xl:right-22 uppercase text-[#EBEBEB] border rounded-full text-sm p-1 px-2 md:p-2 md:px-3">ig</a>

      {/* Header */}
        <header className="w-full px-8 md:px-16 lg:px-24 xl:px-32 flex justify-center items-center pt-10 lg:pt-20 pb-10 lg:pb-36">
          <div
            className="max-w-screen-2xl flex flex-col justify-center items-center w-full gap-10 md:gap-24 lg:gap-48"
          >
            <span className="flex w-1/2 md:w-2/3" style={{maxWidth: '390px'}}><LogoWhite /></span>

            <div className="w-full relative">
              <XV />
              <h3 className="uppercase absolute w-full h-full flex items-center text-center justify-center text-[#EBEBEB]top-0 left-0 right-0 bottom-0" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.hero.title) }}/>
            </div>

            <div className="w-full" ref={videoEl}>
              {videoId && <Video videoId={videoId} opts={videoOpts} onReady={onPlayerReady} />}
            </div>
          </div>
        </header>

        {/* CTA */}
        <section className="px-8 md:px-16 lg:px-24 xl:px-32 flex items-center flex-col justify-center w-full max-w-screen-2xl pb-24 md:pb-52">
          <div className="relative  flex items-center flex-col justify-center w-full text-center gap-16 md:gap-32 md:px-20 lg:px-44">
            <div className="flex flex-col gap-10 md:gap-20" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.about.richText1) }} />

            <CustomGraphic text={content.about.graphicText}/>

            <div className="flex flex-col gap-16 md:gap-32" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.about.richText2) }} />

            <ModalCta title={content.ctaText} color="text-black bg-white"><Contact /></ModalCta>
          </div>
        </section>

        {/* Portfolio */}
        <section className="text-black w-full rounded-t-4xl py-14 md:py-44 px-4 md:px-16 lg:px-24 xl:px-32 flex justify-center text-center" style={{background: '#f8f8f8'}}>
          <div className="flex flex-col gap-10 md:gap-20 items-center max-w-screen-2xl">
            <h2 className="max-w-screen-md px-4 md:px-0">{content.portfolio.title}</h2>
            <span className="w-4"><Arrow /></span>
            <h5 className="pb-4 md:pb-9">{content.portfolio.subtitle}</h5>
            {portfolioItems.length ?
              <ul className='flex flex-wrap gap-3 md:gap-7'>
                {portfolioItems.map((item: string[], i: number) =>
                  <li key={`portfolio-projects-${i}`} className="relative text-left">
                    <Carousel
                      renderArrowPrev={PrevArrow}
                      renderArrowNext={NextArrow}
                      showStatus={false}
                      showIndicators={false}
                      showThumbs={false}
                    >
                      {item.map((image: string) =>
                      <div key={`carousel-${image}`}>
                        <Image
                          src={`/portfolio/${image}`}
                          alt={image}
                          unoptimized={image.includes('gif')}
                          width={1250}
                          height={700}
                          priority
                          className="w-full h-auto"
                        />
                      </div>
                      )}
                    </Carousel>
                    {/* <h4 className="text-white absolute bottom-6 left-4 md:bottom-10 md:left-7 lg:bottom-16 lg:left-12"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.title) }} /> */}
                  </li>
                )}
              </ul>: ''}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 md:pb-52 w-full text-black flex flex-col items-center" style={{background: '#f8f8f8'}}>
          <div className="flex flex-col gap-8 md:gap-12 max-w-screen-xl px-8 sm:px-12 md:px-44 text-center" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.portfolio.richText) }}/>
          <CustomGraphic2 items={content.portfolio.graphic.texts}/>
          <ModalCta title={content.ctaText}><Contact /></ModalCta>
        </section>

        {/* Footer */}
        <footer className="relative flex flex-col w-full text-black rounded-t-4xl p-12 pt-[9rem] md:pt-96 -mt-12" style={{backgroundColor: '#dadada'}}>
          <button className="absolute right-10 top-10 w-8 h-8 rounded-full bg-black hover:bg-blue-400 after:w-3 after:h-3 after:border after:flex after:border-white after:-rotate-45 after:border-b-0 after:border-l-0 after:absolute after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/4" onClick={scrollToTop}></button>
          <LogoBlack />
          <p className="uppercase pt-4 flex justify-start text-xs md:text-base lg:text-xl xl:text-2xl">{content.copyright}</p>
        </footer>
      </main>
    </ParallaxProvider>
  );
}

export default Home;
