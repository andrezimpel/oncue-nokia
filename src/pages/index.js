import * as React from "react"

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
import spotifyIcon from '../images/menu/spotify-icon.svg'
import textIcon from '../images/menu/text-icon.svg'
import textLabel from '../images/menu/text-label.svg'

const IndexPage = () => {
  const menuItems = [
    {
      icon: textIcon,
      labelImage: textLabel,
      label: "Text Cue"
    },
    {
      icon: callIcon,
      labelImage: callLabel,
      label: "Call Cue"
    },
    {
      icon: snakeIcon,
      labelImage: snakeLabel,
      label: "Play Snake"
    },
    {
      icon: audioOffIcon,
      labelImage: audioOffLabel,
      label: "Preview"
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
            {menuItems.map((item, index) => (
              <div key={index} className={menuItem}>
                <img className={icon} src={item.icon} alt={item.label}/>
                <img className={label} src={item.labelImage} alt={item.label}/>
              </div>
            ))}
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

export default IndexPage
