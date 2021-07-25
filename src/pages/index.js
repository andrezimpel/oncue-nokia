import { AudioPlayerProvider, useAudioPlayer } from "react-use-audio-player"
import React, { useEffect, useState } from "react"
import { headline, icon, label, menu, menuItem, phone, wrapper } from './index.module.scss'

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import appleIcon from '../images/menu/apple-icon.svg'
import audioOffIcon from '../images/menu/audio-off-icon.svg'
import audioOffLabel from '../images/menu/audio-off-label.svg'
import audioOnIcon from '../images/menu/audio-on-icon.svg'
import audioOnLabel from '../images/menu/audio-on-label.svg'
import callIcon from '../images/menu/call-icon.svg'
import callLabel from '../images/menu/call-label.svg'
import headlineImage from '../images/headline.svg'
import preSaveLabel from '../images/menu/pre-save-label.svg'
import snakeIcon from '../images/menu/snake-icon.svg'
import snakeLabel from '../images/menu/snake-label.svg'
import snippet from '../audio/snippet.mp3'
import spotifyIcon from '../images/menu/spotify-icon.svg'
import textIcon from '../images/menu/text-icon.svg'
import textLabel from '../images/menu/text-label.svg'

const Index = () => {
  return (
    <AudioPlayerProvider>
      <IndexPage/>
    </AudioPlayerProvider>
  )
}

const IndexPage = () => {
  const { togglePlayPause, playing } = useAudioPlayer({
    src: snippet,
    format: "mp3",
    autoplay: false,
  })

  const menuItems = [
    {
      icon: textIcon,
      labelImage: textLabel,
      label: "Text Cue",
      to: "sms://+18603216112"
    },
    {
      icon: callIcon,
      labelImage: callLabel,
      label: "Call Cue",
      to: "tel://+18603216112"
    },
    {
      icon: snakeIcon,
      labelImage: snakeLabel,
      label: "Play Snake"
    },
    {
      icon: playing ? audioOffIcon : audioOnIcon,
      labelImage: playing ? audioOffLabel : audioOnLabel,
      label: "Preview",
      onClick: togglePlayPause
    },
    {
      icon: spotifyIcon,
      labelImage: preSaveLabel,
      label: "Pre-Save"
    },
    {
      icon: appleIcon,
      labelImage: preSaveLabel,
      label: "Pre-Save"
    }
  ]

  return (
    <Layout>
      <Seo title="Home"/>
      <div className={wrapper}>
        <img className={headline} src={headlineImage} alt="Take my phone"/>
        <div className={phone}>
          <div className={menu}>
            {menuItems.map((item, index) => {
              const Tag = item.onClick ? 'button' : 'a'
              return (
                <Tag key={index} href={item.to} onClick={item.onClick} className={menuItem}>
                  <img className={icon} src={item.icon} alt={item.label}/>
                  <img className={label} src={item.labelImage} alt={item.label}/>
                </Tag>
              )
            })}
          </div>
          <StaticImage
            src="../images/phone.jpg"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="ONUE Phone"
          />
        </div>
      </div>
    </Layout>
  )
}

export default Index
