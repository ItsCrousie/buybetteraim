import './App.css'


function App() {
  const domain = 'buybetteraim.vercel.app'
  // const domain : string = 'localhost'
  return (
    <div className="app">
      <ul className="links">
        <li><a href="https://www.youtube.com/channel/UCy7XlF1DcGzgbZdCqUYR-PQ?view_as=subscriber">Youtube</a></li>
        <li><a href="https://www.instagram.com/theslaviccatttv/?hl=en">Instagram</a></li>
        <li><a href="https://twitter.com/TheSlavicCat">Twitter</a></li>
        <li><a href="https://www.tiktok.com/@slavicttv">TikTok</a></li>
      </ul>
      <img src="public/slavic_header.png" alt="The Slavic Cat" className="app-header" loading='lazy'/>
      <iframe
          className='liveStream'
          src={`https://player.twitch.tv/?channel=slavic&parent=${domain}`}
          width="1080px"
          height="720px"
          allowFullScreen
        ></iframe>
    </div>
  )
}

export default App
