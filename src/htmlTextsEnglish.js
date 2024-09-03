import React from "react";
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
        content: [1, (<a className="navbar-brand" href="http://www.paulovalente.net/">Paulo Vicente Valente</a>)],
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
        content: [1, (<a className="nav-link" aria-label="Linkedin" href="https://www.linkedin.com/in/paulovicentevalente/" target="_blank" rel="noreferrer"><i className="brands fa-brands fa-linkedin"></i></a>)],
        idiom: "english"
    },
    {
        id: 5,
        component: "Navbar",
        item: "subscribe",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Mailchimp" href="http://eepurl.com/hWW8GL" target="_blank" rel="noreferrer"><i className="brands fa-solid fa-envelope"></i></a>)],
        idiom: "english"
    },
    {
        id: 6,
        component: "Navbar",
        item: "idiomMenu",
        totalItem: 1,
        numberItem: 0,
        typeItem: "portugues",
        content: [1, (<a className="nav-link" href="#portugues">pt-br</a>)],
        idiom: "english"
    },
    {
        id: 7,
        component: "Title",
        item: "photo",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myPhoto",
        content: [1, (<p><img className="title-image" src={photo} alt="paulo"></img></p>)],
        idiom: "any"
    },
    {
        id: 8,
        component: "Title",
        item: "message",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myMessage",
        content: [1, (<h1 className="big-heading">I exercise leadership, developing and motivating teams. Define purposes, and communicate them, is the fastest way to the success of any project. I believe measurable objectives and good ideas are the path to consistent deliveries.</h1>)],
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
        idiom: "english"
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
        content: [1, (<p className="experience-text"><a href="https://atento.com/pb/" target="_blank" rel="noreferrer">Atento</a></p>)],
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
        content: [1, (<p>Senior Product Management Leader (4 people)</p>)],
        idiom: "english"
    },
    {
        id: 14,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Provides Business Transformation Outsourcing (BTO) (Contact Center · B2B · Financial Services).
•	Lab results achieve a <em>5% revenue increase</em> in the client debt collection process.
•	Revised the customer debt collection process by adding new communication channels like Chat.
•	Managed product management and operational labs teams (4 people) to drive strategy, achieve results, manage project schedule, and ensure comprehensive documentation.
•	Developed lab operations utilizing business metrics to select initiatives enhancing customer outcomes.</p>)],
        idiom: "english"
    },
    {
        id: 15,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.vivo.com.br/" target="_blank" rel="noreferrer">Vivo</a></p>)],
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
        content: [4, (<p className="experience-text">Product & Projects Development Manager (4 people)</p>),
        (<p className="experience-text sub-position">Division Manager (8 people)</p>),
        (<p className="experience-text sub-position">Mobile Device and SIMCard Technical Specifications Manager (3 people)</p>),
        (<p className = "sub-position">Technical Product Consultant</p>)],
        idiom: "english"
    },
    {
        id: 18,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescription",
        content: [1, (<p className="experience-text">
        Connect and provide services that make people closer (B2C · B2B · Digital Transformation · Technical Program Management · Software Engineering).
•	Key projects included the adoption and market launch of Smartwatch Product (several teams/US$2mi), eSIM technology, Operational efficiency improvement (75% improvement in lead time), Mobile application preload partnership (best result between Group Product areas), Smartphone lite product reference design (30% cost reduction / Global Team project), and delivered necessary devices portfolio to 4G technology market launch.
•	Led an Engineering / Computer Science Product Development team that oversaw various subjects such as market evaluation, technology strategy, project development, professional services, RFPs, PRDs, contract negotiation, user experience, cost evaluation, technical presentations to senior leadership, software development risk analysis, and sales team training.
•	Led a Go-to-MKT team (multidisciplinary) focused on BTL (Below the line), negotiation of marketing budget, technical blog content, pre-sale campaign resources, and press office support.
•	Negotiated volume-driven budget contract; both manufacturer and reseller would invest in marketing campaigns based on strategy and market acceptance.
•	Led SIM card technology, ensuring secure identity management.
•	Implemented Digital Rights Management (DRM) in products.
•	Implemented Location Based Services in products.
•	Evolved from Technical Product Consultant (2003), Technical Specifications Manager (2006 / 4 people), Division Manager Leader (2012 / 2 teams with 9 people) to Product Development Manager (5 people), driving impactful outcomes to company bets and collaborating with partner teams across the organization and product areas (PAs).</p>)],
        idiom: "english"
    },
    {
        id: 19,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.uff.br/" target="_blank" rel="noreferrer">Universidade Federal Fluminense</a></p>)],
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
        content: [1, (<p>MBA and Post Graduation Invited Professor</p>)],
        idiom: "english"
    },
    {
        id: 22,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Bring knowledge to students (Education).
•	Delivered classes on mobile devices, Wi-Fi and 3G mobile network technology, sharing expertise and insights.</p>)],
        idiom: "english"
    },
    {
        id: 23,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular*</p>)],
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
        content: [1, (<p>Solutions Team Leader (5 people)</p>)],
        idiom: "english"
    },
    {
        id: 26,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Provide technical solutions using mobile connectivity (B2B · Mobile technology · Applied engineering · Technical Leadership).
•	Planned B2B devices portfolio based on market demands.
•	Increase service retention with customized technology solutions for corporate markets, regional leadership, including four states of Brazil, mobile device inventory management, and a client-oriented approach. <font size="1">*Telefônica Celular is one of the companies that formed the current Vivo.</font></p>)],
        idiom: "english"
    },
    {
        id: 27,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.movistar.es/" target="_blank" rel="noreferrer">Telefónica Móviles de España</a></p>)],
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
        content: [1, (<p>Infrastructure robustness and capacity increase (Network infrastructure · IP · Messaging service).
•	International experience in Spain Headquarters: Project and deployment of prepaid networks for Guatemala and El Salvador.</p>)],
        idiom: "english"
    },
    {
        id: 31,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular*</p>)],
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
        content: [1, (<p>Infrastructure robustness and capacity increase (Network infrastructure · IP · Messaging service).
•	Responsible for designing highly complex mobile network infrastructure (Identity and service management database – HLR & Messaging services), managing projects, ideating technical RFP, deploying mobile phone IP network, troubleshooting, and developing new technologies.
<font size="1">*Telefônica Celular is one of the companies that formed the current Vivo.</font></p>)],
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
        content: [4, (<p><a href="https://mitsloan.credential.getsmarter.com/6b5c48de-90e3-4c3c-8816-79f7c3913ba2#gs.r8cb6z"  target="_blank" rel="noreferrer">MIT AI Business Application</a></p>), (<p><a href="https://bibliotecadigital.fgv.br/dspace/bitstream/handle/10438/350/2142.pdf?sequence=1"  target="_blank" rel="noreferrer">FGV Master Economy</a></p>), (<p>FGV MBA Telecom Management</p>), (<p>UFF Bachelor Telecom Engineering</p>)],
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
        content: [4, (<p><a href="https://patents.justia.com/patent/8850463" target="_blank" rel="noreferrer">Patent Portable Devices with Digital TV</a></p>), (<p><a href="https://github.com/paulovicentevalente" target="_blank" rel="noreferrer">Programming Languages<GitHubIcon color="primary" fontSize="medium"/></a></p>), (<p>International Scholarship Germany</p>), (<p><a href="https://www.interaction-design.org/paulo-vicente-dutra-da-silva-santos-valente" target="_blank" rel="noreferrer">Service & Product Design</a></p>)],
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
        content: [1, (<a className="nav-link" aria-label="Linkedin" href="https://www.linkedin.com/in/paulovicentevalente/?locale=pt_BR" target="_blank" rel="noreferrer"><i className="brands fa-brands fa-linkedin"></i></a>)],
        idiom: "portugues"
    },
    {
        id: 47,
        component: "Navbar",
        item: "subscribe",
        totalItem: 1,
        numberItem: 0,
        typeItem: "linkMenu",
        content: [1, (<a className="nav-link" aria-label="Mailchimp" href="http://eepurl.com/hWW8GL" target="_blank" rel="noreferrer"><i className="brands fa-solid fa-envelope"></i></a>)],
        idiom: "portugues"
    },
    {
        id: 48,
        component: "Navbar",
        item: "idiomMenu",
        totalItem: 1,
        numberItem: 0,
        typeItem: "english",
        content: [1, (<a className="nav-link" href="#english">en</a>)],
        idiom: "portugues"
    },
    {
        id: 49,
        component: "Title",
        item: "message",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myMessage",
        content: [1, (<h1 className="big-heading">Exerço a liderança acreditando que é minha responsabilidade desenvolver e motivar equipes, e que definir propósitos, além de comunicá-los, é o caminho mais rápido para o sucesso de qualquer projeto. Acredito que objetivos mensuráveis e boas ideias são o caminho para entregas consistentes.</h1>)],
        idiom: "portugues"
    },
    {
        id: 50,
        component: "Title",
        item: "e-mail",
        totalItem: 1,
        numberItem: 0,
        typeItem:"myE-mail",
        content: [1, (<p className="email">e-mail: paulo@paulovalente.net</p>)],
        idiom: "portugues"
    },
    {
        id: 51,
        component: "Experience",
        item: "title",
        totalItem: 1,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h2>Experiência</h2>)],
        idiom: "portugues"
    },
    {
        id: 52,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://atento.com/pb/" target="_blank" rel="noreferrer">Atento</a></p>)],
        idiom: "portugues"
    },
    {
        id: 53,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2021</p>)],
        idiom: "portugues"
    },
    {
        id: 54,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Gerente Sênior Equipe de Produto (4 pessoas)</p>)],
        idiom: "portugues"
    },
    {
        id: 55,
        component:"Experience",
        item: "Atento",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Fornecer Business Transformation Outsourcing (BTO)
(Central de Atendimento · B2B • Serviços financeiros).
•	Os resultados do laboratório alcançaram um aumento de receita de 5% no processo de cobrança de crédito do cliente.
•	Gerenciamento de produtos e laboratórios operacionais para impulsionar a estratégia de produto, alcançar resultados e desenvolver documentação.
•	Implementadas operações de laboratório utilizando métricas de negócios para selecionar iniciativas que melhoraram os resultados dos clientes.</p>)],
        idiom: "portugues"
    },
    {
        id: 56,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.vivo.com.br/" target="_blank" rel="noreferrer">Vivo</a></p>)],
        idiom: "portugues"
    },
    {
        id: 57,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2003 a 2019</p>)],
        idiom: "portugues"
    },
    {
        id: 58,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [4, (<p className="experience-text">Gerente de Gestão de Produtos (4 pessoas)</p>),
        (<p className="experience-text sub-position">Gerente de Divisão (8 pessoas)</p>),
        (<p className="experience-text sub-position">Gerente de Especificação Técnica de Dispositivos e Simcards (3 pessoas)</p>),
        (<p className = "sub-position">Consultor de Desenvolvimento de Produto</p>)],
        idiom: "portugues"
    },
    {
        id: 59,
        component:"Experience",
        item: "Vivo",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescription",
        content: [1, (<p className="experience-text">Conectar e fornecer serviços que tornem as pessoas mais próximas (B2C • B2B • Transformação Digital · Telecomunicações· Gestão de Identidade Digital).
•	Membro de Comitê Global de Requerimentos para Indústria de Smartphones e outros dispositivos celulares.
•	Alguns principais projetos incluíram a adoção e o lançamento no mercado do produto Smartwatch (Projeto Global), tecnologia eSIM (Projeto Corporativo Internacional trouxe economia por escala), melhoria da eficiência operacional (melhoria de 75% no lead time), parceria de pré-carregamento de aplicativos móveis, design de referência do produto Smartphone Lite (30% de redução de custo) e disponibilização de portfólio completo de produtos celulares para o lançamento da tecnologia 4G.
•	Liderou uma equipe de Desenvolvimento de Produto de Engenharia que supervisionou vários temas, como estratégia de tecnologia, desenvolvimento de projetos, RFPs, negociação de contratos, experiência do usuário, avaliação de custos, apresentações técnicas para a liderança sênior, análise de risco de software e treinamento da equipe de vendas.
•	Liderou uma equipe de Go-to-MKT (multidisciplinar) focada em BTL (Below the line), negociação de orçamento de marketing, conteúdo técnico do blog, recursos de campanha de pré-venda e suporte de assessoria de imprensa.
•	Líder da Tecnologia de cartão SIM Card, garantindo uma gestão de identidade segura.
•	Evoluiu de Consultor para Líder Sênior, demonstrando excepcional capacidade de crescimento e liderança.
</p>)],
        idiom: "portugues"
    },
    {
        id: 60,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.uff.br/" target="_blank" rel="noreferrer">Universidade Federal Fluminense</a></p>)],
        idiom: "portugues"
    },
    {
        id: 61,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2008 a 2011</p>)],
        idiom: "portugues"
    },
    {
        id: 62,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>
Professor convidado de MBA e Pós-Graduação
</p>)],
        idiom: "portugues"
    },
    {
        id: 63,
        component:"Experience",
        item: "UFF",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Educação
•	Proferiu aulas sobre dispositivos móveis e tecnologia móvel 3G, compartilhando conhecimentos e insights.
</p>)],
        idiom: "portugues"
    },
    {
        id: 64,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular*</p>)],
        idiom: "portugues"
    },
    {
        id: 65,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2002 a 2003</p>)],
        idiom: "portugues"
    },
    {
        id: 66,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Gerente de Equipe de Soluções (5 pessoas)</p>)],
        idiom: "portugues"
    },
    {
        id: 67,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Fornecer soluções a clientes usando conectividade móvel (B2B • Tecnologia móvel · Engenharia aplicada).
•	Portfólio de dispositivos celulares para B2B planejado com base nas demandas do mercado.
•	Aumentar a retenção de clientes por meio do desenvolvimento de soluções personalizadas para mercados corporativos, liderança regional, incluindo quatro estados do Brasil, gerenciamento de estoque de dispositivos móveis e uma abordagem orientada ao cliente. <font size="1">*A Telefônica Celular é uma das empresas que formaram a atual Vivo.</font></p>)],
        idiom: "portugues"
    },
    {
        id: 68,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.movistar.es/" target="_blank" rel="noreferrer">Telefónica Móviles de España</a></p>)],
        idiom: "portugues"
    },
    {
        id: 69,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2002</p>)],
        idiom: "portugues"
    },
    {
        id: 70,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Especialista de Serviços</p>)],
        idiom: "portugues"
    },
    {
        id: 71,
        component:"Experience",
        item: "TelefonicaMoviles",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Robustez da infraestrutura e aumento da capacidade (Infraestrutura de rede mõvel celular).
•	Experiência internacional na sede na Espanha: Projeto e implantação de redes pré-pagas para Guatemala e El Salvador.</p>)],
        idiom: "portugues"
    },
    {
        id: 72,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Telefônica Celular*</p>)],
        idiom: "portugues"
    },
    {
        id: 73,
        component: "Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 1,
        typeItem: "date",
        content: [1, (<p className="experience-text">2000 a 2002</p>)],
        idiom: "portugues"
    },
    {
        id: 74,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Especialista de Telecomunicações</p>)],
        idiom: "portugues"
    },
    {
        id: 75,
        component:"Experience",
        item: "TelefonicaCelular",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Robustez da infraestrutura e aumento da capacidade (Infraestrutura de rede · IP · Serviço de mensagens).
•	Responsável por projetar e integrar infraestrutura de rede móvel de alta complexidade, redação técnica de RFP, implantação de equipamentos de rede de telefonia móvel/IP e desenvolvimento de novas tecnologias. <font size="1">*A Telefônica Celular é uma das empresas que formaram a atual Vivo.</font></p>)],
        idiom: "portugues"
    },
    {
        id: 76,
        component: "Skills",
        item: "title",
        totalItem: 1,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h2>Habilidades</h2>)],
        idiom: "portugues"
    },
    {
        id: 77,
        component:"Skills",
        item: "Languages",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Idiomas</h4>)],
        idiom: "portugues"
    },
    {
        id: 78,
        component:"Skills",
        item: "Languages",
        totalItem: 2,
        numberItem: 1,
        typeItem:"nameLanguage",
        content: [4, (<p>Inglês - fluente</p>), (<p>Espanhol - fluente</p>), (<p>Alemão - intermediário</p>), (<p>Português - nativo</p>)],
        idiom: "portugues"
    },
    {
        id: 79,
        component:"Skills",
        item: "Main",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Principal</h4>)],
        idiom: "portugues"
    },
    {
        id: 80,
        component:"Skills",
        item: "Main",
        totalItem: 2,
        numberItem: 1,
        typeItem:"mainItems",
        content: [4, (<p><a href="https://mitsloan.credential.getsmarter.com/6b5c48de-90e3-4c3c-8816-79f7c3913ba2#gs.r8cb6z"  target="_blank" rel="noreferrer">MIT AI Business Application</a></p>), (<p><a href="https://bibliotecadigital.fgv.br/dspace/bitstream/handle/10438/350/2142.pdf?sequence=1"  target="_blank" rel="noreferrer">FGV Mestrado Economia</a></p>), (<p>FGV MBA Gestão Telecom</p>), (<p>UFF Engenharia Telecom</p>)],
        idiom: "portugues"
    },
    {
        id: 81,
        component:"Skills",
        item: "Telecom",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Telecom</h4>)],
        idiom: "portugues"
    },
    {
        id: 82,
        component:"Skills",
        item: "Telecom",
        totalItem: 2,
        numberItem: 1,
        typeItem:"telecomItems",
        content: [4, (<p>Gerações Celulares (5G/ 4G/ 3G/ 2G)</p>), (<p>Smartcards (Telecom, e-SIM)</p>), (<p>Especificações 3GPP</p>), (<p>Protocolos de Rede (IP, CAMEL)</p>)],
        idiom: "portugues"
    },
    {
        id: 83,
        component:"Skills",
        item: "More",
        totalItem: 2,
        numberItem: 0,
        typeItem:"title",
        content: [1, (<h4>Mais</h4>)],
        idiom: "portugues"
    },
    {
        id: 84,
        component:"Skills",
        item: "More",
        totalItem: 2,
        numberItem: 1,
        typeItem:"moreItems",
        content: [4, (<p><a href="https://patents.justia.com/patent/8850463" target="_blank" rel="noreferrer">Patente Celulares com TV Digital</a></p>), (<p><a href="https://github.com/paulovicentevalente" target="_blank" rel="noreferrer">Linguagens Programação<GitHubIcon color="primary" fontSize="medium"/></a></p>), (<p>Bolsa CAPES Alemanha</p>), (<p><a href="https://www.interaction-design.org/paulo-vicente-dutra-da-silva-santos-valente" target="_blank" rel="noreferrer">Design de Serviços e Produtos</a></p>)],
        idiom: "portugues"
    },
    {
        id: 85,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.tim.com.br/" target="_blank" rel="noreferrer">TIM</a></p>)],
        idiom: "portugues"
    },
    {
        id: 86,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2022 até maio 2024</p>)],
        idiom: "portugues"
    },
    {
        id: 87,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Especialista de Produto</p>)],
        idiom: "portugues"
    },
    {
        id: 88,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Ajudar as empresas a alcançarem resultados com tecnologias inovadoras (B2B • Inteligência Artificial · Internet das Coisas).
•	Liderou o desenvolvimento até o lançamento comercial de produto tecnológico (IoT para automação industrial), supervisionando negociações de contrato, treinando equipes executivas e de vendas.
•	Criou estratégia de parcerias para alocação de integradores a diferentes tipos de clientes e demandas.
•	Gerenciou cotidianamente a liderança do design técnico e comercial do produto.
•	Alinhou aspectos estratégicos e comerciais com o desenho técnico das soluções.
•	Facilitou a colaboração entre stakeholders para atingir objetivos e aprimorar a estratégia do produto.
•	Liderou negociações contratuais com parceiros e fornecedores.
</p>)],
        idiom: "portugues"
    },
    {
        id: 89,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://www.tim.com.br/" target="_blank" rel="noreferrer">TIM</a></p>)],
        idiom: "english"
    },
    {
        id: 90,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2022 to may 2024</p>)],
        idiom: "english"
    },
    {
        id: 91,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Product Specialist</p>)],
        idiom: "english"
    },
    {
        id: 92,
        component:"Experience",
        item: "TIM",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Help companies to achieve results with innovative technology (·B2B ·Artificial Intelligence ·Internet of Things).
•	Led the end-to-end development and deployment of a tech (IoT) product, spreading culture, overseeing contract negotiations, sales training, pricing, and successful product launch.
•	Created the partnership strategy to manage multiple IT integrators to support product delivery.
•	Managed technical and design direction daily.
•	Aligned strategy and commercial aspects with the technical design of solutions.
•	Facilitated collaboration among stakeholders to meet strategic goals and enhance product strategy.
•	Led contract negotiations with partners and vendors.
•	Delivered client presentations to drive market adoption and address short-term and long-term roadmap requirements.</p>)],
        idiom: "english"
    },
    {
        id: 93,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://gamersafer.com/" target="_blank" rel="noreferrer">GAMERSAFER</a></p>)],
        idiom: "portugues"
    },
    {
        id: 94,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2020</p>)],
        idiom: "portugues"
    },
    {
        id: 95,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Parceiro de Negócios</p>)],
        idiom: "portugues"
    },
    {
        id: 96,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Tecnologia líder mundial para garantir a segurança em jogos on-line (Jogos on-line).
•	Estabeleceu conexões entre a Gamersafer e o ecossistema das operadoras móveis brasileiras.
•	Promoveu soluções de Esports White Label para a empresa.
•	Conduziu apresentações a clientes para facilitar a adoção no mercado.
</p>)],
        idiom: "portugues"
    },
    {
        id: 97,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text"><a href="https://gamersafer.com/" target="_blank" rel="noreferrer">GAMERSAFER</a></p>)],
        idiom: "english"
    },
    {
        id: 98,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2020</p>)],
        idiom: "english"
    },
    {
        id: 99,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Business Partner</p>)],
        idiom: "english"
    },
    {
        id: 100,
        component:"Experience",
        item: "GAMERSAFER",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>World-leading technology to scale safety and fair play (Gaming).
•	Established connections between Gamersafer and the Brazilian mobile operators ecosystem.
•	Promoted White Label Esports solutions for the company.
•	Conducted client presentations to facilitate market adoption.</p>)],
        idiom: "english"
    },
    {
        id: 101,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Empreendedor</p>)],
        idiom: "portugues"
    },
    {
        id: 102,
        component:"Experience",
        totalItem: 4,
        item: "BierInnovation",
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2019 a 2020</p>)],
        idiom: "portugues"
    },
    {
        id: 103,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Parceria de Consultoria e Serviços de Tecnologia</p>)],
        idiom: "portugues"
    },
    {
        id: 104,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Promover a tecnologia de IA no mercado brasileiro (Inteligência artificial).
•	Por meio de parceria de negócios, ofertou solução de IA focada em departamentos jurídicos trazendo aumento na eficiência operacional por meio de insights.
•	Conduziu-se análises de segmentos de negócios.
•	Desenvolveu-se características e especificações do produto.</p>)],
        idiom: "portugues"
    },
    {
        id: 105,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 0,
        typeItem:"company",
        content: [1, (<p className="experience-text">Entrepeneur</p>)],
        idiom: "english"
    },
    {
        id: 106,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 1,
        typeItem:"date",
        content: [1, (<p className="experience-text">2019 to 2020</p>)],
        idiom: "english"
    },
    {
        id: 107,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 2,
        typeItem:"jobName",
        content: [1, (<p>Business Development Partner</p>)],
        idiom: "english"
    },
    {
        id: 108,
        component:"Experience",
        item: "BierInnovation",
        totalItem: 4,
        numberItem: 3,
        typeItem:"jobDescripton",
        content: [1, (<p>Promote AI technology in the Brazilian market (Artificial Intelligence).
•	Through business partnership, an AI solution focused on legal departments offered increased operational efficiency.
•	Conducted business segment analysis, including mapping of the Brazilian legal landscape.
•	Outlined product features and specifications.</p>)],
        idiom: "english"
    },

];

export default htmlTextsEnglish;
