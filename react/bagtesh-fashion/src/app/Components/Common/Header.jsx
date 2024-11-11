import React from 'react'

export default function Header() {
  return (
    <section class="header d-none d-md-block">
        <div class="container contianer_padding">
            <div class="row">
                <div class="col-xl-6 col-md-6 d-none d-md-block">
                    <div class="contact-us"> Contact us 24/7 :<a href="tel:+91-7062113105" title="Call Us"> +91-7062113105
                        </a>
                        <span> /</span>
                        <a href="mailto:info@bagteshfashion.com" title="Mail Us"> info@bagteshfashion.com</a>
                    </div>
                </div>
                <div class="col-xl-6 col-md-6 col-12">
                    <ul class="right-headerpanel text-right">
                        <li class="free_shipping"><a title="Free Shipping All Over India"> FREE SHIPPING ALL OVER INDIA</a>
                        </li>
                        <li><a href="login.html" title="Login"> LOGIN </a><span>/</span>
                            <a href="register.html" title="Register"> REGISTER</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
