'use client'
import DOMPurify from 'isomorphic-dompurify';
import { Arrow, LogoWhite, LogoBlack, XV } from '@/components/svgs';
import ReactPlayer from "react-player/vimeo";
import CustomGraphic from "@/components/CustomGraphic";
import CustomGraphic2 from "@/components/CustomGraphic2";
import PortfolioItem from "@/components/PortfolioItem";
import ModalCta from '@/components/ModalCta';

const content = {
  hero: {
    title: '15<br />years<br />of<br />branding'
  },
  ctaText: 'Book a call',
  copyright: '© 2023 Branding Pool',
  about: {
    richText1: '<h2>WE´RE DEEPLY ROOTED IN THE POWER OF PURPOSE AND BRINGING BRANDS TO LIFE.</h2><p>Since 2008, we’re a strategic brand agency specialized in creative consulting, leading our clients to create, grow and expand their business by building strong, authentic and inevitably attractive brands.</p><img>',
    richText2: '<p>We are proud to say that our work has helped shape the future. With enjoyable, reliable experiences, and inspiring stories to tell. Thanks to our team of hardworking individuals, and our approach to branding, we have been able to create brands that can, and will thrive in the long run, as well as to serve greater purposes.</p><h2>BRANDS WITH A FUTURE</h2>',
    graphicText: 'MAKING WAVES SINCE 2008',
  },
  portfolio: {
    title: 'BRAND STRATEGY, CREATIVE CONSULTING AND DESIGN OFFICE.',
    subtitle: 'STRATEGY - LED BRANDING',
    richText: '<h2>Full-on branding for brands that work from the inside out.</h2><p>At Branding Pool, we believe that strong foundations and adaptability are key to a healthy, sustainable branding. That’s why our approach centers in finding the true value of each project, to develop relevant and clear statements to create genuine human connections.</p>',
    items: [
      {
        image: '',
        animation: '',
        title: 'Restaurante<bt />El Rodeo',
      },
      {
        image: '',
        animation: '',
        title: 'Vertical<br />Climb fitness',
      },
      {
        image: '',
        animation: '',
        title: 'Radioimagen<br />Médica',
      },
      {
        image: '',
        animation: '',
        title: 'Remember Niger<br />Coalition',
      },
      {
        image: '',
        animation: '',
        title: '93<br />Beeer / Tap',
      },
      {
        image: '',
        animation: '',
        title: 'Saketor-ya<br />Japón Contento',
      },
      {
        image: '',
        animation: '',
        title: 'Enerser<br />Impulsamos el futuro',
      },
      {
        image: '',
        animation: '',
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

const Home = ()  => {

  return (
    <main className="bg-black text-white flex flex-col items-center pt-12">
      <header className="relative flex justify-center items-start w-full max-w-screen-xl">
        <span className="flex w-72"><LogoWhite /></span>
        <a href="http://instagram.com/somospool" target="_blank" className="absolute right-0 top-0 uppercase text-white border rounded-full p-2 px-3">ig</a>
      </header>
      <section className="relative flex">
        <XV />
        <h3 className="uppercase absolute w-full h-full flex items-center text-center justify-center text-white top-0 left-0 right-0 bottom-0"><span dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.hero.title) }}></span></h3>
      </section>
      <section className="relative fle">
        <ReactPlayer
          url="https://vimeo.com/305846054"
          className="react-player"
          controls
          width="100%"
          height="100%"
        />
      </section>
      <section className="">
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.about.richText1) }} />
        <CustomGraphic text={content.about.graphicText}/>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.about.richText2) }} />
        <ModalCta title={content.ctaText} >Hello</ModalCta>
      </section>
      <section className="text-black rounded-t-3xl pt-40 pb-48 px-12 flex flex-col items-center" style={{background: '#f8f8f8'}}>
        <div>
          <h2>{content.portfolio.title}</h2>
          <span className="flex w-4"><Arrow /></span>
          <h3>{content.portfolio.subtitle}</h3>
          {content.portfolio?.items.length ?
          <ul className='flex flex-wrap'>
            {content.portfolio.items.map((item, i) =>
              <li key={`portfolio-item-${i}`} className={`${i % 5 === 0 ? 'w-1/2' : 'w-full'}`}>
                <PortfolioItem image={item.image} animation={item.animation} title={item.title} />
              </li>
            )}
          </ul>: ''}
          <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content.portfolio.richText) }}></div>
          <CustomGraphic2 items={content.portfolio.graphic.texts}/>
          <ModalCta title={content.ctaText} color="black">Hello</ModalCta>
        </div>
      </section>
      <footer className="text-black rounded-t-3xl p-12 pt-96 -mt-6" style={{backgroundColor: '#dadada'}}>
        <button onClick={() => alert('up')} />
        <LogoBlack />
        <p className="uppercase">{content.copyright}</p>
      </footer>

    </main>
  );
}

export default Home;
