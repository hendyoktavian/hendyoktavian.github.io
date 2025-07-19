fetch("/content/experience.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.querySelector("#dynamic-experience");
    data.forEach((item) => {
      const el = document.createElement("div");
      el.className = "flex items-start mt-4 lg:mt-6"; // contoh Tailwind
      el.innerHTML = `
        <div class="mr-4 lg:mr-5 w-20">
          <img src="${item.logo}" alt="${item.company} logo" />
        </div>
        <div class="w-full">
          <h2 class="font-semibold text-xs md:text-sm lg:text-base inline-block bg-gradient-to-r from-[#1F1E5C] to-[#982C3E] bg-clip-text text-transparent">${item.role} • ${item.company}</h2>
          <h2 class="font-semibold text-xs md:text-sm lg:text-base text-dark">${item.date}</h2>
          <ul class="list-disc text-[10px] md:text-xs lg:text-sm font-normal text-dark mt-2 ml-4 text-justify">
            ${item.description.map((d) => `<li class="mt-2">${d}</li>`).join("")}
          </ul>
        </div>
      `;
      container.appendChild(el);
    });
  });
