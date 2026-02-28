const genElement = (tag, className, text = "", children = []) => {
        
        const el = document.createElement(tag);

        if (className) {
            if (Array.isArray(className)) el.classList.add(...className);
            else el.classList.add(className);
        }

        if (text !== "" && text !== null && text !== undefined) {
            el.textContent = text;
        }

        if (children && children.length) {
            children.forEach(child => el.appendChild(child));
        }
        return el;
    };

export const genInput = () => {

    // Label
    const label = genElement(
        "label",
        "sr-only",
        "Search for a location"
    );

    label.setAttribute("for", "location");

    // Input
    const input = genElement("input", "search-input");
    input.id = "location";
    input.type = "search";
    input.name = "q";
    input.placeholder = "Search city or postcode...";
    input.autocomplete = "off";
    input.spellcheck = false;

    // SVG path (must use namespace)
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
        "d",
        "M10 4a6 6 104.472 10.03l3.749 3.748a1 1 001.414-1.414l-3.748-3.749A6 6 0010 4zm0 2a4 4 110 8 4 4 010-8z"
    );

    // SVG
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("search-icon");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("aria-hidden", "true");
    svg.appendChild(path);

    // Button
    const button = genElement("button", "search-button", "", [svg]);
    button.type = "button";
    button.setAttribute("aria-label", "Search");

    // Form
    const form = genElement(
        "form",
        "search-bar",
        "",
        [label, input, button]
    );

    form.setAttribute("role", "search");
    form.setAttribute("aria-label", "Weather search");

    return form;
};

export const genWeatherCard = (city, temp) => {

  // City heading
  const cityEl = genElement(
    "h2",
    "weather-card__city",
    city
  );

  // Temperature
  const tempEl = genElement(
    "p",
    "weather-card__temp",
    `${temp}°C`
  );

  // Wrapper card
  const card = genElement(
    "div",
    "weather-card",
    "",
    [cityEl, tempEl]
  );

  return card;
};