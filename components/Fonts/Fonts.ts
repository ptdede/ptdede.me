import FontFaceObserver from "fontfaceobserver";

const Fonts = () => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,800'
    link.rel = 'stylesheet'

    document.head.appendChild(link)

    const OpenSans = new FontFaceObserver('Open Sans')

    OpenSans.load().then(() => {
        // document.documentElement.classList.add('OpenSans')
    })
}

export default Fonts;
