async function loadLinks() {
  let json = await fetch("config/links.json").then(
    (response) => response.json()
  );
  const documentElement = document.querySelector('body > div.gate.ch.gate-friends > div > div > div:nth-child(1)');

  for (let index = 0; index < json.length; index++) {
    const name = json[index].name;
    const desc = json[index].desc;
    const href = json[index].href;
    const avatar = json[index].avatar;

    const popContent = `<a href="${href}" target="_blank">
      <div class="item">
        <div class="avatar">
          <img src="${avatar}">
        </div>
        <div class="inner">
          <h5>${name}</h5>
          <p>${desc}</p>
        </div>
      </div>
    </a>`;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = popContent;

    documentElement.appendChild(tempDiv.firstElementChild);
  }
}

async function loadFindme() {
  let json = await fetch("/config/findme.json").then(
    (res) => res.json()
  )
  const documentElement = document.querySelector('body > div.main > div.ch.intro > div > div.find-me')
  for (let index = 0; index < json.length; index++) {
    const href = json[index].href;
    const desc = json[index].desc;
    const icon = json[index].icon;
    const popContent = `<a
              class="item"
href="${href}"
              target="_blank"
            >
<i class="${icon}"></i>
<span>${desc}</span>
            </a>`;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = popContent;

    documentElement.appendChild(tempDiv.firstElementChild);

  }
}

loadLinks()
loadFindme()
