const app = () => {
  function enventToggle(ae: HTMLAnchorElement) {
    GM_xmlhttpRequest({
      method: 'GET',
      url: ae.href,
      onload: function (response) {
        const document = response.responseText
        const regExp = /<title>(.*)<\/title>/
        const ed = regExp.exec(document)
        if (ed && ed.length >= 1) {
          ae.textContent = ed[1]
          ae.setAttribute('cd', '1')
        }
      },
    })
  }
  function showTitle() {
    const elementLink = document.querySelectorAll(
      '.access_page a, .visit_page_title a',
    ) as NodeListOf<HTMLAnchorElement>
    if (!elementLink || elementLink.length === 0) {
      return
    }
    elementLink.forEach((e) => {
      if (e.getAttribute('cd') === '1') {
        return
      }
      const ce = e.cloneNode(true) as HTMLAnchorElement
      e.replaceWith(ce)
      ce.addEventListener('mouseenter', enventToggle.bind(null, ce), { once: true })
    })
  }

  setTimeout(() => {
    showTitle()
  }, 3000)

  setInterval(() => {
    showTitle()
  }, 12000)
}

export default app
