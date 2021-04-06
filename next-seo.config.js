const config = {
    title: "Kashmir Type Hunt",
    description: "Kashmir Type Hunt is a design community based in Kashmir. Our motive is to document and archive indigenous type forms. The goal is to build awareness about design and type forms around us. What started as individuals documenting type has now evolved into a community where everyone can submit their find thus documenting and showcasing for all the people out there.",
    url: "https://kashmirtypehunt.vercel.app"
}

export default {
    title:config.title,
    description:config.description,
    canonical:config.url,
    openGraph: {
      url:  config.url,
      title: config.title,
      description: config.description,
      type: 'website',
      url: config.url,
      site_name: config.title,
      images: [
        {
          url: config.url+'/og.jpg',
          width: 1200,
          height: 630,
          alt: 'OG Image'
      },
      ]
    },
  };