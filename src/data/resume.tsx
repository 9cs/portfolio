import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Dantton",
  initials: "DL",
  url: "https://dantton.online",
  location: "Salvador, BR",
  locationLink: "https://www.google.com/maps/place/salvador",
  description:
    "Desenvolvimento Fullstack. Sou freelancer nas horas vagas e busco sempre melhorar um pouco a cada dia.",
  summary:
    "Entusiasta de tecnologias e jogos desde de criança, despertei meu interesse pelo desenvolvimento por volta de 2019, ainda com meus 13 anos de idade. Aprendendo apenas o básico de Python, despertei uma grande admiração e vontade de desenvolver. Desde então, venho aprendendo cada vez mais sobre tecnologias, e recentemente começei o meu curso em Engenheria de Software e estou buscando uma vaga de estágio.",
  avatarUrl: "/me.jpg",
  skills: [
    "English",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Sqlite",
    "TailwindCSS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "danttonlavignepin@outlook.com",
    tel: "+5571982172585",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/9cs",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dantton",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:danttonlavignepin@outlook.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Azapfy",
      href: "https://www.azapfy.com.br",
      badges: [],
      location: "Remote",
      title: "Estágio em Desenvolvimento Front-end",
      logoUrl: "/azapfy.jpeg",
      start: "Ago 2024",
      end: "Set 2024",
      description:
        "Criação de interfaces utilizando Material-UI, ShadCN, Zustand, entre outros. Manutenção e migração do sistema.",
    },
  ],
  education: [
    {
      school: "Universidade Católica do Salvador",
      href: "https://www.ucsal.br/",
      degree: "Bacharelado em Engenharia de Software",
      logoUrl: "/ucsal.jpg",
      start: "2025",
      end: "Atual",
    },
    {
      school: "Bom Pastor",
      href: "https://colegiobompastorsalvador.com.br/",
      degree: "Ensino médio completo",
      logoUrl: "/bp.png",
      start: "2021",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Pote Manager",
      href: "https://pmg-es-2024-2-ti2-3740100-gerenciador-financeiro.vercel.app/",
      dates: "Ago 2024 - Atual",
      active: true,
      description:
        "O Pote Manager é um projeto de semestral de faculdade que está sendo desenvolvido por mim e colegas de grupo, onde criamos um gerenciador financeiro com objetivo de facilitar a visão do usuário sobre suas finanças utilizando a tecnologia.",
      technologies: [
        "Next.js",
        "Typescript",
        "Spring Boot",
        "MySQL",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Zustand",
        "Framer",
      ],
      links: [
        {
          type: "Website",
          href: "https://pmg-es-2024-2-ti2-3740100-gerenciador-financeiro.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-2-ti2-3740100-gerenciador-financeiro",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "pote_manager.mp4",
    },
    {
      title: "Revio",
      href: "https://revio.cc",
      dates: "Nov 2024 - Nov 2024",
      active: true,
      description:
        "Landing page de um serviço de desbanimento de contas do Instagram feito para um cliente.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Aceternity UI",
        "Framer",
      ],
      links: [
        {
          type: "Website",
          href: "https://revio.cc",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/revio.png",
      video: "",
    },
    {
      title: "Dreamgirl Agency",
      href: "https://onlyfans-agency.vercel.app",
      dates: "Nov 2024 - Nov 2024",
      active: true,
      description:
        "Site feito para um cliente, cujo o tema era uma agência de modelos.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Aceternity UI",
        "Framer",
      ],
      links: [
        {
          type: "Website",
          href: "https://onlyfans-agency.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/dreamgirl.png",
      video: "",
    },
  ],
} as const;
