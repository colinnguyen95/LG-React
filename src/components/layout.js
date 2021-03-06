import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import Helmet from 'react-helmet';
import Nav from './Navigation/Nav';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './layout.css';
// import FavLG16 from '../images/FavLG16.png';
// import FavLG32 from '../images/FavLG32.png';
// import FavLG64 from '../images/FavLG64.png';

export default ({ children }) => (
   <StaticQuery
     query={graphql`
       query LayoutQuery {
         site {
           siteMetadata {
             title
             description
             keywords
             }
         }
       }
     `}
     render={data => (
       <>
         <Helmet 
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keywords },
          ]}
          // link={[
          // { rel: 'shortcut icon', type: 'image/png', sizes:'16x16', href: `${FavLG16}` },
          // { rel: 'shortcut icon', type: 'image/png', sizes:'32x32', href: `${FavLG32}` },
          // { rel: 'shortcut icon', type: 'image/png', sizes:'64x64', href: `${FavLG64}` },
          //   ]}
         />
         <div className="mainContainer">
            <Nav />
            {children}
            <Contact />
            <Footer />
         </div>
       </>
     )}
   />
)
