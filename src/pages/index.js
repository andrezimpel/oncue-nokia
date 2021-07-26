import { AudioPlayerProvider, useAudioPlayer } from "react-use-audio-player"
import React, { useState } from "react"
import { button, buttons, cancel, headline, icon, menu, menuItem, phone, phoneImage, phoneWrapper, screen, wrapper } from './index.module.scss'

import Layout from "../components/layout"
import Seo from "../components/seo"
import Snake from '../components/snake'
import { StaticImage } from "gatsby-plugin-image"
import appleIcon from '../images/menu/apple.svg'
import audioOffIcon from '../images/menu/preview-off.svg'
import audioOnIcon from '../images/menu/preview-on.svg'
import callIcon from '../images/menu/call.svg'
import headlineImage from '../images/headline.svg'
import snakeIcon from '../images/menu/snake.svg'
import snippet from '../audio/snippet.mp3'
import spotifyIcon from '../images/menu/spotify.svg'
import textIcon from '../images/menu/text.svg'

const Index = () => {
  return (
    <AudioPlayerProvider>
      <IndexPage/>
    </AudioPlayerProvider>
  )
}

const IndexPage = () => {
  const [showSnake, setShowSnake] = useState(false)
  const { togglePlayPause, playing } = useAudioPlayer({
    src: snippet,
    format: "mp3",
    html5: true,
    autoplay: false
  })

  const menuItems = [
    {
      icon: textIcon,
      label: "Text Cue",
      to: "sms://+18603216112"
    },
    {
      icon: callIcon,
      label: "Call Cue",
      to: "tel://+18603216112"
    },
    {
      icon: snakeIcon,
      label: "Play Snake",
      onClick: () => setShowSnake(!showSnake)
    },
    {
      icon: playing ? audioOffIcon : audioOnIcon,
      label: "Preview",
      onClick: togglePlayPause
    },
    {
      icon: spotifyIcon,
      label: "Pre-Save",
      to: "https://accounts.spotify.com/authorize?response_type=code&client_id=5a14783d79444ee9babd9176b256979e&scope=user-follow-modify+user-library-modify+playlist-modify-public+playlist-modify-private+user-read-email+user-read-private&redirect_uri=https%3A%2F%2Flnk.to%2F%7E%2Fprerelease%2Fspotify&state=bFVybD1sbmsudG8lMkZ0YWtlbXlwaG9uZXByZXNhdmUmc0lkPWYwZWI5NjU1LWIxZGUtNDlhNi1iODhkLTdmZTRhZTExYWE1NSZ0SWQ9YWZlNTYyN2YtMTc4ZC00OTAzLTkwYmUtM2ViZTJlODgxMzlkJnU9aHR0cHMlM0ElMkYlMkZsbmsudG8lMkZ0YWtlbXlwaG9uZXByZXNhdmUmdnQ9ZmVjZDFkZDBjODhiMjA1NTlhMTgwNWZkNWZmMTVjNmImdnU9NjBmZDMzZWZkZDEzNDEuNjU0NTYzODQ%3D"
    },
    {
      icon: appleIcon,
      label: "Pre-Save",
      href: "https://lnk.to/takemyphonepresave"
    }
  ]

  const content = showSnake ? (
    <Snake/>
  ) : (
    <div className={menu}>
      {menuItems.map((item, index) => {
        const Tag = item.onClick ? 'button' : 'a'
        return (
          <Tag key={index} href={item.to} onClick={item.onClick} className={menuItem}>
            <img className={icon} src={item.icon} alt={item.label}/>
          </Tag>
        )
      })}
    </div>
  )

  return (
    <Layout>
      <Seo title="Home"/>
      <div className={wrapper}>
        <img className={headline} src={headlineImage} alt="Take my phone"/>
        <div className={phoneWrapper}>
          <div className={phone}>
            <div className={screen}>
              {content}
            </div>
            <button className={cancel} onClick={() => setShowSnake(false)}>
              Cancel
            </button>
            <div className={buttons}>
              <button id="btnLeft" className={button} data-direction="left">left</button>
              <button id="btnRight" className={button} data-direction="right">right</button>
              <button id="btnTop" className={button} data-direction="top">top</button>
              <button id="btnBottom" className={button} data-direction="bottom">bottom</button>
            </div>
            <StaticImage
              src="../images/phone.jpg"
              width={700}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="ONUE Phone"
              className={phoneImage}
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index
