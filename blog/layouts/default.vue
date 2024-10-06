<template>

    <header id="header" class="header d-flex align-items-center fixed-top">
        <div class="container-fluid container-xl position-relative d-flex align-items-center">

            <NuxtLink to="/" class="logo d-flex align-items-center me-auto">
                <!-- Uncomment the line below if you also wish to use an image logo -->

                <h1 class="sitename">FlexStart</h1>
            </NuxtLink>

            <nav id="navmenu" class="navmenu">
                <ul>
                    <li>
                        <NuxtLink to="#hero" class="active">Home<br></NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#about">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#services">Services</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#portfolio">Portfolio</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#team">Team</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/blog">Blog</NuxtLink>
                    </li>
                    <li class="dropdown">
                        <NuxtLink to="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i>
                        </NuxtLink>
                        <ul>
                            <li>
                                <NuxtLink to="#">Dropdown 1</NuxtLink>
                            </li>
                            <li class="dropdown">
                                <NuxtLink to="#"><span>Deep Dropdown</span> <i
                                        class="bi bi-chevron-down toggle-dropdown"></i></NuxtLink>
                                <ul>
                                    <li>
                                        <NuxtLink to="#">Deep Dropdown 1</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#">Deep Dropdown 2</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#">Deep Dropdown 3</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#">Deep Dropdown 4</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="#">Deep Dropdown 5</NuxtLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <NuxtLink to="#">Dropdown 2</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Dropdown 3</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="#">Dropdown 4</NuxtLink>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <NuxtLink to="#contact">Contact</NuxtLink>
                    </li>
                </ul>
                <i class="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>

            <NuxtLink class="btn-getstarted flex-md-shrink-0" to="#about">Get Started</NuxtLink>

        </div>
    </header>
        

        <slot />
     
    <footer id="footer" class="footer">

        <div class="footer-newsletter">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-6">
                        <h4>Join Our Newsletter</h4>
                        <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                        <form action="forms/newsletter.php" method="post" class="php-email-form">
                            <div class="newsletter-form"><input type="email" name="email"><input type="submit"
                                    value="Subscribe"></div>
                            <div class="loading">Loading</div>
                            <div class="error-message"></div>
                            <div class="sent-message">Your subscription request has been sent. Thank you!</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="container footer-top">
            <div class="row gy-4">
                <div class="col-lg-4 col-md-6 footer-about">
                    <a href="index.html" class="d-flex align-items-center">
                        <span class="sitename">FlexStart</span>
                    </a>
                    <div class="footer-contact pt-3">
                        <p>A108 Adam Street</p>
                        <p>New York, NY 535022</p>
                        <p class="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                        <p><strong>Email:</strong> <span>info@example.com</span></p>
                    </div>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                    </ul>
                </div>

                <div class="col-lg-2 col-md-3 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                        <li><i class="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                    </ul>
                </div>

                <div class="col-lg-4 col-md-12">
                    <h4>Follow Us</h4>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                    <div class="social-links d-flex">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>

            </div>
        </div>

        <div class="container copyright text-center mt-4">
            <p>© <span>Copyright</span> <strong class="px-1 sitename">Meshach</strong> <span>All Rights
                    Reserved</span></p>
            <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you've purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: [buy-url] -->
                Designed by <a href="https://www.linkedin.com/in/meshach-ekene">BootstrapMade</a>
            </div>
        </div>

    </footer>
</template>

<script>

</script>
