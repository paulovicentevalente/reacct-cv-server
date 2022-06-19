import photo from "./components/images/DSC_8193-modified.png";
import GitHubIcon from '@mui/icons-material/GitHub';
const htmlTextsEnglish = [
    // rules
    //id: sequential integer number
    //compnnent: name of the React component
    //item: concept name of an item
    //totalItem: total number of items
    //numberItem: sequential item number id
    //typeItem: subtype of an item
    //content: text to be presented - string - first position is number of text strings
    // idiom: idiom that content is created
    
    {
        id: 1,
        component: "Navbar",
        item: "name",
        totalItem: 1,
        numberItem: 0,
        typeItem: "myName",
        content: [1, (<a className="navbar-brand" href="">Paulo Vicente Valente</a>)],
        idiom: "any"
    },
    {
        id: 2,
        component: "Navbar",
        item: "experience",
        totalItem: 1,
        numberItem: 0,
        typeItem: "titleMenu",
        content: [1, (<a className="nav-link" href="#experience">Experience</a>)],
        idiom: "english"
    },
    {
        id: 3,
        component: "Navbar",
        item: "skills",
        totalItem: 1,
        numberItem: 0,
        typeItem: "titleMenu",
        content: [1, (<a className="nav-link" href="#skills">Skills</a>)],
        idiom: "english"
    },
    {
        id: 4,
        component: "Navbar",
        item: "contact",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Linkedin" href="https://www.linkedin.com/in/paulovicentevalente/" target="_blank"><i className="brands fa-brands fa-linkedin"></i></a>)],
        idiom: "english"
    },
    {
        id: 5,
        component: "Navbar",
        item: "subscribe",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Mailchimp" href="http://eepurl.com/hWW8GL" target="_blank"><i className="brands fa-solid fa-envelope"></i></a>)],
        idiom: "english"
    },
    {
        id: 6,
        component: "Navbar",
        item: "idiomMenu",
        totalItem: 1,
        numberItem: 0,
        typeItem: "portugues",
        content: [1, (<a className="nav-link" href="#">pt-br</a>)],
        idiom: "english"
    },
    {
        id: 7,
        component: "Title",
        item: "photo",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myPhoto",
        content: [1, (<p><img className="title-image" src={photo} alt="photo-paulo"></img></p>)],
        idiom: "any"
    },
    {
        id: 8,
        component: "Title",
        item: "message",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myMessage",
        content: [1, (<h1 className="big-heading">Throughout my career, I contributed to the launch of several technological products that significantly improved and transformed the client experience.</h1>)],
        idiom: "english"
    },
    {
        id: 9,
        component: "Title",
        item: "e-mail",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myE-mail",
        content: [1, (<p className="email">e-mail: paulo@paulovalente.net</p>)],
        idiom: "any"
    },
    {
        id: 10,
        component: "Experience",
        item: "title",
        totalItem: 1,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h2>Experience</h2>)],
        idiom: "english"
    },
    {
        id: 11,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Atento</p>)],
        idiom: "english"
    },
    {
        id: 12,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2021</p>)],
        idiom: "english"
    },
    {
        id: 13,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Head of Product Management</p>)],
        idiom: "english"
    },
    {
        id: 14,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Management of product and operational labs teams at Contact Center business. Defined lab operation based on <em>business metrics</em> which selected initiatives that <em>improved customer results</em>.</p>)],
        idiom: "english"
    },
    {
        id: 15,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Vivo</p>)],
        idiom: "english"
    },
    {
        id: 16,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2003 to 2019</p>)],
        idiom: "english"
    },
    {
        id: 17,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [4, (<p className="experience-text">Product Development Manager</p>),
        (<p className="experience-text sub-position">Division Manager</p>),
        (<p className="experience-text sub-position">Device Technical Specifications Manager</p>),
        (<p className = "sub-position">Product Development Consultant</p>)],
        idiom: "english"
    },
    {
        id: 18,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescription",
        content: [1, (<p className="experience-text">Manager of <em>Product Development team</em> (engineers/ computer science):</p>), (<p className="experience-text">Leader of team responsible for technology and products: <em>new services and products with customer-centric approach</em>, innovation, product backlog, <em>design trade-offs analysis, launch risk analysis</em>, enhancement (usability and blueprint), <em>lifecycle, tech roadmap, RFPs, contract management, partnership maintenance</em>, bill of materials, training development (customer care and sales force), regulatory trends, families: <em>smartphone/ <a href='https://globoplay.globo.com/v/4880435/' target='_blank'>modem</a>/ CPE/ smartcard/ IoT/ M2M</em>, country representative at the following <em>International forums</em>: PTCRB, CDG and Telefónica Devices.</p>),(<p className="experience-text">Led <em>Go-to-MKT (multidisciplinary) team</em>:</p>),(<p>BTL (Below the line): product and technnology communication(briefing) and internal press office support: crisis and press release.</p>)],
        idiom: "english"
    },
    {
        id: 19,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">UFF</p>)],
        idiom: "english"
    },
    {
        id: 20,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2008 to 2011</p>)],
        idiom: "english"
    },
    {
        id: 21,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Invited Professor</p>)],
        idiom: "english"
    },
    {
        id: 22,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Engineering MBA and <a href="http://www.telecomuff.com/uploads/6/9/4/8/6948141/especializac%CC%A7a%CC%83o_em_comunicac%CC%A7o%CC%83es_mo%CC%81veis_-_projeto_rj_.pdf" target="_blank">Post Graduation</a> <em>Invited Professor</em>. Provided classes on WLAN, Mobile Devices, Core Network, CDMA2000.</p>)],
        idiom: "english"
    },
    {
        id: 23,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular</p>)],
        idiom: "english"
    },
    {
        id: 24,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2002 to 2003</p>)],
        idiom: "english"
    },
    {
        id: 25,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Solutions Manager</p>)],
        idiom: "english"
    },
    {
        id: 26,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Increase <em>service retention</em> due to the development of <em>customized solutions</em> for corporate clients. <em>Remote management experience</em> with team in four states of Brazil, <em>inventory management</em>, <em>client-oriented</em> approach.</p>)],
        idiom: "english"
    },
    {
        id: 27,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefónica Móviles de España</p>)],
        idiom: "english"
    },
    {
        id: 28,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2002</p>)],
        idiom: "english"
    },
    {
        id: 29,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Solutions Specialist</p>)],
        idiom: "english"
    },
    {
        id: 30,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p><em>International professional experience</em> in Madrid. Consultant to <em>prepaid services</em> deployment at Guatemala and El Salvador.</p>)],
        idiom: "english"
    },
    {
        id: 31,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular</p>)],
        idiom: "english"
    },
    {
        id: 32,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2000 to 2002</p>)],
        idiom: "english"
    },
    {
        id: 33,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Telecommunications Specialist</p>)],
        idiom: "english"
    },
    {
        id: 34,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Responsible for: highly complex infrastructure <em>engineering project deployment, implementation and integration</em> in mobile network; equipment purchase coordination(<em>RFPs</em>).</p>)],
        idiom: "english"
    },
    {
        id: 35,
        component: "Skills",
        item: "title",
        totalItem: 1,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h2>Skills</h2>)],
        idiom: "english"
    },
    {
        id: 36,
        component:"Skills",
        item: "Languages",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Languages</h4>)],
        idiom: "english"
    },
    {
        id: 37,
        component:"Skills",
        item: "Languages",
        totalItem: 2,
        numberItem: 1,
        typeItem:"nameLanguage",
        content: [4, (<p>English - fluent</p>), (<p>Spanish - fluent</p>), (<p>German - intermediate</p>), (<p>Portuguese - native</p>)],
        idiom: "english"
    },
    {
        id: 38,
        component:"Skills",
        item: "Main",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Main</h4>)],
        idiom: "english"
    },
    {
        id: 39,
        component:"Skills",
        item: "Main",
        totalItem: 2,
        numberItem: 1,
        typeItem:"mainItems",
        content: [4, (<p><a href="https://mitsloan.credential.getsmarter.com/6b5c48de-90e3-4c3c-8816-79f7c3913ba2#gs.r8cb6z"  target="_blank">MIT AI Business Application</a></p>), (<p><a href="https://bibliotecadigital.fgv.br/dspace/bitstream/handle/10438/350/2142.pdf?sequence=1"  target="_blank">FGV Master Economy</a></p>), (<p>FGV MBA Telecom Management</p>), (<p>UFF Bachelor Telecom Engineering</p>)],
        idiom: "english"
    },
    {
        id: 40,
        component:"Skills",
        item: "Telecom",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Telecom</h4>)],
        idiom: "english"
    },
    {
        id: 41,
        component:"Skills",
        item: "Telecom",
        totalItem: 2,
        numberItem: 1,
        typeItem:"telecomItems",
        content: [4, (<p>Mobile generations (5G/ 4G/ 3G/ 2G)</p>), (<p>Smartcards (Telecom, e-SIM)</p>), (<p>3GPP specifications</p>), (<p>Network protocols (IP, CAMEL)</p>)],
        idiom: "english"
    },
    {
        id: 42,
        component:"Skills",
        item: "More",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>More</h4>)],
        idiom: "english"
    },
    {
        id: 43,
        component:"Skills",
        item: "More",
        totalItem: 2,
        numberItem: 1,
        typeItem:"moreItems",
        content: [4, (<p><a href="https://patents.justia.com/patent/8850463" target="_blank">Patent Portable Devices with Digital TV</a></p>), (<p><a href="https://github.com/paulovicentevalente" target="_blank">Programming Languages<GitHubIcon color="primary" fontSize="medium"/></a></p>), (<p>International Scholarship Germany</p>), (<p><a href="https://www.interaction-design.org/paulo-vicente-dutra-da-silva-santos-valente" target="_blank">Service & Product Design</a></p>)],
        idiom: "english"
    },
    {
        id: 44,
        component: "Navbar",
        item: "experience",
        totalItem: 1,
        numberItem: 0,
        typeItem: "titleMenu",
        content: [1, (<a className="nav-link" href="#experience">Experiência</a>)],
        idiom: "portugues"
    },
    {
        id: 45,
        component: "Navbar",
        item: "skills",
        totalItem: 1,
        numberItem: 0,
        typeItem: "titleMenu",
        content: [1, (<a className="nav-link" href="#skills">Habilidades</a>)],
        idiom: "portugues"
    },
    {
        id: 46,
        component: "Navbar",
        item: "contact",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Linkedin" href="https://www.linkedin.com/in/paulovicentevalente/?locale=pt_BR" target="_blank"><i className="brands fa-brands fa-linkedin"></i></a>)],
        idiom: "portugues"
    },
    {
        id: 47,
        component: "Navbar",
        item: "subscribe",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Mailchimp2" href="http://eepurl.com/hWW8GL" target="_blank"><i className="brands fa-solid fa-envelope"></i></a>)],
        idiom: "portugues"
    },
    {
        id: 48,
        component: "Navbar",
        item: "idiomMenu",
        totalItem: 1,
        numberItem: 0,
        typeItem: "english",
        content: [1, (<a className="nav-link" href="#">en</a>)],
        idiom: "portugues"
    },
    {
        id: 49,
        component: "Title",
        item: "message",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myMessage",
        content: [1, (<h1 className="big-heading">Na minha carreira, contribuí para o lançamento de diversos produtos tecnológicos que melhoraram e transformaram significativamente a experiência do cliente.</h1>)],
        idiom: "portugues"
    },




];

export default htmlTextsEnglish;