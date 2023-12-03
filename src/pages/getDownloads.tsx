const getDownloads = async () => {
    const res = await fetch('https://www.jumbo.com/zoeken?searchType=keyword&searchTerms=milk')
    const html = await res.text()

    console.log("html", html)
    return ''
}

export default getDownloads;