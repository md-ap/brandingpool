'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import DOMPurify from 'isomorphic-dompurify';
import { ParallaxProvider } from "react-scroll-parallax";
import { Arrow, LogoWhite, LogoBlack, XV } from '@/components/svgs';
import CustomGraphic from "@/components/CustomGraphic";
import CustomGraphic2 from "@/components/CustomGraphic2";
import ModalCta from '@/components/ModalCta';
import Vimeo from '@u-wave/react-vimeo';
import Contact from '@/components/contact';
import Carousel from '@/components/Carousel';




const content = {
  hero: {
    title: '15<br />years<br />of<br />branding'
  },
  ctaText: 'Book a call',
  copyright: '© 2024 Branding Pool',
  about: {
    richText1: '<h2 class="pb-10 md:pb-20">We´re deeply rooted in the power of purpose and bringing brands to life.</h2><p class="pb-14 md:pb-28">Since 2008, we’re a strategic brand agency specialized in creative consulting, leading our clients to create, grow and expand their business by building strong, authentic and inevitably attractive brands.</p><img>',
    richText2: '<p class="pb-14 md:pb-28">We are proud to say that our work has helped shape the future. With enjoyable, reliable experiences, and inspiring stories to tell. Thanks to our team of hardworking individuals, and our approach to branding, we have been able to create brands that can, and will thrive in the long run, as well as to serve greater purposes.</p><h2 class="pb-10 md:pb-20 uppercase">Brands with a future</h2>',
    graphicText: '<h2>MAKING WAVES<br />SINCE 2008<h2>',
  },
  portfolio: {
    title: 'BRAND STRATEGY, CREATIVE CONSULTING AND DESIGN OFFICE.',
    subtitle: 'STRATEGY - LED BRANDING',
    richText: '<h2 class="acumin-light xl:px-24">Full-on branding for brands that work from the inside out.</h2><p class="">At Branding Pool, we believe that strong foundations and adaptability are key to a healthy, sustainable branding. That’s why our approach centers in finding the true value of each project, to develop relevant and clear statements to create genuine human connections.</p>',
    projects: [
      {
        title: 'Restaurante<br />El Rodeo',
        images: [
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-01.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-02.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-03.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-04.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-05.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-06.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-07.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-08.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-09.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-10.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-11.jpg',
          '/portfolio/01_El Rodeo/POOL_Portafolio-Landing-Rodeo-12.jpg',
        ]
      },
      {
        title: 'Vertical<br />Climb Fitness',
        images: [
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-01.jpg',
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-03.jpg',
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-04.jpg',
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-05.jpg',
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-06.jpg',
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-07.jpg',
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-02.jpg',
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-08.jpg',
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-09.jpg',
          '/portfolio/02_Vertical/POOL_Portafolio-Landing-Vertical-10.jpg',
        ]
      },
      {
        title: 'Radioimagen<br />Médica',
        images: [
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-01.jpg',
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-03.jpg',
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-04.jpg',
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-05.jpg',
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-06.jpg',
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-07.jpg',
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-02.jpg',
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-08.jpg',
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-09.jpg',
          '/portfolio/03_Radioimagen/POOL_Portafolio-Landing-Radioimagen-10.jpg',
        ]
      },
      {
        title: 'Remember Niger<br />Coalition',
        images: [
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-01.jpg',
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-03.jpg',
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-04.jpg',
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-05.jpg',
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-06.jpg',
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-07.jpg',
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-02.jpg',
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-08.jpg',
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-09.jpg',
          '/portfolio/04_Remember_Niger/POOL_Portafolio-Landing-RN-10.jpg',
        ]
      },
      {
        title: '93<br />Beer Tab',
        images: [
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-01.jpg',
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-03.jpg',
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-04.jpg',
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-05.jpg',
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-06.jpg',
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-07.jpg',
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-02.jpg',
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-08.jpg',
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-09.jpg',
          '/portfolio/05_93_Beer/POOL_Portafolio-Landing-93-10.jpg',
        ]
      },
      {
        title: 'Saketori-Ya<br />Japón contento',
        images: [
          '/portfolio/06_Saketori_Ya/POOL_Portafolio-Landing-Saketori-01.jpg',
          '/portfolio/06_Saketori_Ya/POOL_Portafolio-Landing-Saketori-03.jpg',
          '/portfolio/06_Saketori_Ya/POOL_Portafolio-Landing-Saketori-04.jpg',
          '/portfolio/06_Saketori_Ya/POOL_Portafolio-Landing-Saketori-05.jpg',
          '/portfolio/06_Saketori_Ya/POOL_Portafolio-Landing-Saketori-06.jpg',
          '/portfolio/06_Saketori_Ya/POOL_Portafolio-Landing-Saketori-07.jpg',
          '/portfolio/06_Saketori_Ya/POOL_Portafolio-Landing-Saketori-02.jpg',
          '/portfolio/06_Saketori_Ya/POOL_Portafolio-Landing-Saketori-08.jpg',
          '/portfolio/06_Saketori_Ya/POOL_Portafolio-Landing-Saketori-09.jpg',
        ]
      },
      {
        title: 'Enerser<br />Impulsando el futuro',
        images: [
          '/portfolio/07_Enerser/POOL_Portafolio-Landing-Enerser-01.jpg',
          '/portfolio/07_Enerser/POOL_Portafolio-Landing-Enerser-03.jpg',
          '/portfolio/07_Enerser/POOL_Portafolio-Landing-Enerser-04.jpg',
          '/portfolio/07_Enerser/POOL_Portafolio-Landing-Enerser-05.jpg',
          '/portfolio/07_Enerser/POOL_Portafolio-Landing-Enerser-06.jpg',
          '/portfolio/07_Enerser/POOL_Portafolio-Landing-Enerser-07.jpg',
          '/portfolio/07_Enerser/POOL_Portafolio-Landing-Enerser-02.jpg',
          '/portfolio/07_Enerser/POOL_Portafolio-Landing-Enerser-08.jpg',
          '/portfolio/07_Enerser/POOL_Portafolio-Landing-Enerser-09.jpg',
        ]
      },
      {
        title: 'Lazu life<br />Small description',
        images: [
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-01.jpg',
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-03.jpg',
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-04.jpg',
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-05.jpg',
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-06.jpg',
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-07.jpg',
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-02.jpg',
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-08.jpg',
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-09.jpg',
          '/portfolio/08_Lazu/POOL_Portafolio-Landing-Lazu-10.jpg',
        ]
      },
      {
        title: 'Ok Dock<br />Small description',
        images: [
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-01.jpg',
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-03.jpg',
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-04.jpg',
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-05.jpg',
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-06.jpg',
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-07.jpg',
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-02.jpg',
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-08.jpg',
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-09.jpg',
          '/portfolio/09_Ok_Dock/POOL_Portafolio-Landing-OkDock-10.jpg',
        ]
      },
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
        <header className="w-full px-6 md:px-16 lg:px-24 xl:px-36 flex justify-center">
          <div className="max-w-screen-2xl my-10 md:my-20 gap-y-10 md:gap-y-20 relative flex flex-col justify-center items-center w-full">
            <span className="flex w-1/2 md:w-2/3" style={{maxWidth: '441px'}}><LogoWhite /></span>
            <a href="https://www.instagram.com/branding.pool/" target="_blank" className="instagram absolute right-0 top-0 uppercase text-[#EBEBEB] border rounded-full text-sm p-1 px-2 md:p-2 md:px-3">ig</a>
            <div className="w-full relative">
              <XV />
              <h3 className="uppercase absolute w-full h-full flex items-center text-center justify-center text-[#EBEBEB]top-0 left-0 right-0 bottom-0"><span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.hero.title) }}></span></h3>
            </div>
          </div>
        </header>

        <section className="relative px-8 sm:px-12 md:px-24 flex items-center flex-col justify-center w-full max-w-screen-xl text-center gap-y-10 md:gap-y-20 pb-12 md:pb-24">
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
            <h2 className="max-w-xl">{content.portfolio.title}</h2>
            <span className="w-4"><Arrow /></span>
            <h5>{content.portfolio.subtitle}</h5>
            {content.portfolio?.projects.length ?
              <ul className='flex flex-wrap gap-6 pb-2 md:pb-28 sm:px-12 md:px-24'>
                {content.portfolio.projects.map((project, i) =>
                  <li key={`portfolio-projects-${i}`} className="relative text-left">
                    <Carousel>
                      {project.images.map((image, j) =>
                        <Image
                          key={`carousel-${project}-${i}`}
                          src={image}
                          alt={`${project.title}_image_${i}`}
                          width={1250}
                          height={700}
                          className="w-full h-auto"
                      />
                      )}
                    </Carousel>
                    <h4 className="text-white absolute bottom-6 left-4 md:bottom-10 md:left-7 lg:bottom-16 lg:left-12"  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(project.title) }} />
                  </li>
                )}
              </ul>: ''}

            <div className="flex flex-col gap-12 max-w-screen-xl px-8 sm:px-12 md:px-44" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.portfolio.richText) }}></div>
          </div>
        </section>
        <section className="pb-32 w-full text-black flex flex-col items-center" style={{background: '#f8f8f8'}}>
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
