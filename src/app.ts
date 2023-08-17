const app = () => {
  console.log('monkey jumping on the tongji')
  setTimeout(() => {
    const elementLink = document.querySelectorAll('.access_page a') as NodeListOf<HTMLAnchorElement>
    console.log(elementLink[0].href)
    if (!elementLink || elementLink.length === 0) {
      return
    }
    elementLink.forEach((e) => {
      e.addEventListener(
        'mouseenter',
        () => {
          console.log('mouse enter')
          // access page by fetch and get the response
          GM_xmlhttpRequest({
            method: 'GET',
            url: e.href,
            onload: function (response) {
              // console.log(response.responseXML)
              const document = response.responseText
              const regExp = /<title>(.*)<\/title>/
              const ed = regExp.exec(document)
              if (ed && ed.length >= 1) {
                console.log(ed[1])
                e.textContent = ed[1]
              }
            },
          })
        },
        { once: true },
      )
    })
  }, 3000)
}

export default app
