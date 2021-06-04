import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1,
    text: "główna",
    url: "/",
  },
  {
    id: 2,
    text: "Studio",
    url: "/about/",
  },
  {
    id: 3,
    text: "usługi",
    url: "/uslugi/",
  },
  {
    id: 4,
    text: "realizacje",
    url: "/portfolio/",
  },
  {
    id: 5,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 6,
    text: "kontakt",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link className="link link--kale" to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
