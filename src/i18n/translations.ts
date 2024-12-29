interface Translations {
  [key: string]: {
    nav: {
      work: string;
      services: string;
      contact: string;
    };
    services: {
      title: string;
      items: Array<{
        title: string;
        description: string;
      }>;
    };
    contact: {
      title: string;
      name: string;
      email: string;
      project: string;
      send: string;
    };
  };
}

export const translations: Translations = {
  fr: {
    nav: {
      work: "Portfolio",
      services: "Services",
      contact: "Contact"
    },
    services: {
      title: "Tu sais déjà comment ça marche.",
      items: [
        {
          title: "On jase",
          description: "Premier email, premières idées de tournage, sans même demander une cenne. Fais plaisir."
        },
        {
          title: "On planifie",
          description: "On monte un plan solide ensemble, adapté à ta vision et ton budget."
        },
        {
          title: "On filme, on monte",
          description: "De l'idée à l'écran, on fait vivre ton projet avec créativité et précision."
        }
      ]
    },
    contact: {
      title: "Tu vas adoré, tu le sais déjà 😊",
      name: "Nom",
      email: "Courriel",
      project: "Détails du projet",
      send: "Envoyer"
    }
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      contact: "Contact"
    },
    services: {
      title: "You already know how it works.",
      items: [
        {
          title: "Let's talk",
          description: "First email, first shooting ideas, without even asking for a penny. My pleasure."
        },
        {
          title: "Let's plan",
          description: "We build a solid plan together, adapted to your vision and budget."
        },
        {
          title: "We shoot and edit",
          description: "From idea to screen, we bring your project to life with creativity and precision."
        }
      ]
    },
    contact: {
      title: "You'll love it, you already know 😊",
      name: "Name",
      email: "Email",
      project: "Project Details",
      send: "Send"
    }
  }
};