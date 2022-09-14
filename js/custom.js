



class NavHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <nav>
                    <div class="nav_container container">
                        <div class="logo">
                            <img class="img1" src="./img/image 1.png" alt="">
                            <img class="img2" src="./img/image 3.png" alt="" srcset="">
                        </div>
                        <div class="nav_menu">
                            <ul class="menu">
                                <li class="menu_list"><a href="#" class="menu_links active">HOME</a></li>
                                <li class="menu_list"><a href="#" class="menu_links">ABOUT US</a></li>
                                <li class="menu_list"><a href="#" class="menu_links">GALLERY</a></li>
                                <li class="menu_list"><a href="#" class="menu_links">BLOG</a></li>
                                <li class="menu_list"><a href="#" class="menu_links">ZONES</a></li>
                                <li class="menu_list"><a href="#" class="menu_links">EVENTS</a></li>
                                <li class="menu_list"><a href="#" class="menu_links">CONTACT US</a></li>
                            </ul>
                            <div class="denote">
                                <a href="" class="denote_btn">DONATE</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
    `
    }
}

customElements.define('nav-header', NavHeader)

class NavFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <section class="footer_container container">
            <div class="title">
                <div class="logo">
                    <img class="img1" src="./img/nccf_logo.png" alt="">
                    <img class="img2" src="./img/nysc_logo.png" alt="" srcset="">
                </div>
                <div class="text"><h1>NCCF RIVERS STATE CHAPTER</h1></div>
            </div>
            <div class="footer_links">
                <ul class="menu">
                    <li class="menu_list"><a href="#" class="menu_links active">HOME</a></li>
                    <li class="menu_list"><a href="#" class="menu_links">ABOUT US</a></li>
                    <li class="menu_list"><a href="#" class="menu_links">GALLERY</a></li>
                    <li class="menu_list"><a href="#" class="menu_links">BLOG</a></li>
                    <li class="menu_list"><a href="#" class="menu_links">ZONES</a></li>
                    <li class="menu_list"><a href="#" class="menu_links">EVENTS</a></li>
                    <li class="menu_list"><a href="#" class="menu_links">CONTACT US</a></li>
                </ul>
                <div class="contact">
                    <p class="cont_us">CONTACT US</p>
                    <p>Email: info@nccfrivers.org</p>
                    <p>Phone: (+234) 9023859483</p>
                    <p>Address: 206A, Ordinance Road, Trans-Amadi, Port Harcourt</p>
                </div>
                <div class="socials">
                    <div class="social_link">
                        <img src="./img/instagram_colored.png" alt="" srcset="">
                        <p>instagram</p>
                    </div>
                    <div class="social_link">
                        <img src="./img/facebook_colored.png" alt="" srcset="">
                        <p>facebook</p>
                    </div>
                    <div class="social_link">
                        <img src="./img/twitter_colored.png" alt="" srcset="">
                        <p>twitter</p>
                    </div>
                    <div class="social_link">
                        <img src="./img/youtube-icon_colored.png" alt="" srcset="">
                        <p>Youtube</p>
                    </div>
                </div>
            </div>

            <span class="footer_line"></span>

            <p class="reserved"><span>&copy</span> NCCF Rivers State Chapter | All Rights Reserved </p>
        </section>
    </footer>
    `
    }
}

customElements.define('nav-footer', NavFooter)
