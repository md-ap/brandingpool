'use client'
import { useState, useEffect } from 'react';
import DOMPurify from 'isomorphic-dompurify';
import { ParallaxProvider } from "react-scroll-parallax";
import { Arrow, LogoWhite, LogoBlack, XV } from '@/components/svgs';
import CustomGraphic from "@/components/CustomGraphic";
import CustomGraphic2 from "@/components/CustomGraphic2";
import PortfolioItem from "@/components/PortfolioItem";
import ModalCta from '@/components/ModalCta';
import Vimeo from '@u-wave/react-vimeo';
import Contact from '@/components/contact';




const content = {
  hero: {
    title: '15<br />years<br />of<br />branding'
  },
  ctaText: 'Book a call',
  copyright: '© 2024 Branding Pool',
  about: {
    richText1: '<h2 class="pb-20">We´re deeply rooted in the power of purpose and bringing brands to life.</h2><p class="pb-56">Since 2008, we’re a strategic brand agency specialized in creative consulting, leading our clients to create, grow and expand their business by building strong, authentic and inevitably attractive brands.</p><img>',
    richText2: '<p class="pb-28">We are proud to say that our work has helped shape the future. With enjoyable, reliable experiences, and inspiring stories to tell. Thanks to our team of hardworking individuals, and our approach to branding, we have been able to create brands that can, and will thrive in the long run, as well as to serve greater purposes.</p><h2 class="pb-20 uppercase">Brands with a future</h2>',
    graphicText: 'MAKING WAVES SINCE 2008',
  },
  portfolio: {
    title: 'BRAND STRATEGY, CREATIVE CONSULTING AND DESIGN OFFICE.',
    subtitle: 'STRATEGY - LED BRANDING',
    richText: '<h2 class="max-w-[41rem] mx-auto normal-case">Full-on branding for brands that work from the inside out.</h2><p class="max-w-[58rem] mx-auto pb-[0rem] md:pb-[12rem]">At Branding Pool, we believe that strong foundations and adaptability are key to a healthy, sustainable branding. That’s why our approach centers in finding the true value of each project, to develop relevant and clear statements to create genuine human connections.</p>',
    items: [
      {
        image: '/portfolio/rodeo/rodeo_img.webp',
        animation: '/portfolio/rodeo/rodeo_animation.webp',
        title: 'Restaurante<br />El Rodeo',
      },
      {
        image: 'portfolio/vertical/vertical_img.webp',
        animation: 'portfolio/vertical/vertical_animation.webp',
        title: 'Vertical<br />Climb fitness',
      },
      {
        image: 'portfolio/radioimagen/radioimagen_img.webp',
        animation: 'portfolio/radioimagen/radioimagen_animation.webp',
        title: 'Radioimagen<br />Médica',
      },
      {
        image: 'portfolio/remember/remember_img.webp',
        animation: 'portfolio/remember/remember_animation.webp',
        title: 'Remember Niger<br />Coalition',
      },
      {
        image: 'portfolio/beer/beer_img.webp',
        animation: 'portfolio/beer/beer_animation.webp',
        title: '93<br />Beer / Tap',
      },
      {
        image: 'portfolio/saketori/saketori_img.webp',
        animation: 'portfolio/saketori/saketori_animation.webp',
        title: 'Saketori-ya<br />Japón Contento',
      },
      {
        image: 'portfolio/enerser/enerser_img.webp',
        animation: 'portfolio/enerser/enerser_animation.webp',
        title: 'Enerser<br />Impulsamos el futuro',
      },
      {
        image: 'portfolio/lazu/lazu_img.webp',
        animation: 'portfolio/lazu/lazu_animation.webp',
        title: 'Lazulife<br />Small description',
      }
    ],
    graphic: {
      texts: [
        {
          title: 'Strategy',
          subtitle: 'BRAND CLARITY AND POSITIONING',
        },
        {
          title: 'Strategy',
          subtitle: 'Brand experince',
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
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVideoLoaded(true)
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ParallaxProvider>
      <main className=" bg-black text-[#EBEBEB] flex items-center flex-col">
        <header className="w-full px-6 md:px-16 lg:px-25 xl:px-36 flex justify-center">
          <div className="max-w-screen-2xl my-10 md:my-20 gap-y-10 md:gap-y-20 relative flex flex-col justify-center items-center w-full">
            <span className="flex w-1/2 md:w-2/3" style={{maxWidth: '441px'}}><LogoWhite /></span>
            <a href="https://www.instagram.com/branding.pool/" target="_blank" className="instagram absolute right-0 top-0 uppercase text-[#EBEBEB] border rounded-full text-sm p-1 px-2 md:p-2 md:px-3">ig</a>
            <div className="w-full relative">
              <XV />
              <h3 className="uppercase absolute w-full h-full flex items-center text-center justify-center text-[#EBEBEB]top-0 left-0 right-0 bottom-0"><span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.hero.title) }}></span></h3>
            </div>
          </div>
        </header>

        <section className="relative px-8 sm:px-12 md:px-24 flex items-center flex-col justify-center w-full max-w-screen-xl text-center gap-y-20 pb-24">
          <div className="w-full">
            {videoLoaded ?
              <Vimeo video="305846054" responsive /> :
              ''
          }

          </div>
          <div className="md:px-24 flex flex-col items-center max-w-full">
            <div className="flex flex-col" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.about.richText1) }} />
            <CustomGraphic text={content.about.graphicText}/>
            <div className="flex flex-col" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.about.richText2) }} />
            <ModalCta title={content.ctaText} color="text-black bg-white"><Contact /></ModalCta>
          </div>
        </section>

          <section className="text-black w-full rounded-t-4xl pt-28 px-8 sm:px-12 md:px-24 flex justify-center text-center" style={{background: '#f8f8f8'}}>
            <div className="flex flex-col gap-12 items-center max-w-screen-2xl">
              <h2 className="max-w-xl	mx-auto">{content.portfolio.title}</h2>
              <span className="w-4 mx-auto"><Arrow /></span>
              <h5>{content.portfolio.subtitle}</h5>
              {content.portfolio?.items.length ?
              <ul className='flex flex-wrap gap-2 pb-2 md:pb-28'>
                {content.portfolio.items.map((item, i) =>
                  <li key={`flex portfolio-item-${i}`} className={`${i % 5 === 0 ? 'w-full' : 'w-1/2-gap-2'}`}>
                    <PortfolioItem image={item.image} animation={item.animation} title={item.title} />
                  </li>
                )}
              </ul>: ''}
              <div className="flex flex-col gap-12" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.portfolio.richText) }}></div>
            </div>
          </section>
        <section className="pb-32 w-full text-black flex flex-col items-center gap-12" style={{background: '#f8f8f8'}}>
          <CustomGraphic2 items={content.portfolio.graphic.texts}/>
          <ModalCta title={content.ctaText}><Contact /></ModalCta>
        </section>
        <footer className="relative flex flex-col w-full text-black rounded-t-4xl p-12 pt-[9rem] md:pt-96 -mt-10" style={{backgroundColor: '#dadada'}}>
          <button className="absolute right-10 top-10 w-8 h-8 rounded-full bg-black hover:bg-blue-400 after:w-3 after:h-3 after:border after:flex after:border-white after:-rotate-45 after:border-b-0 after:border-l-0 after:absolute after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/4" onClick={scrollToTop}></button>
          <LogoBlack />
          <p className="uppercase pt-4 flex justify-start text-xs md:text-base lg:text-xl xl:text-2xl">{content.copyright}</p>
        </footer>
      </main>
    </ParallaxProvider>
  );
}

export default Home;
