import React from "react"

export default function Navbar() {
    return(
        <header class="main-header">
        <span class="salon-logo">Ayesha.</span>
        <nav class="nav-area">
          <a class="nav-link" href="/">Home</a>
          <a class="nav-link" href="/about">About</a>
          <a class="nav-link" href="/services">Services</a>
          <a class="nav-link" href="/lookbook">Lookbook</a>
          <a class="nav-link" href="/news">News</a>
          <a class="nav-link" href="/contact">Contact</a>
          <a class="nav-link" href="/signup">Signup</a>
        </nav>
        <img
          class="nav-image"
          src="../images/icons8-interface-48.png"
          alt=""
        />
        <img
          class="nav-image"
          src="../images/icons8-shopping-bag-full-48.png"
          alt=""
        />
        <a class="btn nav" href="#/">&#8594; Book Online</a>
      </header>
            
    )
}