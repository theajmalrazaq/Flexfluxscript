if (window.location.href.includes("Login")) {
  // Set justify-content to center for specific grid items
  document
    .querySelectorAll(
      ".m-grid.m-grid--hor:not(.m-grid--desktop):not(.m-grid--desktop-and-tablet):not(.m-grid--tablet):not(.m-grid--tablet-and-mobile):not(.m-grid--mobile) > .m-grid__item.m-grid__item--fluid"
    )
    .forEach((element) => {
      element.style.justifyContent = "center";
    });
  document
    .querySelectorAll(
      ".m-grid.m-grid--ver-desktop.m-grid--desktop > .m-grid__item.m-grid__item--fluid"
    )
    .forEach((element) => {
      element.style.display = "none";
    });

  // Set display to none for row m-login__form-sub
  document.querySelectorAll(".m-login__form-sub").forEach((element) => {
    element.style.display = "none";
  });

  // Set display to flex, align-items to center, and flex-direction to column for m-login__wrapper
  document.querySelectorAll(".m-login__wrapper").forEach((element) => {
    element.style.display = "flex";
    element.style.alignItems = "center";
    element.style.flexDirection = "column";
  });

  // Set gap for input-group and style input-group-addon
  document
    .querySelectorAll(".input-group.m-input-group.m-input-group--square")
    .forEach((element) => {
      element.style.gap = "5px";
    });

  document.querySelectorAll(".input-group-addon").forEach((element) => {
    element.style.borderRadius = "8px";
    element.style.backgroundColor = "transparent";
    element.style.border = "2px solid #1d1d1d";
  });

  // Set styles for form-control.m-input
  document.querySelectorAll(".form-control.m-input").forEach((element) => {
    element.style.borderRadius = "8px";
    element.style.backgroundColor = "transparent";
    element.style.border = "2px solid #1d1d1d";
  });

  // Set background color to black and text color to white for .m-login.m-login--1
  document.querySelectorAll(".m-login.m-login--1").forEach((element) => {
    element.style.backgroundColor = "black";
    element.style.color = "white";
  });

  // Find the element with the .img-responsive class
  const imgElement = document.querySelector(".img-responsive");

  // Replace it with the SVG content if it exists
  if (imgElement) {
    imgElement.outerHTML = `<svg width="255" height="130" viewBox="0 0 1467 1129" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1467" height="512" fill="#FF2600"/>
<path d="M445.445 200.891H323.961V251.867H423.961V321.789H323.961V438.391H241.344V122.375H445.445V200.891ZM564.781 359.484H685.289V438H481.188V123.156H564.781V359.484ZM925.133 200.891H803.648V244.836H903.648V314.562H803.648V359.68H925.133V438H721.031V123.156H925.133V200.891ZM948.57 438L1048.38 274.523L953.844 123.156H1049.55L1097.79 206.359L1145.84 123.156H1241.54L1146.62 274.328L1246.81 438H1150.52L1097.59 345.031L1044.86 438H948.57Z" fill="white"/>
<path d="M446.445 666.891H324.961V717.867H424.961V787.789H324.961V904.391H242.344V588.375H446.445V666.891ZM565.781 825.484H686.289V904H482.188V589.156H565.781V825.484ZM849.961 912.789C777.891 912.789 719.297 861.812 719.297 789.547V589.156H803.477V789.352C803.477 815.523 825.938 832.906 849.766 832.906C873.398 832.906 896.445 815.133 896.445 789.352V589.156H980.625V789.547C980.625 861.812 922.031 912.789 849.961 912.789ZM1009.34 904L1109.14 740.523L1014.61 589.156H1110.31L1158.55 672.359L1206.6 589.156H1302.3L1207.38 740.328L1307.58 904H1211.29L1158.36 811.031L1105.62 904H1009.34Z" fill="white"/>
<path d="M393.102 1065.65C401.144 1065.65 410.208 1073.03 410.208 1084.18C410.208 1095.16 401.899 1106 387.681 1106H360.887V1034.37H380.438C392.791 1034.37 401.144 1043.26 401.144 1052.77C401.144 1060.5 395.768 1065.65 393.102 1065.65ZM381.104 1045.3H372.084V1063.17L380.971 1063.12C386.525 1063.17 390.613 1059.34 390.613 1054.23C390.613 1049.12 386.17 1045.3 381.104 1045.3ZM386.659 1095.02C393.102 1095.02 399.233 1090.36 399.233 1083.43C399.233 1078.01 394.612 1073.03 386.481 1073.03L372.084 1073.07V1095.02H386.659ZM474.17 1106V1075.39L450.398 1034.37H463.061L479.724 1062.9L496.431 1034.37H509.095L485.323 1075.39V1106H474.17Z" fill="white"/>
<path d="M689.715 1106H675.897L656.612 1078.27H647.814V1106H636.573L636.528 1034.37H658.79C672.12 1034.37 683.05 1044.64 683.05 1057.39C683.05 1066.63 677.096 1074.67 668.876 1077.34L689.715 1106ZM647.77 1068.94H659.056C665.81 1068.99 671.453 1063.52 671.453 1057.12C671.453 1050.46 665.721 1045.53 659.056 1045.53H647.77V1068.94ZM777.271 1107.16C756.92 1107.16 740.302 1090.54 740.302 1070.28C740.302 1049.84 756.92 1033.13 777.315 1033.13C797.666 1033.13 814.373 1049.84 814.373 1070.28C814.373 1090.54 797.666 1107.16 777.271 1107.16ZM777.271 1095.78C791.401 1095.78 802.998 1084.27 802.998 1070.19C802.998 1056.01 791.401 1044.46 777.271 1044.46C763.141 1044.46 751.633 1056.01 751.633 1070.19C751.633 1084.27 763.141 1095.78 777.271 1095.78ZM903.306 1065.65C911.348 1065.65 920.413 1073.03 920.413 1084.18C920.413 1095.16 912.104 1106 897.885 1106H871.091V1034.37H890.642C902.995 1034.37 911.348 1043.26 911.348 1052.77C911.348 1060.5 905.972 1065.65 903.306 1065.65ZM891.309 1045.3H882.289V1063.17L891.175 1063.12C896.73 1063.17 900.818 1059.34 900.818 1054.23C900.818 1049.12 896.374 1045.3 891.309 1045.3ZM896.863 1095.02C903.306 1095.02 909.438 1090.36 909.438 1083.43C909.438 1078.01 904.817 1073.03 896.685 1073.03L882.289 1073.07V1095.02H896.863ZM975.798 1106V1034.37H987.04V1106H975.798ZM1093.57 1034.2H1104.85V1107.24H1104.32L1058.51 1059.39V1106.09H1047.27V1033.13H1047.85L1093.57 1080.9V1034.2Z" fill="#FF2600"/>
</svg>
`;
  }
  document.querySelectorAll(".btn-primary").forEach((button) => {
    button.style.backgroundColor = "#FF2600";
    button.style.borderColor = "#FF2600";
  });
  document.querySelector(".la-sign-in").style.display = "none";
  document.body.style.height = "95vh";
  document.body.style.overflow = "hidden";
  // Create a <link> element
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap";
  link.rel = "stylesheet";

  // Append it to the <head> of the document
  document.head.appendChild(link);

  // Apply the font dynamically
  link.onload = () => {
    document.body.style.fontFamily = "'Jost', sans-serif";
    document.querySelectorAll("input").forEach((input) => {
      input.style.fontFamily = "'Jost', sans-serif";
    });
    document.querySelectorAll("button").forEach((button) => {
      button.style.fontFamily = "'Jost', sans-serif";
    });
    console.log("Font applied successfully!");
  };
  document.querySelectorAll("button").forEach((button) => {
    button.style.boxShadow = "none";
  });
  let captchaIframe = document.querySelector('iframe[title="reCAPTCHA"]');
  let iframeSrc = captchaIframe.src;
  if (!iframeSrc.includes("theme=dark")) {
    if (iframeSrc.includes("theme=light")) {
      iframeSrc = iframeSrc.replace("theme=light", "theme=dark");
    } else {
      iframeSrc += "&theme=dark";
    }
    captchaIframe.src = iframeSrc;
  }
}
////////////////////////////////////////////////////
////////////////////////////////////////////////////
//Home Page
///////////////////////////////////////////////////
///////////////////////////////////////////////////
else {
  document.querySelectorAll("header").forEach((element) => {
    element.style.display = "none";
  });
  document
    .querySelectorAll(".m-aside-left.m-aside-left--skin-dark")
    .forEach((element) => {
      element.style.display = "none";
    });
  document
    .querySelectorAll(".m-aside-left--fixed .m-body")
    .forEach((element) => {
      element.style.padding = "0px";
    });
  document.body.style.backgroundColor = "black";
  document
    .querySelectorAll(
      ".m-grid__item.m-grid__item--fluid.m-grid.m-grid--ver-desktop.m-grid--desktop.m-body"
    )
    .forEach((element) => {
      element.style.background = "#000000";
    });
  let logo = document.createElement("div");
  logo.innerHTML = `<svg width="200" height="50" viewBox="0 0 2604 636" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="41" width="1467" height="512" fill="#FF2600"/>
<path d="M445.445 241.891H323.961V292.867H423.961V362.789H323.961V479.391H241.344V163.375H445.445V241.891ZM564.781 400.484H685.289V479H481.188V164.156H564.781V400.484ZM925.133 241.891H803.648V285.836H903.648V355.562H803.648V400.68H925.133V479H721.031V164.156H925.133V241.891ZM948.57 479L1048.38 315.523L953.844 164.156H1049.55L1097.79 247.359L1145.84 164.156H1241.54L1146.62 315.328L1246.81 479H1150.52L1097.59 386.031L1044.86 479H948.57Z" fill="white"/>
<path d="M1738.45 227.891H1616.96V278.867H1716.96V348.789H1616.96V465.391H1534.34V149.375H1738.45V227.891ZM1857.78 386.484H1978.29V465H1774.19V150.156H1857.78V386.484ZM2141.96 473.789C2069.89 473.789 2011.3 422.812 2011.3 350.547V150.156H2095.48V350.352C2095.48 376.523 2117.94 393.906 2141.77 393.906C2165.4 393.906 2188.45 376.133 2188.45 350.352V150.156H2272.62V350.547C2272.62 422.812 2214.03 473.789 2141.96 473.789ZM2301.34 465L2401.14 301.523L2306.61 150.156H2402.31L2450.55 233.359L2498.6 150.156H2594.3L2499.38 301.328L2599.58 465H2503.29L2450.36 372.031L2397.62 465H2301.34Z" fill="white"/>
<path d="M1577.1 59.6543C1585.14 59.6543 1594.21 67.0303 1594.21 78.1831C1594.21 89.1582 1585.9 100 1571.68 100H1544.89V28.373H1564.44C1576.79 28.373 1585.14 37.2598 1585.14 46.7686C1585.14 54.5 1579.77 59.6543 1577.1 59.6543ZM1565.1 39.3037H1556.08V57.166L1564.97 57.1216C1570.53 57.166 1574.61 53.3447 1574.61 48.2349C1574.61 43.125 1570.17 39.3037 1565.1 39.3037ZM1570.66 89.0249C1577.1 89.0249 1583.23 84.3594 1583.23 77.4277C1583.23 72.0068 1578.61 67.0303 1570.48 67.0303L1556.08 67.0747V89.0249H1570.66ZM1658.17 100V69.3853L1634.4 28.373H1647.06L1663.72 56.8994L1680.43 28.373H1693.09L1669.32 69.3853V100H1658.17Z" fill="white"/>
<path d="M1873.72 100H1859.9L1840.61 72.2734H1831.81V100H1820.57L1820.53 28.373H1842.79C1856.12 28.373 1867.05 38.6372 1867.05 51.3896C1867.05 60.6318 1861.1 68.6743 1852.88 71.3403L1873.72 100ZM1831.77 62.9424H1843.06C1849.81 62.9868 1855.45 57.5215 1855.45 51.123C1855.45 44.458 1849.72 39.5259 1843.06 39.5259H1831.77V62.9424ZM1961.27 101.155C1940.92 101.155 1924.3 84.5371 1924.3 64.2754C1924.3 43.8359 1940.92 27.1289 1961.32 27.1289C1981.67 27.1289 1998.37 43.8359 1998.37 64.2754C1998.37 84.5371 1981.67 101.155 1961.27 101.155ZM1961.27 89.7803C1975.4 89.7803 1987 78.272 1987 64.1865C1987 50.0122 1975.4 38.4595 1961.27 38.4595C1947.14 38.4595 1935.63 50.0122 1935.63 64.1865C1935.63 78.272 1947.14 89.7803 1961.27 89.7803ZM2087.31 59.6543C2095.35 59.6543 2104.41 67.0303 2104.41 78.1831C2104.41 89.1582 2096.1 100 2081.88 100H2055.09V28.373H2074.64C2086.99 28.373 2095.35 37.2598 2095.35 46.7686C2095.35 54.5 2089.97 59.6543 2087.31 59.6543ZM2075.31 39.3037H2066.29V57.166L2075.18 57.1216C2080.73 57.166 2084.82 53.3447 2084.82 48.2349C2084.82 43.125 2080.37 39.3037 2075.31 39.3037ZM2080.86 89.0249C2087.31 89.0249 2093.44 84.3594 2093.44 77.4277C2093.44 72.0068 2088.82 67.0303 2080.69 67.0303L2066.29 67.0747V89.0249H2080.86ZM2159.8 100V28.373H2171.04V100H2159.8ZM2277.57 28.1953H2288.85V101.244H2288.32L2242.51 53.3892V100.089H2231.27V27.1289H2231.85L2277.57 74.895V28.1953Z" fill="#FF2600"/>
</svg>
`;
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  let userdiv = document.createElement("div");
  userdiv.style.display = "flex";
  userdiv.style.flexDirection = "column";
  userdiv.style.justifyContent = "start";
  userdiv.style.alignItems = "start";
  userdiv.style.backgroundColor = "#212121";
  userdiv.style.padding = "30px";
  userdiv.style.borderRadius = "8px";
  let userimg = document.createElement("img");
  userimg.src = "/login/getimage";
  userdiv.style.marginTop = "20px";
  userimg.style.borderRadius = "100%";
  userimg.style.width = "100px";
  let username = document
    .querySelectorAll(".m-portlet__body")[2]
    .querySelector(".row .col-md-4 p span:nth-child(2)").textContent;
  let rollno = document
    .querySelectorAll(".m-portlet__body")[0]
    .querySelector(".row .col-md-4 p span:nth-child(2)").textContent;
  userdiv.appendChild(userimg);
  let userrollno = document.createElement("p");
  userrollno.style.color = "white";
  userrollno.style.fontWeight = "700";
  userrollno.innerHTML = `Roll No: ${rollno}`;

  let userwelcome = document.createElement("h1");
  userwelcome.style.color = "white";
  userwelcome.style.fontSize = "20px";
  userwelcome.style.marginTop = "10px";
  userwelcome.innerHTML = `<span style='color:#FF2600;'>Welcome </span> ${username} 😎`;
  userdiv.append(userwelcome);
  userdiv.append(userrollno);
  document.querySelector(".m-subheader").style.display = "none";
  // Apply the font dynamically
  link.onload = () => {
    document.body.style.fontFamily = "'Jost', sans-serif";
    document.querySelectorAll("input").forEach((input) => {
      input.style.fontFamily = "'Jost', sans-serif";
    });
    document.querySelectorAll("button").forEach((button) => {
      button.style.fontFamily = "'Jost', sans-serif";
    });
    console.log("Font applied successfully!");
  };
  let maindiv = document.createElement("div");
  maindiv.style.display = "flex";
  maindiv.style.justifyContent = "space-between";
  maindiv.style.marginTop = "20px";
  document.body.style.marginRight = "70px";
  document.body.style.marginLeft = "70px";
  maindiv.style.alignItems = "center";

  let ul = document.createElement("ul");
  let linkarr = [];
  document.querySelectorAll(".m-menu__link").forEach((element, index) => {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.href = element.href;
    linkarr[index] = element.href;
    let i = element.querySelector("i");
    link.innerHTML = i.outerHTML;

    link.style.color = "white";
    link.style.textDecoration = "none";
    li.style.padding = "10px";
    li.appendChild(link);
    ul.appendChild(li);
  });
  let attendencediv = document.createElement("div");
  fetch(linkarr[2])
    .then((response) => response.text()) // Get the response as text (HTML)
    .then((htmlContent) => {
      // Create a temporary DOM element to parse the fetched HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;

      // Query the desired div by its class
      const targetDiv = tempDiv.querySelector(
        ".m-portlet.m-portlet--tabs.m-portlet--brand.m-portlet--border-bottom-brand.m-portlet--head-solid-bg.m-portlet--head-sm"
      );

      // If the target div exists, update your main div
      if (targetDiv) {
        attendencediv.innerHTML = targetDiv.outerHTML; // Get the HTML of the target div
      } else {
        console.error("Target div not found in the response");
      }
    })
    .catch((error) => {
      console.error("Error fetching HTML content:", error);
    });
  document.body.appendChild(attendencediv);
  ul.style.listStyleType = "none";
  ul.style.paddingInlineStart = "0px";
  ul.style.borderRadius = "8px";
  ul.style.display = "flex";
  ul.style.justifyContent = "center";
  ul.style.alignItems = "center";
  ul.style.backgroundColor = "black";

  maindiv.appendChild(logo);
  maindiv.appendChild(ul);
  document.body.insertBefore(maindiv, document.body.firstChild);
  document.body.insertBefore(userdiv, document.body.children[1]);
}
